<template>
  <div class="profile-static">
    <div class="profile-static__user flex">
      <div class="profile-static__user-avatar avatar"></div>
      <div class="profile-static__user-text">
        <h2 class="profile-static__user-name">Агадиль Ушкемпиров</h2>
        <p class="profile-static__user-status">Пользователь</p>
      </div>
      <a class="profile-static__user-logout">
        <LogoutIcon />
      </a>
    </div>
    <div class="profile-static__seller">
<!--      .profile-static-->
    </div>
  </div>
</template>

<script>
import LogoutIcon from '~~/assets/svg/door.svg?inline'
export default {
  components: {
    LogoutIcon
  }
}
</script>

<style scoped>
.profile-static__user {
  background-color: #FFFFFF;
}
.profile-static__user-avatar {
  margin: 0 12px 0 0;
  width: 64px;
  height: 64px;
}
.profile-static__user-logout {
  padding: 0 5px;
}
.profile-static__user-text {
  width: calc(100% - 90px);
}
.profile-static__user-name {
  font-weight: 600;
  font-size: 16px;
  line-height: 132%;
  margin: 0 0 4px;
}
.profile-static__user-status {
  font-weight: 500;
  font-size: 14px;
  line-height: 144%;
  color: #919191;
  margin: 0;
}
</style>
