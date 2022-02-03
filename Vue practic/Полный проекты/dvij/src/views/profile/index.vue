<template>
  <div class="profile">
    <Avatar class="profile__avatar-block" />
    <div class="container">
      <Settings class="profile__settings-block" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Avatar: () => ({
      component: import("./components/avatar.vue"),
    }),
    Settings: () => ({
      component: import("./components/settings.vue"),
    }),
  },
};
</script>

<style scoped> 
</style>
