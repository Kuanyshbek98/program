<template>
    <div class="control__items">
        <div v-for="(item,index) in controlName" :key="index" class="control__item flex" @click="controls(index,item.componentName)">
            <div class="control__box">
                <component :is='item.icon'></component>
                <h2 class="control__name">{{item.name}}</h2>
            </div>
            <div class="control__notifications notifications" v-if="item.name === 'Уведомления'">
                <input class="notifications__input" type="checkbox" id="checkbox" />
                <label class="notifications__label" for="checkbox"></label>
            </div>
            <span class="control__orders" v-if="item.name === 'Мои заказы'">12</span>
        </div>
    </div>
</template>

<script>
import NotificationsIcon from '~~/assets/svg/profile-notifications.svg?inline'
import CartIcon from '~~/assets/svg/my-cart.svg?inline'
import UsersIcon from '~~/assets/svg/users.svg?inline'
import StarIcon from '~~/assets/svg/my-star.svg?inline'
import ChatIcon from '~~/assets/svg/chats.svg?inline'
import CompassIcon from '~~/assets/svg/compass.svg?inline'
import FileIcon from '~~/assets/svg/file.svg?inline'
export default {
  data () {
    return {
      controlName: [
        { name: 'Уведомления', icon: 'NotificationsIcon' },
        { name: 'Мои заказы', icon: 'CartIcon', componentName: 'MyCarts' },
        { name: 'Подписки', icon: 'UsersIcon', componentName: 'Subscribers' },
        { name: 'Избранные товары', icon: 'StarIcon', componentName: 'Favorite' },
        { name: 'Служба поддержки', icon: 'ChatIcon' },
        { name: 'Помощь', icon: 'CompassIcon' },
        { name: 'Документы', icon: 'FileIcon' }
      ]
    }
  },
  components: {
    NotificationsIcon,
    CartIcon,
    UsersIcon,
    StarIcon,
    ChatIcon,
    CompassIcon,
    FileIcon
  },
  methods: {
    controls (index = 1, componentName = 'MyCarts') {
      if (index !== 0) {
        const items = document.querySelectorAll('.control__item')
        items.forEach(function (item) {
          item.style.backgroundColor = 'transparent'
        })
        document.querySelectorAll('.control__item')[index].style.backgroundColor = '#f8f8f8'
        this.$store.commit('profilePage', componentName)
      }
    }
  },
  mounted () {
    this.controls()
  }
}
</script>

<style scoped>
.control__items{
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.04);
    border-radius: 12px;
    margin-top: 16px;
}
.control__item{
    height: 56px;
    padding: 12px 18px;
    display: flex;
    align-items: center;
}
.control__item:hover{
    background-color: #F8F8F8;
}
.control__item:focus{
    background-color: red;
}
.control__name{
    margin: 0 0 0 15px;
    font-weight: 500;
}
.control__box{
    display: flex;
    align-items: center;
}
.control__notifications{
    height: 24px;
    width: 45px;
    position: relative;
}
.notifications__label{
    width: 45px;
    height: 5px;
    background: #717171;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    transform: translate(-2%, -50%);
}
.notifications__label::before{
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50% 50%;
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);
    background: #FFFFFF;
    box-shadow: 0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13);
}
.notifications__input{
    display: none;
}
.notifications__input:checked ~ .notifications__label{
    background: #5D9A05;
}
.notifications__input:checked ~ .notifications__label::before{
    right: -2%;
}
.control__orders{
    text-align: center;
    padding: 2px 5px;
    background: #FFB903;
    border-radius: 100px;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
}
</style>
