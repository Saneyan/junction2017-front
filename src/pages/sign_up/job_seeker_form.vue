<template>
  <f7-page>
    <f7-navbar title="Sign Up" sliding></f7-navbar>
    <f7-block-title>Fill requirements</f7-block-title>
    <f7-list form>
      <f7-list-item>
        <f7-label>Name</f7-label>
        <f7-input @change="changeInput" name="name" type="text" placeholder="Name"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Age</f7-label>
        <f7-input @change="changeInput" name="age" type="number" placeholder="Age"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Job Track</f7-label>
        <f7-input @change="changeInput" name="job_track" type="text" placeholder="Job Track"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Nation Currently Stay</f7-label>
        <f7-input @change="changeInput" name="nation" type="text" placeholder="Nation Currently Stay"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-button fill round big @click="signUp">Sign up</f7-button>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
import { postRequirements } from '../../api'

export default {
  methods: {
    changeInput: function (e) {
      this[e.target.name] = e.target.value;
    },

    signUp: function () {
      postRequirements({
        type: 'job_seeker',
        name: this.name,
        age: this.age,
        job_track: this.job_track,
        nation: this.nation
      });

      this.$router.load({
        url: '/sign-up/completed/'
      });
    }
  }
}
</script>