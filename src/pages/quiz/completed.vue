<template>
  <f7-page>
    <f7-navbar title="Completed" sliding></f7-navbar>
    <f7-block>
      <p>Thank you!</p>
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