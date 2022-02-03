<template>
    <div class="order__block">
        <h1 class="order__title">ID: 1920-293</h1>
        <div class="order__product-block">
            <div class="order__product-list product-list" :class="{'product-list__border':item !=3}" v-for="(item,index) in 3" :key="index">
                <Product />
                <div class="product-list__item-info">
                    <p class="product-list__item-name">Silver MacBook M1 13.1in. Apple 256GB</p>
                    <p class="product-list__item-prices">556 900 ₸
                        <label class="product-list__item-number">1x</label>
                    </p>
                </div>
            </div>
            <ul class="order__prices-items">
                <li class="order__prices-item prices-item flex">
                    <p class="prices-item__text">Сумма без доставки</p>
                    <strong class="prices-item__number">877 000 ₸ </strong>
                </li>
                <li class="order__prices-item prices-item flex">
                    <p class="prices-item__text">Доставка</p>
                    <strong class="prices-item__number">2 000 ₸ </strong>
                </li>
                <li class="order__prices-item prices-item flex">
                    <p class="prices-item__text">Сумма</p>
                    <strong class="prices-item__number prices-item__number_strong">879 000 ₸</strong>
                </li>
            </ul>
        </div>
        <div class="order__info">
            <h2 class="order__info-title">Инфо о заказе</h2>
            <ul class="order__info-items">
                <li class="order__info-item info-item flex">
                    <p class="info-item__text">Статус заказа</p>
                    <button class="info-item__btn" :class="{'info-item__btn-action':!infoStatus}">
                        {{infoStatus ? 'Передан курьеру' : 'Отменен продавцом'}}
                    </button>
                </li>
                <li class="order__info-item info-item flex">
                    <p class="info-item__text">Номер заказа</p>
                    <strong class="info-item__value">ID: 1920-293</strong>
                </li>
                <li class="order__info-item info-item flex">
                    <p class="info-item__text">Количество позиции</p>
                    <strong class="info-item__value">3</strong>
                </li>
                <li class="order__info-item info-item flex">
                    <p class="info-item__text">Способ оплаты</p>
                    <strong class="info-item__value">Онлайн оплата</strong>
                </li>
                <li class="order__info-item info-item flex">
                    <p class="info-item__text">Карта</p>
                    <strong class="info-item__value flex">Master Card **** 5169 <CardIcon style="margin-left: 5px" /></strong>
                </li>
                <li class="order__info-item info-item flex">
                    <p class="info-item__text">Дата заказа</p>
                    <strong class="info-item__value">3 Октября 2021, 20:48</strong>
                </li>
            </ul>
        </div>
        <div class="order__action flex">
            <button class="order__btn default-btn">Проблема с заказом</button>
            <button class="order__btn main-btn">Я получил товар</button>
        </div>
        <div class="order__salesman">
            <h2 class="order__salesman-title">Продавец</h2>
            <div class="order__salesman-info">
                <img src="" alt="">
                <div class="order__salesman-box">
                    <h3 class="order__salesman-name">Apple China(Official Reseller)</h3>
                    <img class="order__salesman-rating" src="" alt=""><label>(98 отзывов)</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Product from '~~/assets/svg/product-img.svg?inline'
import CardIcon from '~~/assets/svg/order-card.svg?inline'
export default {
  data () {
    return {
      infoStatus: true
    }
  },
  components: {
    Product,
    CardIcon
  }
}
</script>

<style scoped>
.order__block{
    font-family: Avenir Next;
    font-style: normal;
    font-weight: 500;
    line-height: 144%;
    font-size: 14px;
    color: #1F1F1F;
}
.order__title{
    font-size: 24px;
    font-weight: 600;
    line-height: 132%;
    margin: 0 0 16px 0;
}
.order__product-block, .order__info, .order__action, .order__salesman{
    padding: 0 16px;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.04);
    border-radius: 12px;
}
.product-list{
    display: flex;
    padding: 16px 0;
}
.product-list__border{
    border-bottom: 0.5px solid #E1E1E1;
}
.product-list__item-info{
    margin-left: 12px;
}
.product-list__item-name{
    margin: 0;
    color: #717171;
}
.product-list__item-prices{
    margin: 8px 0;
    font-size: 16px;
}
.product-list__item-number{
    margin-left: 8px;
    font-size: 12px;
    line-height: 14px;
    color: #5D9A05;
}
.order__prices-items{
    padding: 0 0 16px 0;
    color: #919191;
}
.prices-item__text, .info-item__text{
    margin: 6px 0;
}
.prices-item__number, .info-item__value{
    color: #1F1F1F;
}
.prices-item__number_strong, .order__info-title{
    font-weight: 600;
    font-size: 16px;
    line-height: 132%;
    margin: 0;
}
.order__info{
    padding: 16px;
    margin: 8px 0;
}
.order__info-items{
    margin-top: 12px;
    color: #919191;
}
.info-item__btn{
    width: 130px;
    height: 20px;
    border-radius: 4px;
    font-size: 12px;
    line-height: 14px;
    background: rgba(93, 154, 5, 0.05);
    color: #5D9A05;
}
.info-item__btn-action{
    background: #FFE3E0;
    color: #DA5552;
}
.order__btn{
    margin: 16px 4px;
    font-weight: 500;
    font-size: 14px;
    line-height: 144%;
    color: #1F1F1F;
}
.order__action{
    padding: 0px 12px;
}
</style>
