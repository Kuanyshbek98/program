<template>
    <div class="admin flex">
        <div class="admin__info info">
            <Static class="info__static"/>
            <div class="info__seller seller flex">
                <div class="seller__box">
                    <h2 class="seller__title">Стать продавцом</h2>
                    <p class="seller__text">Выставляйте и продвигайте свои товары посредством рекламы и Live Стримингов</p>
                </div>
                <SellerImg class="seller__img" />
            </div>
            <Control/>
        </div>
        <component :is="profilePage + '-block'" class="admin__pages"></component>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import SellerImg from '~~/assets/svg/admin-scooter.svg?inline'
export default {
  computed: {
    ...mapState({
      profilePage: state => state.profilePage
    })
  },
  components: {
    SellerImg,
    Static: () => ({
      component: import('~~/components/profile/static')
    }),
    Control: () => ({
      component: import('~~/components/profile/controlBlock')
    }),
    FavoriteBlock: () => ({
      component: import('~~/components/profile/favorite')
    }),
    SubscribersBlock: () => ({
      component: import('~~/components/profile/subscribers')
    }),
    MyCartsBlock: () => ({
      component: import('~~/components/profile/myCarts')
    })
  }
}
</script>

<style scoped>
.admin {
    width: 100%;
    margin-top: 20px;
    font-family: Avenir Next;
    font-style: normal;
    font-size: 16px;
    color: #1F1F1F;
    font-weight: 500;
    line-height: 144%;
}
.admin__info{
    width: 47%;
    height: 100%;
}
.admin__pages{
    width: 47%;
    height: 100%;
}
.info__static{
    padding: 16px;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.04);
    border-radius: 12px;
}
.info__seller{
    background-image:  url(~/assets/svg/admin-rectangle.svg);
    height: 114px;
    background-repeat:  no-repeat;
    background-position: center center;
    background-size: cover;
    background-color: #999;
    border-radius: 12px;
    margin-top: 16px;
}
.seller__title{
    font-weight: 600;
    font-size: 20px;
    line-height: 132%;
    margin: 20px 0 8px 12px;
}
.seller__text{
    font-weight: normal;
    font-size: 14px;
    text-shadow: 0px 0px 0.33px rgba(0, 0, 0, 0.4);
    margin: 0px 0 20px 12px;
}
.seller__img{
    padding: 5px 15px;
}
</style>
