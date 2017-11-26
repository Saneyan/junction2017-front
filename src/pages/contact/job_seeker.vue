<template>
  <f7-page>
    <f7-navbar title="Job Seeker Contacts" back-link="Back" sliding></f7-navbar>
    <f7-card v-for="contact in contacts">
      <f7-card-header class="job-seeker-cover"><img :src="contact.image" /></f7-card-header>
      <f7-card-content>
        <ul class="job-seeker-info">
          <li>Name: {{contact.name}}</li>
          <li>Job Track: {{contact.job_track}}</li>
        </ul>
      </f7-card-content>
      <f7-card-content>
        <f7-button fill raised>Send Offer</f7-button>
      </f7-card-content>
    </f7-card>
  </f7-page>
</template>

<script>
export default {
  data: function () {
    return {
      contacts: [
        {
          name: "Masashi Nohara",
          job_track: "Corporate Strategy, Finance",
          image: require('../../../masashi.png')
        }
      ]
    }
  }
}
</script>