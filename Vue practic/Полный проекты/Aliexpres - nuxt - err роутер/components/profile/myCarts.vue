<template>
    <div class="my-carts">
        <div class="my-carts__tabs flex" v-if="change">
        <button class="my-carts__active" :class="{'my-carts__tab-active':tabsActive}" @click="tabChange">Активные заказы</button>
        <button class="my-carts__history" :class="{'my-carts__tab-active':!tabsActive}" @click="tabChange">История</button>
        </div>
        <OrdersBlock v-if="tabsActive"/>
        <OrderBlock v-if="!tabsActive" />
    </div>
</template>

<script>
export default {
  data () {
    return {
      tabsActive: true,
      change: true
    }
  },
  methods: {
    tabChange () {
      if (this.tabsActive) {
        this.tabsActive = false
      } else {
        this.tabsActive = true
      }
    }
  },
  components: {
    OrdersBlock: () => ({
      component: import('~~/components/profile/ordersBlock')
    }),
    OrderBlock: () => ({
      component: import('~~/components/profile/orderBlock')
    })
  }
}
</script>

<style scoped>
.my-carts__tabs{
  border-radius: 20px;
}
.my-carts__active, .my-carts__history{
  width: 50%;
  color: #919191;
  border-radius: 20px 0px 0px 20px;
}
.my-carts__history{
  border-radius: 0px 20px 20px 0px;
}
.my-carts__tab-active{
  font-weight: 600;
  background: #FFFFFF;
  color: #1F1F1F;
  border: 0.5px solid #E1E1E1;
}
</style>
