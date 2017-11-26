<template>
  <f7-page>
    <f7-navbar title="Completed" sliding></f7-navbar>
    <f7-block>
      <h2 style="text-align: center">Thank you!</h2>
      <img style="width:100%;" src="https://s3-ap-northeast-1.amazonaws.com/prework.fi/static/img/quiz_completed.jpg" />
    </f7-block>
    <f7-button @click="close">Close</f7-button>
  </f7-page>
</template>

<script>
import { markAsAnsweredQuiz } from '../../api'

export default {
  methods: {
    close: function () {
      markAsAnsweredQuiz();
      this.$router.load({ pageName: 'main' });
    }
  }
}
</script>