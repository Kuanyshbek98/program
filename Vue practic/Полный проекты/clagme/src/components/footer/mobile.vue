<template>
  <footer class="footer">
    <ul class="footer__menu">
      <li class="footer__item">
        <router-link
          :to="TYPE === 'user' ? '/offers' : '/'"
          class="footer__link"
          :class="{'footer__link_active': $route.name === 'Home' || $route.name === 'Offers'}"
        >
          <HomeIcon />
          {{ TYPE === 'user' ? 'Offers' : 'Home' }}
        </router-link>
      </li>
      <li class="footer__item">
        <router-link
          to="/deals"
          class="footer__link"
          :class="{'footer__link_active': $route.name === 'Deals'}">
          <BriefcaseIcon />
          Deals
        </router-link>
      </li>
      <li class="footer__item">
        <router-link
          to="/chat/inbox"
          class="footer__link"
          :class="{'footer__link_active': $route.name === 'Chat'}">
          <NotificationIcon />
          Notifications
        </router-link>
      </li>
      <li class="footer__item">
        <router-link
          to="/profile"
          class="footer__link"
          :class="{'footer__link_active': $route.name === 'Profile'}">
          <ProfileIcon />
          Profile
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'

import HomeIcon from '@/assets/svg/home.svg?inline'
import BriefcaseIcon from '@/assets/svg/briefcase.svg?inline'
import NotificationIcon from '@/assets/svg/notification.svg?inline'
import ProfileIcon from '@/assets/svg/profile.svg?inline'
export default {
  computed: {
    ...mapGetters([
      'TYPE'
    ])
  },
  components: {
    HomeIcon,
    BriefcaseIcon,
    NotificationIcon,
    ProfileIcon
  },
}
</script>

<style scoped>
.footer {
  padding-top: 55px;
}
.footer__menu {
  position: fixed;
  z-index: 2;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  border-top: 1px solid #EEEEEE;
}
.footer__item {
  width: 25%;
}
.footer__link {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #B6B4BA;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  padding: 11px 0;
}
.footer__link svg {
  fill: #B6B4BA;
}
.footer__link_active {
  color: var(--blue-color);
}
.footer__link_active svg {
  fill: var(--blue-color);
}
</style>
