<template>
  <f7-page>
    <f7-navbar title="Sign Up" sliding></f7-navbar>
    <f7-block-title>Select user type</f7-block-title>
    <f7-list form>
      <f7-list-item radio name="user-type" value="1" title="Job seeker" checked></f7-list-item>
      <f7-list-item radio name="user-type" value="2" title="Employer"></f7-list-item>
    </f7-list>
    <f7-list>
      <f7-button fill round big @click="goToSignUpForm">Continue</f7-button>
    </f7-list>
  </f7-page>
</template>

<script>
export default {
  methods: {
    goToSignUpForm: function () {
      this.$router.load({
        url: '/sign-up/form/'
      });
    }
  }
}
</script>