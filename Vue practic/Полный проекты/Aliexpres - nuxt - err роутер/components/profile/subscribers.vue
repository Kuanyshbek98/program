<template>
  <div class="profile-subscribers">
    <ul class="profile-subscribers__list">
      <li v-for="(item, index) in 10" :key="index" class="profile-subscribers__item flex">
        <div class="profile-subscribers__item-avatar avatar"></div>
        <div class="profile-subscribers__item-info">
          <h3 class="profile-subscribers__item-name">Продавец №1</h3>
          <p class="profile-subscribers__item-other">
            <strong class="profile-subscribers__item-count">400 930</strong> подписчиков
          </p>
        </div>
        <AddUserIcon  @click="subscribersAdd(index)" class="profile-subscribers__item-add" />
        <CheckMark  @click="unSubscribers(index)" class="profile-subscribers__item-check" />
      </li>
    </ul>
  </div>
</template>

<script>
import AddUserIcon from '~~/assets/svg/add-user.svg?inline'
import CheckMark from '~~/assets/svg/check-mark.svg?inline'
export default {
  components: {
    AddUserIcon,
    CheckMark
  },
  methods: {
    subscribersAdd (index) {
      document.querySelectorAll('.profile-subscribers__item-add')[index].style.display = 'none'
      document.querySelectorAll('.profile-subscribers__item-check')[index].style.display = 'block'
    },
    unSubscribers (index) {
      document.querySelectorAll('.profile-subscribers__item-check')[index].style.display = 'none'
      document.querySelectorAll('.profile-subscribers__item-add')[index].style.display = 'block'
    }
  }
}
</script>

<style scoped>
.profile-subscribers {
  background: #FFFFFF;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  padding: 16px;
}
.profile-subscribers__item:not(:last-child) {
  margin-bottom: 16px;
}
.profile-subscribers__item-avatar {
  width: 56px;
  height: 56px;
  margin: 0 16px 0 0;
}
.profile-subscribers__item-info {
  width: calc(100% - 132px);
}
.profile-subscribers__item-name {
  font-weight: 500;
  font-size: 16px;
  line-height: 144%;
  margin: 0 0 4px;
}
.profile-subscribers__item-other {
  color: #919191;
  margin: 0;
}
.profile-subscribers__item-count {
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: var(--main-color);
}
.profile-subscribers__item-check{
  display: none;
}
</style>
