<template>
  <f7-page>
    <f7-navbar title="Company Contacts" back-link="Back" sliding></f7-navbar>
    <f7-card v-for="contact in contacts">
      <f7-card-header class="company-cover"><img :src="contact.image" /></f7-card-header>
      <f7-card-content>
        <f7-button fill raised @click="goToContract">Sign contract</f7-button>
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
          name_of_company: "Helsinki Hearth",
          image: require('../../../helsinki_hearth.png')
        },
        {
          name_of_company: 'Nokia',
          image: 'https://s3-ap-northeast-1.amazonaws.com/prework.fi/static/img/nokia.jpg'
        },
        {
          name_of_company: 'SUPERCELL',
          image: 'https://s3-ap-northeast-1.amazonaws.com/prework.fi/static/img/og_mainpage.png'
        },
        {
          name_of_company: 'Fujitsu',
          image: 'https://s3-ap-northeast-1.amazonaws.com/prework.fi/static/img/fujitsu.jpg'
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