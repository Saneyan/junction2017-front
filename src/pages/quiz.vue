<template>
  <f7-page>
    <f7-navbar title="Quiz" back-link="Back" sliding></f7-navbar>
    <f7-block>
      <p>{{question}}</p>
    </f7-block>
    <f7-block>
      <f7-grid>
        <f7-col>
          <f7-button fill raised color="red"
            @click="next">{{options[0]}}</f7-button>
        </f7-col>
        <f7-col>
          <f7-button fill raised
            @click="next">{{options[1]}}</f7-button>
        </f7-col>
      </f7-grid>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  data: function() {
    var initalStage = 1;
    this.nextQuiz(initalStage);

    return {
      question: '',
      options: [],
      stage: initalStage
    };
  },

  methods: {
    next: function () {
      var nextStage = Number(this.stage) + 1;
      this.nextQuiz(nextStage);
    },

    nextQuiz: function (stage) {
      // Currently we have a mock of quiz data formatted in JSON.
      this.$$.getJSON('http://127.0.0.1:8082/mock/quiz_' + stage + '.json', function (d) {
        if (d.next) {
          this.question = d.question;
          this.options = d.options.map(function (o) { return o.content });
        } else {
          this.$router.load({
            url: '/quiz/completed/'
          });
        }
      }.bind(this));

      // Update current stage
      this.stage++;
    }
  }
}
</script>