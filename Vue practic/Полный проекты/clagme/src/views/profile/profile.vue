<template>
  <section class="profile-page">
    <div class="container profile-page__content">
      <div class="profile-page__mobile-header">
        <h2 class="profile-page__mobile-header-title">Profile</h2>
      </div>
      <div v-if="PROFILE" class="profile-page__header">
        <div class="profile-page__avatar avatar" :style="{backgroundImage: `url(${$image + (TYPE === 'employee' ? ('image/' + PROFILE.image) : ('images/' + PROFILE.resume.photo))})`}"></div>
        <h1 class="profile-page__name">{{ PROFILE.name }} {{ PROFILE.surname }}</h1>
        <div v-if="TYPE === 'employee'" class="profile-page__other">
          <address class="profile-page__text">
            <GeoIcon />
            {{ PROFILE.city }}
          </address>
          <a :href="PROFILE.site" class="profile-page__text">
            <WorldIcon />
            {{ PROFILE.site }}
          </a>
        </div>
        <template>
          <a class="profile-page__text profile-page__profession">
            {{ PROFILE.resume ? PROFILE.resume.title : '' }}
          </a>
          <ul class="profile-page__skills">
            <li v-for="skill in PROFILE.skills" :key="skill.title" class="profile-page__skill">
              {{ skill.title }}
            </li>
          </ul>
        </template>
      </div>
      <ul class="profile-page__list">
        <li v-if="TYPE === 'user' && PROFILE" class="profile-page__item">
          <a target="_blank" :href="$image + 'storage/' + PROFILE.resume.cv" class="profile-page__link">
            <DownloadIcon class="profile-page__icon" />
            Download CV
            <ArrowRightIcon class="profile-page__arrow" />
          </a>
        </li>
        <li class="profile-page__item profile-page__item_mobile">
          <router-link to="/resume" class="profile-page__link">
            <FileIcon class="profile-page__icon" />
            Resume
            <ArrowRightIcon class="profile-page__arrow" />
          </router-link>
        </li>
        <li class="profile-page__item">
          <router-link to="/info" class="profile-page__link">
            <FileIcon class="profile-page__icon" />
            Privacy and terms of use
            <ArrowRightIcon class="profile-page__arrow" />
          </router-link>
        </li>
        <li class="profile-page__item">
          <router-link to="/contact" class="profile-page__link">
            <ChatIcon class="profile-page__icon" />
            Contact us
            <ArrowRightIcon class="profile-page__arrow" />
          </router-link>
        </li>
        <li @click="logout()" class="profile-page__item">
          <a class="profile-page__link">
            <LogoutIcon class="profile-page__icon" />
            Log out
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Cookies from 'js-cookie'

import GeoIcon from '@/assets/svg/geo.svg?inline'
import WorldIcon from '@/assets/svg/world.svg?inline'
import FileIcon from '@/assets/svg/file-copy.svg?inline'
import DownloadIcon from '@/assets/svg/file-download.svg?inline'
import ChatIcon from '@/assets/svg/chat.svg?inline'
import LogoutIcon from '@/assets/svg/logout.svg?inline'
import ArrowRightIcon from '@/assets/svg/arrow-right.svg?inline'
export default {
  computed: {
    ...mapGetters([
      'PROFILE',
      'TYPE',
      'HIRED_COMPANY_LIST'
    ])
  },
  methods: {
    logout () {
      Cookies.remove('clagme-chtk')
      Cookies.remove('clagme-type')
      Cookies.remove('clagme-uid')
      Cookies.remove('clagme-tk')
      this.$store.dispatch('getToken', null)
      this.$store.dispatch('getType', null)
      this.$router.push('/')
    }
  },
  components: {
    GeoIcon,
    WorldIcon,
    FileIcon,
    ChatIcon,
    LogoutIcon,
    ArrowRightIcon,
    DownloadIcon
  },
  async created() {
    // await this.$store.dispatch('getHiredCompanyList')
  }
}
</script>

<style scoped>
.profile-page__content {
  width: 560px;
}
.profile-page__header {
  text-align: center;
}
.profile-page__avatar {
  width: 120px;
  height: 120px;
}
.profile-page__name {
  font-size: 22px;
  line-height: 32px;
  letter-spacing: 0.2px;
  margin: 12px 0;
}
.profile-page__other {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}
.profile-page__text {
  color: #64626A;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  font-style: normal;
  margin-right: 13px;
}
.profile-page__text svg {
  margin-right: 10px;
}
.profile-page__item {
  border-top: 1px solid #EBEAED;
  padding: 0 10px;
}
.profile-page__item:last-child {
  border-bottom: 1px solid #EBEAED;
  color: #FC3400;
}
.profile-page__link {
  display: flex;
  align-items: center;
  padding: 25px 0;
  position: relative;
}
.profile-page__icon {
  margin-right: 18px;
}
.profile-page__arrow {
  position: absolute;
  right: 0;
}
.profile-page__skills {
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
}
.profile-page__skill {
  background: #FBFAFC;
  border: 0.5px solid rgba(0, 0, 0, 0.16);
  box-sizing: border-box;
  border-radius: 24px;
  padding: 4px 12px;
  margin: 0 8px 8px 0;
}
.profile-page__profession {
  display: block;
  color: #84818A;
  text-align: center;
  letter-spacing: 0.2px;
}
.profile-page__mobile-header {
  display: none;
}
.profile-page__item_mobile {
  display: none;
}

@media (max-width: 768px) {
  .profile-page__content {
    width: 100%;
  }
  .profile-page__mobile-header {
    padding: 20px 16px;
    display: block;
    filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.12));
    background-color: #FFFFFF;
    margin-bottom: 20px;
    box-sizing: border-box;
  }
  .profile-page__mobile-header-title {
    letter-spacing: 0.2px;
    font-size: 20px;
    line-height: 24px;
    margin: 0;
  }
  .profile-page__header {
    padding: 0 10px;
  }
  .profile-page__item_mobile {
    display: block;
  }
}
</style>
