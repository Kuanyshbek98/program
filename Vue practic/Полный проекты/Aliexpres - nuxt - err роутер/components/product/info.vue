<template>
  <div class="product-info">
    <a class="product-info__article">Артикул: {{ ShowProducts.data.id }}</a>
    <h1 class="product-info__product-name">
      {{ ShowProducts.data.name }}
    </h1>
    <div class="product-info__rating">
      <StarIcon v-for="star in 5" :key="star" class="product-info__rating-icon" />
      ({{ShowProducts.data.review.count}} отзывов)
    </div>
    <h2 class="product-info__price">{{ShowProducts.data.price}} ₸</h2>
    <h3 class="product-info__subtitle">Выберите размер</h3>
    <div class="product-info__sizes flex-only" v-for="(item,i) in ShowProducts.data.size" :key="i">
      <a class="product-info__size"> {{ item }} </a>
    </div>
    <div class="product-info__additional">
      <div class="product-info__color flex">
        <div v-for="(item,i) in ShowProducts.data.color" :key="i" class="product-info__color-round">
          <input type="checkbox" :id="`checkbox${i}`" class="product-info__color-input">
          <label :for="`checkbox${i}`" :style="`background: #${item};`" class="product-info__color-label">
            <span class="product-info__color-span"></span>
          </label>
        </div>
      </div>
      <div class="product-info__count flex">
        <button @click="count>1 ? count-- : ''" class="product-info__count-btn">-</button>
        <label for=""> {{count}} </label>
        <button @click="count<10 ? count++ : ''" class="product-info__count-btn">+</button>
      </div>
    </div>
    <button class="product-info__basket main-btn" @click="inBasket()">
      {{inBasketShow ? 'В корзинe' : 'В корзину'}}
    </button>
    <h3 class="product-info__subtitle">Описание</h3>
    <div class="product-info__description">
      {{ShowProducts.data.description}}
    </div>
  </div>
</template>

<script>
import StarIcon from '~~/assets/svg/star.svg?inline'
export default {
  data () {
    return {
      count: 1,
      checked: false,
      inBasketShow: null
    }
  },
  components: {
    StarIcon
  },
  props: {
    ShowProducts: {
      type: Object,
      default: () => {}
    }
  },
  created () {
    if (this.ShowProducts) {
      this.inBasketShow = this.ShowProducts.data.in_basket
    }
  },
  methods: {
    async inBasket () {
      await this.$api.post('/api/basket/add', {}, {
        params: {
          id: 2,
          count: 10
        }
      })
        .then(() => {
          this.$toast.success('Успешно добавлен')
          this.inBasketShow = true
        })
        .catch(e => this.$toast.error(e.response.data.message))
    }
  }
}
</script>

<style scoped>
.product-info {
  background: #FFFFFF;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 4px;
}
.product-info__article {
  color: #919191;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
}
.product-info__product-name {
  font-weight: 600;
  font-size: 24px;
  line-height: 132%;
  margin: 8px 0;
}
.product-info__rating {
  display: flex;
}
.product-info__rating-icon {
  fill: #FFB903;
  transform: scale(0.6);
}
.product-info__price {
  font-weight: 600;
  font-size: 20px;
  line-height: 132%;
  margin: 24px 0;
}
.product-info__subtitle {
  margin: 0 0 12px;
  font-weight: 600;
  font-size: 16px;
  line-height: 132%;
}
.product-info__sizes {
  margin-bottom: 12px;
}
.product-info__size {
  background: #F1F1F1;
  border-radius: 8px;
  padding: 4px 12px;
  display: block;
  height: 28px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 144%;
  transition: background-color 0.2s ease-in, color 0.2s ease-in;
}
.product-info__size:hover {
  background-color: var(--success-color);
  color: #FFFFFF;
}
.product-info__size:not(:last-child) {
  margin-right: 8px;
}
.product-info__additional{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
.product-info__color{
  padding: 12px 10px;
  width: auto;
  background: #FFFFFF;
  box-shadow: 0px 25px 35px rgba(0, 0, 0, 0.05), 0px 0px 5px rgba(0, 0, 0, 0.07);
  border-radius: 24px;
  margin: 16px 0;
}

.product-info__color-round:not(:last-child){
  margin-right: 16px;
}
.product-info__color-input{
  display: none;
}
.product-info__color-input:checked ~ .product-info__color-label .product-info__color-span{
  display: block;
}
.product-info__color-label{
  width: 20px;
  height: 20px;
  border-radius: 50% 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
}
.product-info__color-span{
  display: none;
  position: absolute;
  top: 25%;
  left: 35%;
  width: 4px;
  height: 8px;
  transform: rotate(45deg);
  border: 1px solid #fff;
  border-top: none;
  border-left: none;
  margin: 0 0 3px 0px;
}
.product-info__count-btn{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  width: 32px;
  height: 32px;
  font-size: 20px;
  font-weight: bold;
  background: #FFFFFF;
  border: 0.33px solid #F1F1F1;
  box-shadow: 0px 25px 35px rgba(0, 0, 0, 0.05), 0px 0px 5px rgba(0, 0, 0, 0.07);
  border-radius: 100px;
  margin: 0px 14px;
}
.product-info__basket {
  width: 208px;
  margin-bottom: 32px;
  height: 40px;
  line-height: 40px;
}
.product-info__description {
  white-space: pre;
}
</style>
