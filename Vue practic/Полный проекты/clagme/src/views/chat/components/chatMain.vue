<template>
  <div class="chat-main">
    <ChatHeader />
    <div class="chat-main__content">
      <div v-for="message in messages" :key="message.id" class="chat-main__block">
        <ChatMessage :message="message" />
        <a :class="{me: +$route.params.id !== +message.to_user_id}" class="chat-main__date" v-if="message.created_at">
          {{ message.created_at.slice(0, 10).split('-').reverse().join('.') }}
        </a>
      </div>
      <v-spinner v-if="loader" />
    </div>
    <ChatFooter />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Cookies from 'js-cookie'
import ChatHeader from './chatHeader'
import ChatFooter from './chatFooter'
import ChatMessage from './chatMessage'
export default {
  data() {
    return {
      messages: [],
      page: 1,
      loader: false,
      userId: null
    }
  },
  computed: {
    ...mapGetters([
      'SOCKET',
      'TYPE',
      'CHAT_LIST',
      'CHAT_HEADER'
    ])
  },
  methods: {
    async paginate () {
      if (this.$route.params.id === 'inbox') {
        return
      }
      this.loader = true
      await this.$api.get(`/${this.TYPE}/chat-message-list`, {
        params: {
          user_id: this.TYPE === 'employee' ? this.$route.params.id : Cookies.get('clagme-uid'),
          employee_id: this.TYPE === 'employee' ? Cookies.get('clagme-uid') : this.$route.params.id,
          page: this.page++
        }})
        .then((response) => {
          // console.log(response)
          // if (response.current_page === 1) {
          //   this.messages = response
          // } else {
          //   this.messages.data = [...this.messages.data, ...response.data]
          // }
          this.messages = response.data.data.reverse()
        })
        .finally(() => {
          this.loader = false
        })
    },
    async getChatList () {
      await this.$store.dispatch('getChatList', {
        page: 1,
        limit: 10,
        type: this.TYPE
      })
    },
    onSocket () {
      this.SOCKET.onmessage = async (event) => {
        const data = JSON.parse(event.data)
        console.log(data)
        if ((data.action === 'TextMessage' || data.action === 'media')) {
          this.page = 1
          await this.getChatList()
          console.log(+data.to_user_id, +this.$route.params.id, +data.to_user_id, +Cookies.get('clagme-uid'))
          if (+data.to_user_id !== +this.$route.params.id || +data.to_user_id !== +Cookies.get('clagme-uid')) {
            return
          }
          if (!this.messages.length) {
            await this.paginate()
            return
          }
          // if (this.$route.params.id.split('-')[0] === 'new') {
          //   await this.getChatList()
          //   await this.$router.push(`/chat/${this.CHAT_LIST[0].id}-${this.CHAT_HEADER.id}`)
          //   // this.paginate()
          //   return
          // }
          this.messages.unshift({
            id: Date.now(),
            message: data.text,
            to_user_id: data.to_user_id
          })
        }
        console.log(this.messages)
      }
    }
  },
  components: {
    ChatHeader,
    ChatFooter,
    ChatMessage,
  },
  mounted() {
    if (this.SOCKET) {
      this.onSocket()
    }
  },
  async created () {
    this.userId = Cookies.get('clagme-uid')
    if (this.CHAT_HEADER && this.$route.params.id !== 'inbox') {
      await this.paginate()
    } else if (this.$route.params.id !== 'inbox') {
      await this.$router.push('/chat/inbox')
    }
  },
  watch: {
    $route () {
      this.page = 1
      this.paginate()
    },
    SOCKET () {
      this.onSocket()
    }
  }
}
</script>

<style scoped>
.chat-main {
  display: flex;
  flex-direction: column;
}
.chat-main__content {
  height: calc(100% - 112px);
  background: #FBFAFC;
  border-top: 1px solid #EBEAED;
  border-bottom: 1px solid #EBEAED;
  overflow-y: auto;
  display: flex;
  flex-direction: column-reverse;
  padding: 32px 16px;
  box-sizing: border-box;
}
.chat-main__date {
  color: #84818A;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  margin-top: 4px;
  display: block;
}
.chat-main__date.me {
  text-align: right;
}
.chat-main__block {
  margin-top: 24px;
}
</style>
