<template>
  <header class="header">
    <div class="container flex header__content">
      <div class="header__left-block flex">
        <router-link to="/"><LogoIcon /></router-link>
        <ul v-if="!TYPE" class="header__left-list left-list flex">
          <li class="left-list__item">
            <router-link to="/auth/join-us?type=user">For Claggers</router-link>
          </li>
          <li class="left-list__item">
            <router-link to="/auth/join-us?type=employee">For Clagees</router-link>
          </li>
        </ul>
        <ul v-if="TYPE" class="header__left-list left-list flex">
          <li class="left-list__item" :class="{'left-list__item_active': $route.name === 'Deals'}">
            <router-link to="/deals">Deals</router-link>
          </li>
          <li v-if="TYPE === 'user'" class="left-list__item" :class="{'left-list__item_active': $route.name === 'Offers'}">
            <router-link to="/offers">Offers</router-link>
          </li>
          <li v-if="TYPE === 'user'" class="left-list__item" :class="{'left-list__item_active': $route.name === 'Resume'}">
            <router-link to="/resume">Resume</router-link>
          </li>
          <li v-if="TYPE === 'employee'" class="left-list__item" :class="{'left-list__item_active': $route.name === 'Search'}">
            <router-link to="/search">Search</router-link>
          </li>
          <li class="left-list__item" :class="{'left-list__item_active': $route.name === 'Chat'}">
            <router-link to="/chat/inbox">Messenger</router-link>
          </li>
        </ul>
      </div>
      <div class="header__right-block">
        <ul v-if="!TYPE" class="header__right-list right-list flex">
          <li class="right-list__signin">
            <router-link to="/auth/sign-in">Sign in</router-link>
          </li>
          <li class="right-list__signup">
            <router-link to="/auth/join-us">Sign up</router-link>
          </li>
        </ul>
        <router-link to="/profile" v-else-if="PROFILE" class="header__profile">
          <div class="header__profile-avatar avatar" :style="{backgroundImage: `url(${$image + (TYPE === 'employee' ? ('image/' + PROFILE.image) : ('images/' + PROFILE.resume.photo))})`}"></div>
          <div class="header__profile-name">{{ PROFILE.name }} {{ PROFILE.surname }}</div>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import LogoIcon from '@/assets/svg/logo.svg?inline'
export default {
  computed: {
    ...mapGetters([
      'TYPE',
      'TOKEN',
      'PROFILE'
    ])
  },
  components: {
    LogoIcon,
  },
  async created() {
    await this.$store.dispatch('getType')
    if (this.TYPE) {
      await this.$store.dispatch('getProfile')
    }
  }
}
</script>

<style scoped>
.header {
  position: relative;
}
.header__content {
  padding: 14px 0;
  color: #FFFFFF;
}
.header__left-list {
  margin-left: 20px;
}
.left-list__item {
  color: #84818A;
  text-shadow: 0 0 0.33px rgba(0, 0, 0, 0.48);
  margin-left: 40px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
}
.left-list__item_active {
  color: #2E2C34;
}
.right-list__signin {
  margin-right: 36px;
}
.right-list__signup {
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 4px;
}
.right-list__signup a {
  display: block;
  padding: 8px 16px;
}
.header__profile {
  color: var(--primary-color);
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-shadow: 0 0 0.33px rgba(0, 0, 0, 0.48);
}
.header__profile-avatar {
  width: 32px;
  height: 32px;
  margin: 0 12px 0 0;
}

@media (max-width: 768px) {
  .header {
    display: none;
  }
  .header__left-list {
    display: none;
  }
}
</style>
