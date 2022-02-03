<template>
  <form @submit.prevent="send()" class="chat-footer flex">
    <div class="chat-footer__emoji">
      <a><EmojiIcon /></a>
    </div>
    <textarea ref="input" v-model.trim="message" placeholder="Send your message…" class="chat-footer__input"></textarea>
    <label class="chat-footer__upload">
      <input @change="fileChangeHandler" type="file" hidden>
      <PlusIcon />
    </label>
    <button class="chat-footer__send-btn"><SendIcon /></button>
  </form>
</template>

<script>
import { mapGetters } from 'vuex'
import EmojiIcon from '@/assets/svg/emoji.svg?inline'
import PlusIcon from '@/assets/svg/plus.svg?inline'
import SendIcon from '@/assets/svg/send.svg?inline'
export default {
  data() {
    return {
      message: ''
    }
  },
  computed: {
    ...mapGetters([
      'SOCKET'
    ])
  },
  methods: {
    async fileChangeHandler(e){
      if (!e) {
        return
      }
      let formData = new FormData()
      let files = [...e.target.files]
      for (let i = 0; i < files.length; i++) {
        formData.append(`contents[${i}][path]`, files[i])
        formData.append(`contents[${i}][type]`, 'image')
      }
      this.$api.post('/chat/upload-media', formData)
        .then((response) => {
          console.log(response)
          this.socket('image', response.data.data, null)
        })
        .catch((e) => {
          if (e.response) {
            this.$toast.error(e.response.data.message)
          }
        })
    },
    send () {
      if (this.message) {
        this.SOCKET.send(JSON.stringify({
          to_user_id: this.$route.params.id,
          action: 'TextMessage',
          text: this.message.trim()
        }))
        this.message = ''
      }
    },
    keyHandler (e) {
      if (e.ctrlKey && e.keyCode === 13) {
        this.message += '\n'
      } else if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault()
        this.send()
      }
    }
  },
  components: {
    EmojiIcon,
    PlusIcon,
    SendIcon
  },
  mounted() {
    this.$refs.input.addEventListener('keydown', this.keyHandler)
  },
  beforeDestroy() {
    this.$refs.input.removeEventListener('keydown', this.keyHandler)
  }
}
</script>

<style scoped>
.chat-footer {
  padding: 17px 12px 12px 14px;
}
.chat-footer__input {
  margin: 0 0 0 10px;
  resize: none;
}
.chat-footer__upload svg {
  fill: #84818A;
}
.chat-footer__upload {
  margin: 0 21px;
  cursor: pointer;
}
.chat-footer__send-btn {
  border-radius: 4px;
  background-color: var(--blue-color);
  width: 32px;
  height: 32px;
}
</style>
