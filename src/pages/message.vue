<template>
  <f7-page>
    <f7-navbar title="Message" back-link="Back" sliding></f7-navbar>
    <f7-messages>
      <f7-message v-for="message in messages"
        :text="message.text"
        :label="message.label"
        :date="message.date"
        :name="message.name"
        :avatar="message.avatar"
        :type="message.type"
        :day="message.day"
        :time="message.time"
        @click="onClick"
        @click:text="onTextClick"
        @click:name="onNameClick"
        @click:avatar="onAvatarClick"
      ></f7-message>
    </f7-messages>
    <f7-messagebar placeholder="Message" send-link="Send" @submit="onSubmit"></f7-messagebar>
  </f7-page>
</template>

<script>
export default {
  data: function () {
    return {
      name: 'Vladimir',
      avatar: 'path/to/avatar-1.jpg',
      messages: [
        {
          day: 'Wendesday',
          time: '13:34'
        },
        {
          name: 'Vladimir',
          text: 'How are you?',
          label: 'Sent in good mood :)',
          avatar: 'path/to/avatar-1.jpg',
          date: 'Yesterday 13:34'
        },
        {
          name: 'Jane',
          text: 'I\'m good, thank you!',
          type: 'received',
          avatar: 'path/to/avatar-2.jpg',
          date: 'Yesterday at 13:50'
        }
      ]
    };
  }
}
</script>