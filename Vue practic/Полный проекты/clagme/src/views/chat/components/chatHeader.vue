<template>
  <div class="chat-header flex">
    <div class="chat-header__left-block flex">
      <router-link to="/chat/inbox"><ArrowLeftIcon /></router-link>
      <h4 v-if="CHAT_HEADER" class="chat-header__name">{{ CHAT_HEADER.name }} {{CHAT_HEADER.surname}}</h4>
<!--      <OnlineIcon class="chat-header__status" />-->
<!--      <span>Online</span>-->
    </div>
    <div class="chat-header__right-block">
      <a class="chat-header__option"><OptionIcon /></a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ArrowLeftIcon from '@/assets/svg/arrow-left.svg?inline'
// import OnlineIcon from '@/assets/svg/online.svg?inline'
import OptionIcon from '@/assets/svg/option.svg?inline'
export default {
  computed: {
     ...mapGetters([
       'CHAT_HEADER'
     ])
  },
  components: {
    ArrowLeftIcon,
    // OnlineIcon,
    OptionIcon
  },
}
</script>

<style scoped>
.chat-header {
  padding: 16px 16px 16px 20px;
  background-color: #FFFFFF;
}
.chat-header__name {
  font-size: 16px;
  line-height: 22px;
  margin: 0 8px 0 15px;
}
.chat-header__status {
  margin-right: 8px;
}
.chat-header__option {
  padding: 0 10px;
}
</style>
