<template>
  <f7-page name="main">
    <!-- Material Theme Navbar -->
    <f7-navbar v-if="$theme.material">
      <f7-nav-left>
        <f7-link icon="icon-bars" open-panel="left"></f7-link>
      </f7-nav-left>
      <f7-nav-center sliding>Dashboard</f7-nav-center>
    </f7-navbar>
    <!-- Page Content -->

    <f7-block v-if="!account.quiz_answered">
      <f7-button big fill @click="startQuiz">Start Quiz</f7-button>
    </f7-block>

    <f7-block v-if="account.quiz_answered">
      <f7-button big fill @click="seeMatchings">See matchings</f7-button>
    </f7-block>

    <f7-list>
      <f7-list-item v-if="account.type === 'job_seeker' && account.quiz_answered" center link="/quiz/">
        Retry quiz
      </f7-list-item>
      <f7-list-item v-if="account.type === 'job_seeker'" center link="/contact/company/">
        Company contacts
      </f7-list-item>
      <f7-list-item v-if="account.type === 'employer'" center link="/contact/job-seeker/">
        Job Seeker contacts
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
export default {
  data: function () {
    return {
      account: this.$select('account')
    };
  },

  methods: {
    startQuiz: function () {
      this.$router.load({ url: '/quiz/' });
    },

    seeMatchings: function () {
      this.$router.load({ url: '/matchings/' });
    },
  },
}
</script>
