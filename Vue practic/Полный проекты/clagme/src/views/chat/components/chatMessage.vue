<template>
  <div class="message" :class="{me: +$route.params.id !== +message.to_user_id}">
    <p v-if="message.message" class="message__text" v-html="text"></p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      default: () => {}
    },
  },
  computed: {
    text () {
      return this.message.message.split('\n' || '\r').join('<br>')
    }
  },
}
</script>

<style scoped>
.message {
  display: flex;
}
.message.me {
  justify-content: flex-end;
}
.message__text {
  padding: 8px 12px;
  background: #FFFFFF;
  border-radius: 4px 4px 4px 0;
  filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.12));
  display: flex;
  margin: 0;
  color: #2E2C34;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.me .message__text {
  background: #2E2C34;
  border-radius: 4px 4px 0 4px;
  color: #FBFAFC;
  text-align: right;
}
</style>
