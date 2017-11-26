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
    var initalStage = 0;
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
      const apiPath = 'https://wt-948eb81550a069c57c30f80e975bd7b7-0.sandbox.auth0-extend.com/answer'
      const option_id = null;
      this.$$.post(apiPath, { option_id, question_id: nextStage }, function (d) {
        const body = JSON.parse(d)
        if (body.next) {
          this.question = body.next.question_content;
          this.options = body.next.options.map(function (o) { return o.option_content });
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
