<template>
  <f7-page>
    <f7-navbar title="Matchings" back-link="Back" sliding></f7-navbar>
    <f7-card v-for="matching in matchings">
      <f7-card-header class="company-cover"><img :src="matching.image" /></f7-card-header>
      <f7-card-footer>
        <a @click="goToInterview">Go to interview</a>
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
          name_of_company: 'Helsinki Hearth',
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
    goToInterview: function () {
      window.open('https://www.recright.com/interview/public/fc2a7c7db5422979dfc1c0d54013e1929715', '_blank');
    }
  }
}
</script>