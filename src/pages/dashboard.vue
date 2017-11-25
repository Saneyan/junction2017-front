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

    <template v-if="job_seeker">
      <f7-block v-if="!quiz_answered">
        <f7-button big fill @click="startQuiz">Start Quiz</f7-button>
      </f7-block>
      <f7-block v-if="quiz_answered">
        <f7-button big fill @click="seeMatchings">See matchings</f7-button>
      </f7-block>
    </template>

    <f7-list>
      <f7-list-item v-if="job_seeker && quiz_answered" center link="/quiz/">
        Retry quiz
      </f7-list-item>
      <f7-list-item v-if="job_seeker" center link="/contact/company/">
        Company contacts
      </f7-list-item>
      <f7-list-item v-if="employer" center link="/contact/job-seeker/">
        Job Seeker contacts
      </f7-list-item>
    </f7-list>

  </f7-page>
</template>

<script>
export default {
  data: function () {
    return {
      job_seeker: true,
      employer: false,
      quiz_answered: false
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
