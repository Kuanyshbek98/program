<template>
  <div class="chat-list">
    <div
      @click="open(chat)"
      v-for="(chat, index) in CHAT_LIST"
      :key="index"
      class="chat-list__item flex"
      :class="{
        'chat-list__item_active':
          $route.params.id ===
          `${TYPE === 'user' ? chat.employee.id : chat.user.id}`,
      }"
    >
      <div
        :style="{
          backgroundImage: `url(${
            $image +
            (TYPE === 'user'
              ? 'image/' + chat.employee.image
              : 'images/' + (chat.resume ? chat.resume.photo : ''))
          })`,
        }"
        class="chat-list__avatar avatar"
      ></div>
      <div class="chat-list__text">
        <p v-if="TYPE === 'employee'" class="chat-list__author">
          {{ chat.user.name }} {{ chat.user.surname }}
        </p>
        <p v-else class="chat-list__author">
          {{ chat.employee.name }} {{ chat.employee.surname }}
        </p>
        <p v-if="chat.last_message" class="chat-list__message">
          {{ chat.last_message.message }}
        </p>
      </div>
      <div class="chat-list__other">
        <div v-if="chat.updated_at" class="chat-list__time">
          {{ chat.updated_at.slice(0, 10).split("-").reverse().join(".") }}
        </div>
        <div
          v-if="
            (TYPE === 'user' &&
              chat.last_message.hasOwnProperty('employee_id')) ||
            (TYPE === 'employee' && chat.last_message.hasOwnProperty('user_id'))
          "
          class="chat-list__count"
        >
          {{ chat.count_new_messages }}
        </div>
        <div v-else class="chat-list__action">
          <CheckIcon v-if="chat.count_new_messages" style="fill: #d8d8d8" />
          <ReadIcon v-if="!chat.count_new_messages" />
        </div>
      </div>
    </div>
    <h3 style="padding-left: 20px" v-if="CHAT_LIST && !CHAT_LIST.length">
      The list is empty
    </h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import CheckIcon from "@/assets/svg/check.svg?inline";
import ReadIcon from "@/assets/svg/read.svg?inline";
export default {
  computed: {
    ...mapGetters(["CHAT_LIST", "SOCKET", "TYPE"]),
  },
  methods: {
    open(chat) {
      console.log(chat);
      if (
        +this.$route.params.id ===
        (this.TYPE === "user" ? chat.employee.id : chat.user.id)
      ) {
        console.log(
          this.$route.params.id,
          this.TYPE === "user" ? chat.employee.id : chat.user.id
        );
        return;
      } else {
        this.SOCKET.send(
          JSON.stringify({
            to_user_id: this.TYPE === "user" ? chat.employee.id : chat.user.id,
            action: "read",
            text: "",
          })
        );
      }
      this.$store.commit(
        "setChatHeader",
        this.TYPE === "user" ? chat.employee : chat.user
      );
      this.$router.push(
        `/chat/${this.TYPE === "user" ? chat.employee.id : chat.user.id}`
      );
    },
  },
  components: {
    CheckIcon,
    ReadIcon,
  },
};
</script>

<style scoped>
.chat-list__item {
  padding: 14px 12px;
  cursor: pointer;
  border-left: 3px solid #ffffff;
}
.chat-list__item:not(:last-child) {
  border-bottom: 1px solid #ebeaed;
}
.chat-list__item_active {
  background: rgba(85, 66, 246, 0.1);
  border-color: var(--blue-color);
}
.chat-list__avatar {
  width: 42px;
  height: 42px;
  margin-right: 12px;
}
.chat-list__author {
  font-size: 16px;
  line-height: 22px;
  margin: 0;
}
.chat-list__message {
  color: #84818a;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.chat-list__text {
  width: calc(100% - 109px);
}
.chat-list__time {
  color: #84818a;
  font-size: 12px;
  line-height: 18px;
}
.chat-list__other {
  width: 55px;
}
.chat-list__count {
  background: #fc3400;
  border-radius: 12px;
  width: 20px;
  height: 20px;
  text-align: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
  margin: auto 0 auto auto;
}
.chat-list__action {
  text-align: right;
}
</style>
