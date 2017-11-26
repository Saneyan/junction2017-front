<template>
  <f7-page>
    <f7-navbar title="Company Contacts" back-link="Back" sliding></f7-navbar>
    <f7-card v-for="contact in contacts">
      <f7-card-header>{{contact.name_of_company}}</f7-card-header>
      <f7-card-content>
        <f7-button fill raised @click="goToContract">Send contract</f7-button>
      </f7-card-content>
      <f7-card-footer>
        <f7-button @click="goToMessage">Message</f7-button>
      </f7-card-footer>
    </f7-card>
  </f7-page>
</template>

<script>
export default {
  data: function () {
    return {
      contacts: [
        {
          "name_of_company": "Helsinki Hearth"
        }
      ]
    }
  },

  methods: {
    goToContract: function () {
      this.$router.load({ url: '/contract/' });
    },

    goToMessage: function () {
      this.$router.load({ url: '/message/' });
    }
  }
}
</script>