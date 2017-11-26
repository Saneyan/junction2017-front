<template>
  <f7-page>
    <f7-navbar title="Matchings" back-link="Back" sliding></f7-navbar>
    <f7-card v-for="matching in matchings">
      <f7-card-header class="job-seeker-cover"><img :src="matching.image" /></f7-card-header>
      <f7-card-content>
        <ul class="job-seeker-info">
          <li>Name: {{matching.name}}</li>
          <li>Job Track: {{matching.job_track}}</li>
        </ul>
      </f7-card-content>
      <f7-card-footer>
        <f7-button @click="goToInterview">Invite interview</f7-button>
      </f7-card-footer>
    </f7-card>
  </f7-page>
</template>

<script>
export default {

  data: function () {
    return {
      matchings: [
        {
          name: "Masashi Nohara",
          job_track: "Corporate Strategy, Finance",
          image: require('../../../masashi.png')
        }
      ]
    }
  },

  methods: {
    goToInterview: function () {
      this.$router.load({
        url: '/interview/'
      });
    }
  }
}
</script>