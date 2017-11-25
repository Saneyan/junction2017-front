<template>
  <f7-page>
    <f7-navbar title="Sign Up" sliding></f7-navbar>
    <f7-block-title>Fill requirements</f7-block-title>
    <f7-list form>
      <f7-list-item>
        <f7-label>Job Track</f7-label>
        <f7-input type="text" placeholder="Job Track"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Name of Company</f7-label>
        <f7-input type="text" placeholder="Name of Company"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-button fill round big @click="signUp">Sign up</f7-button>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
export default {
  methods: {
    signUp: function () {
      this.$router.load({
        url: '/sign-up/completed/'
      });
    }
  }
}
</script>