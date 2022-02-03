<template>
  <section class="chat-page" :class="{'mobile': $route.params.id === 'inbox'}">
    <div class="chat-page__mobile-header">
      <h1 class="chat-page__mobile-header-title">Messages</h1>
    </div>
    <div class="chat-page__content flex">
      <ChatListBlock class="chat-page__list" />
      <ChatMainBlock v-show="$route.params.id !== 'inbox'" class="chat-page__main" />
      <ChatEmptyBlock v-show="$route.params.id === 'inbox'" class="chat-page__main" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Cookies from 'js-cookie'

export default {
  computed: {
    ...mapGetters([
      'TOKEN',
      'TYPE'
    ])
  },
  components: {
    ChatListBlock: () => ({
      component: import('./components/chatList')
    }),
    ChatMainBlock: () => ({
      component: import('./components/chatMain')
    }),
    ChatEmptyBlock: () => ({
      component: import('./components/chatEmpty')
    }),
  },
  async created() {
    await this.$store.dispatch('getChatList', {
      page: 1,
      limit: 10,
      type: this.TYPE
    })
    this.$store.commit('setSocket', new WebSocket(`ws://185.100.67.139:9696?chat_token=${Cookies.get('clagme-chtk')}`))
  }
}
</script>

<style scoped>
.chat-page {
  border-top: 0.33px solid rgba(46, 44, 52, 0.24);
}
.chat-page__content {
  height: calc(100vh - 113px);
  width: 100%;
}
.chat-page__list {
  width: 400px;
  height: 100%;
  overflow-y: auto;
}
.chat-page__main {
  width: calc(100% - 400px);
  height: 100%;
  overflow-y: auto;
}
.chat-page__mobile-header {
  display: none;
}

@media (max-width: 768px) {
  .chat-page__mobile-header {
    display: block;
    filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.12));
    background-color: #FFFFFF;
    padding: 20px 16px;
    box-sizing: border-box;
  }
  .chat-page__mobile-header-title {
    font-size: 20px;
    line-height: 24px;
    margin: 0;
  }
  .chat-page__content {
    height: calc(100vh - 123px);
  }
  .mobile .chat-page__list, .chat-page__main, .mobile .chat-page__mobile-header {
    width: 100%;
    display: block;
  }
  .mobile .chat-page__main, .chat-page__list, .chat-page__mobile-header {
    display: none;
  }
}
</style>
