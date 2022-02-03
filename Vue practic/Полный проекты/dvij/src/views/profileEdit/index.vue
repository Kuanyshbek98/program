<template>
  <div class="profile-edit">
    <div class="container">
      <div v-show="profileChange" class="profile-edit__change-block flex">
        <span
          @click="profileChange = false"
          for=""
          class="profile-edit__cancel"
        >
          Отменить
        </span>
        <span @click="changeSave = true" for="" class="profile-edit__save">
          Сохранить
        </span>
      </div>
      <div class="profile-edit__block flex">
        <router-link class="profile-edit" to="/chats">
          <img src="@/assets/images/back.svg" alt="" />
        </router-link>
        <img
          class="avatar__img"
          src="@/assets/images/message-avatar.svg"
          alt=""
        />
        <div class="profile-edit__text">
          <h2 class="profile-edit__name">Aibek Nurtazayev</h2>
          <span
            @click="profileChange = !profileChange"
            class="profile-edit__change"
          >
            Изменить профиль
          </span>
        </div>
      </div>
      <Setting v-bind:profileChange="profileChange" />
      <SaveSuccess
        v-show="changeSave"
        v-on:changeSave="changeSave = $event"
        v-on:profileChange="(profileChange = $event), (changeSave = $event)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileChange: false,
      floorChange: true,
      changeSave: true,
    };
  },
  components: {
    Setting: () => ({
      component: import("./components/setting.vue"),
    }),
    SaveSuccess: () => ({
      component: import("./components/saveSuccess.vue"),
    }),
  },
};
</script>

<style scoped>
.profile-edit {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;

  color: #1e1d4c;
}
.profile-edit__block {
  margin-top: 30px;
}
.profile-edit__change-block {
  padding: 25px 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  color: #1fcc79;
}
.profile-edit__save {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
}
.avatar__img {
  width: 87px;
  height: 87px;
  margin: 0 25px 0 13px;
}
.profile-edit__text {
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.profile-edit__name {
  margin: 30px 0 10px;
  font-size: 20px;
}
.profile-edit__change {
  width: 100px;
  padding: 5px 14px;

  margin-bottom: 12px;
  background: #ffffff;
  border: 1px solid #1fcc79;
  box-sizing: border-box;
  border-radius: 30px;

  font-weight: 500;
  font-size: 8px;
  line-height: 10px;
  align-items: center;
  color: #1fcc79;
}
</style>
