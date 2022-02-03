<template>
    <div class="orders-block">
        <div @click="orderItem(index)" v-for="(item,index) in 2" :key="index" class="orders-block__item">
            <p v-if="index == 0" class="orders-block__date">Сегодня</p>
            <p v-if="index == 1" class="orders-block__date">в прошлом месяце</p>
            <div class="orders-block__wrap">
                <div class="orders-block__id flex">
                    <div class="flex">
                      <p class="orders-block__id-text">ID: 1920-293
                      </p>
                      <CardIcon />
                    </div>
                    <span class="orders-block__id-other">...</span>
                </div>
                <div class="orders-block__time flex-only">
                    <ClockIcon class="orders-block__time-icon"/>
                    <p class="orders-block__time-text">23 июня, 17:50</p>
                </div>
                <div class="orders-block__count-list flex" v-for="(item,index) in 3" :key="index">
                    <p class="orders-block__count-text">Apple Magic mouse white</p>
                    <p class="orders-block__count-text">х1</p>
                    <p class="orders-block__count-text">43 750 ₸ </p>
                </div>
                <div class="orders-block__sum flex">
                    <p class="orders-block__sum-text">Сумма заказа:</p>
                    <strong class="orders-block__sum-price">879 000 ₸</strong>
                </div>
                <button @click="ordersBtnAction" class="orders-block__btn" :class="{'orders-block__btn-action':ordersBtnChange}">
                    {{ordersBtnName}}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import ClockIcon from '~~/assets/svg/clock.svg?inline'
import CardIcon from '~~/assets/svg/order-card.svg?inline'
export default {
  data () {
    return {
      ordersBtnName: 'Передан курьеру',
      ordersBtnChange: false,
      orderData: null
    }
  },
  methods: {
    ordersBtnAction () {
      if (this.ordersBtnChange) {
        this.ordersBtnName = 'Передан курьеру'
        this.ordersBtnChange = false
      } else {
        this.ordersBtnName = 'Отменен продавцом'
        this.ordersBtnChange = true
      }
    },
    orderItem (index) {
      console.log(index)
    }
  },
  components: {
    ClockIcon,
    CardIcon
  }
}
</script>

<style scoped>
.orders-block__item{
    margin-top: 24px;
}
.orders-block__date{
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    color: #919191;
    margin: 12px 0px;
}
.orders-block__wrap{
    font-family: Avenir Next;
    font-style: normal;
    line-height: 144%;
    font-weight: 500;
    padding: 12px;
    height: auto;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.04);
    border-radius: 8px;
    margin: 12px 0px;
}
.orders-block__wrap:hover{
    box-shadow: 0px 0px 10px #000;
}
.orders-block__id-text{
    font-size: 16px;
    line-height: 144%;
    color: #1F1F1F;
    margin: 0 5px 0 0;
}
.orders-block__time-icon{
    margin: 10px 0;
}
.orders-block__time-text{
    font-style: italic;
    font-size: 12px;
    line-height: 14px;
    color: #919191;
    margin: 12px 0 12px 10px;
}
.orders-block__count-text{
    margin: 4px 0px;
    font-size: 14px;
    color: #1F1F1F;
}
.orders-block__sum{
    margin: 10px 0 15px 0;
}
.orders-block__sum-text{
    font-size: 12px;
    line-height: 14px;
    color: #919191;
    margin: 0;
}
.orders-block__sum-price{
    font-weight: 600;
    font-size: 16px;
    line-height: 132%;
    text-align: right;
    color: #1F1F1F;
}
.orders-block__btn{
    width: 130px;
    height: 20px;
    border-radius: 4px;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    background: rgba(93, 154, 5, 0.05);
    color: #5D9A05;
}
.orders-block__btn-action{
    background: #FFE3E0;
    color: #DA5552;
}
</style>
