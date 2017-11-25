<template>
  <f7-page>
    <f7-navbar title="Sign Up" sliding></f7-navbar>
    <f7-block-title>Select user type</f7-block-title>
    <f7-list form>
      <f7-list-item @change="changeUserType" radio name="user-type" value="1" title="Job seeker" checked></f7-list-item>
      <f7-list-item @change="changeUserType" radio name="user-type" value="2" title="Employer"></f7-list-item>
    </f7-list>
    <f7-block>
      <f7-button fill round big @click="goToSignUpForm">Continue</f7-button>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  data: function () {
    return {
      userType: 1
    };
  },

  methods: {
    goToSignUpForm: function () {
      if (this.userType === 1) {
        this.$router.load({ url: '/sign-up/job-seeker-form/' });
      } else if (this.userType === 2) {
        this.$router.load({ url: '/sign-up/employer-form/' });
      }
    },

    changeUserType: function (e) {
      this.userType = Number(e.target.value);
    }
  }
}
</script>