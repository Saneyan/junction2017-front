<template>
  <f7-page>
    <f7-navbar title="Matchings" back-link="Back" sliding></f7-navbar>
    <f7-card v-for="matching in matchings">
      <f7-card-content>{{matching.name_of_company}}</f7-card-content>
      <f7-card-footer>
        <f7-button>Go to interview</f7-button>
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
          name_of_company: 'Helsinki Hearth'
        }
      ]
    }
  }
}
</script>