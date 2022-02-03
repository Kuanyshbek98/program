<template>
  <ul class="chats-tabs flex">
    <li class="chats-tabs__tab">
      <router-link
        to="/my-reservations/active"
        class="chats-tabs__link"
        :class="{ 'chats-tabs__link_active': $route.params.type === 'active' }"
        >Активные</router-link
      >
    </li> 
    <li class="chats-tabs__tab">
      <router-link
        to="/my-reservations/archival"
        class="chats-tabs__link"
        :class="{
          'chats-tabs__link_active': $route.params.type === 'archival',
        }"
        >Архивные</router-link
      >
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
.chats-tabs {
  border-bottom: 1px solid #d0dbea;
}
.chats-tabs__tab {
  width: 50%;
}
.chats-tabs__link {
  height: 56px;
  display: block;
  line-height: 56px;
  font-weight: 600;
  font-size: 15px;
  text-align: center;
  color: #9fa5c0;
  border-bottom: 3px solid #ffffff;
}
.chats-tabs__link_active {
  color: var(--main-color);
  border-bottom: 3px solid #1fcc79;
}
</style>
