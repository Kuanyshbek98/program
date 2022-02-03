<template>
  <div class="chats">
    <HeaderBlock v-bind:data="header" />
    <div class="container">
      <router-link to="/chat" class="chats__item flex">
        <div class="chats__avatar avatar">
          <img
            class="avatar__img"
            src="@/assets/images/message-avatar.svg"
            alt=""
          />
        </div>
        <div class="chats__text">
          <h3 class="chats__name chats__text_margin">Dean Winchester</h3>
          <p class="chats__status chats__text_margin">Мортал комбат турнир</p>
          <label class="chats__message chats__text_margin" for=""
            >Здравствуйте, сколько в команде макс людей?</label
          >
        </div>
      </router-link>

      <router-link to="/chat" class="chats__item flex">
        <div class="chats__avatar avatar">
          <img
            class="avatar__img"
            src="@/assets/images/message-avatar.svg"
            alt=""
          />
        </div>
        <div class="chats__text">
          <h3 class="chats__name chats__text_margin">Dean Winchester</h3>
          <p class="chats__status chats__text_margin">Мортал комбат турнир</p>
          <label class="chats__message chats__text_margin" for=""
            >Здравствуйте, сколько в команде макс людей?</label
          >
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import HeaderBlock from "@/components/header/header";
export default {
  data() {
    return {
      header: {
        name: "Чаты",
        color: "#1FCC79",
        chooseImg: true,
      },
    };
  },

  components: {
    HeaderBlock,
  },
};
</script>

<style scoped>
.chats__item {
  margin: 25px 0;
  justify-content: flex-start;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 0.5px;
  color: #3e5481;

  padding-bottom: 15px;
  border-bottom: 1px solid #d0dbea;
}
.chats__avatar {
  margin: 0 20px;
}
.chats__status {
  color: #898a8d;
}
.chats__message {
  font-weight: 500;
  font-size: 12px;
  color: #9fa5c0;
}
.chats__text_margin {
  margin: 5px 0;
}
</style>
