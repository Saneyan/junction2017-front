<template>
  <f7-page>
    <f7-navbar title="Quiz" sliding></f7-navbar>
    <f7-block>
      <p>{{question}}</p>
    </f7-block>
    <f7-block>
      <f7-grid>
        <f7-col>
          <f7-button fill raised big
            @click="next">{{options[0]}}</f7-button>
        </f7-col>
        <f7-col>
          <f7-button fill raised big color="red"
            @click="next">{{options[1]}}</f7-button>
        </f7-col>
      </f7-grid>
    </f7-block>
    <f7-block>
      <f7-button @click="stop">Stop answering questions</f7-button>
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
    stop: function () {
      this.$router.back();
    },

    next: function () {
      var nextStage = this.stage + 1;
      this.nextQuiz(nextStage);
    },

    nextQuiz: function (nextStage) {
      // Currently we have a mock of quiz data formatted in JSON.
      this.$$.getJSON('http://127.0.0.1:8082/mock/quiz_' + nextStage + '.json', function (d) {
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
      this.stage = nextStage;
    }
  }
}
</script>