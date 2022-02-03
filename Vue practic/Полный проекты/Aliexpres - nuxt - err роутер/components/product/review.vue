<template>
  <div class="product-review">
    <template>
      <div v-if="!reviewsProduct" class="product-review__empty">
        <img class="product-review__empty-image" src="/empty-review.png" alt="">
        <h2 class="product-review__empty-title">
          Никто еще не оценил товар
        </h2>
        <p class="product-review__empty-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mus dui enim rhoncus. Venenatis eu suspendisse eu ac mattis.
        </p>
      </div>
    </template>
    <div v-if="reviewsProduct" class="product-review__busy">
      <div class="flex">
        <h3 class="product-review__busy-title">
          Отзывы и рейтинг
        </h3>
        <a class="product-review__busy-more" href="">
          читать Все
        </a>
      </div>
      <div class="flex">
        <div class="product-review__busy-reviews flex">
          <p class="product-review__busy-number">
            <strong class="product-review__busy-large">
              4.8
            </strong> из 5
          </p>
          <p class="product-review__busy-number">98 отзывов</p>
        </div>
        <div class="product-review__busy-ratings">
          <div class="product-review__busy-items">
            <div  v-for="i in 5" :key="i" class="product-review__busy-item flex">
              <div class="product-review__busy-stars">
                <StarIcon v-for="(star,i) in (5-i)" :key="i" :style="{fill: false ? '#919191' : '#FFB903'}" class="product-info__rating-icons" />
              </div>
              <div class="product-review__rating-rear">
                <div class="product-review__rating-external" :style="`width:${5-i}0%`"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="product-review__busy-btn default-btn" @click="comment=true">Оставить отзыв о магазине</button>
      <background :show="comment" @hide="comment = $event"></background>
      <div v-if="comment" class="product-review__busy-comment comment">
        <div class="flex">
          <h2 class="comment__title">Оставьте отзыв</h2>
          <div class="comment__close" @click="comment=false">x</div>
        </div>
        <p>Оставьте свои сложившиеся  впечатления о поставщике, если уже сотрудничали вместе</p>
        <StarIcon @click="rating=!rating" v-for="(star,i) in 5" :key="i" :style="{fill: rating ? '#FFB903' : '#919191'}" class="comment__icons" />
        <input class="comment__input" type="text" placeholder="Напишите отзыв">
        <button class="default-btn">Отправить</button>
        <button class="default-btn comment__btn" @click="comment=false">Отмена</button>
      </div>
      <div v-for="(item,index) in reviewsProduct.data" :key="index" class="product-review__busy-profile flex">
        <div class="product-review__busy-avatar">
          <img :src="$url+'/'+item.user.avatar" alt="">
          <p v-if="item.user.avatar">{{item.user.name.split('')[0]}}</p>
        </div>
        <div class="product-review__busy-info" >
          <div class="flex">
            <h3 class="product-review__busy-name">{{item.user.name}}</h3>
            <div>
               <StarIcon v-for="star in 5" :key="star" :style="{fill: star > item.rating ? '#919191' : '#FFB903'}" class="product-info__rating-icon" />
            </div>
          </div>
          <p>
            {{item.text}}
          </p>
          <p class="product-review__busy-date">
            {{dataShow(item)}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarIcon from '~~/assets/svg/star.svg?inline'
export default {
  data () {
    return {
      showReview: true,
      dat: null,
      comment: false,
      rating: false
    }
  },
  components: {
    StarIcon
  },
  props: {
    reviewsProduct: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    dataShow (item) {
      const arrDate = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
      if (this.reviewsProduct) {
        const days = item.date.split('-')[2]
        let month = item.date.split('-')[1]
        for (let i = 1; i <= 12; i++) {
          if (+month === i) {
            month = arrDate[i - 1]
          }
        }
        const time = days.split('T')[0] + ' ' + month + ' ' + item.date.split('-')[0]
        return time
      }
    }
  }
}
</script>

<style scoped>
.product-review__empty {
  width: 344px;
  margin: 24px auto 0;
  text-align: center;
}
.product-review__empty-title {
  margin: 32px 0 8px;
  font-weight: 600;
  font-size: 20px;
  line-height: 132%;
}
.product-review__empty-text {
  color: #717171;
  font-size: 14px;
  line-height: 144%;
  margin: 0;
}
.product-review__busy{
  background: #FFFFFF;
  margin: 8px auto 0;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 4px;
  font-family: Avenir Next;
  font-style: normal;
  font-weight: 500;
}
.product-review__busy-ratings{
  width: auto;
}
.product-review__busy-title{
  margin: 0;
  font-weight: 600;
  font-size: 16px;
  color: #1F1F1F;
}
.product-review__busy-more{
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  text-transform: uppercase;
  color: #007AFF;
}
.product-review__busy-ratings{
  padding: 20px 5px 5px 5px;
}
.product-review__busy-number{
  margin-right: 16px;
  font-size: 12px;
  line-height: 14px;
  color: #919191;
}
.product-review__busy-item{
  justify-content: flex-end;
}
.product-review__busy-large{
  font-weight: bold;
  font-size: 32px;
  line-height: 132%;
  color: #1F1F1F;
}
.product-review__rating-rear{
  width: 192px;
  height: 4px;
  background: #F1F1F1;
  border-radius: 10px;
  margin:0 0 5px 5px;
}
.product-review__rating-external{
  width: 50%;
  height: 4px;
  background: #919191;
  border-radius: 10px
}
.product-review__busy-btn{
  width: 50%;
  padding: 8;
  margin-top: 25px;
  font-size: 14px;
  line-height: 144%;
  text-align: center;
  color: #1F1F1F;
}
.comment{
  padding: 20px;
  width: 440px;
  background: #FFFFFF;
  box-shadow: 0px 25px 35px rgba(0, 0, 0, 0.05), 0px 0px 5px rgba(0, 0, 0, 0.07);
  border-radius: 12px;
  font-weight: 500;
  font-size: 14px;
  line-height: 144%;
  color: #919191;
  position: fixed;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.comment__title{
  margin: 0 0 8px 0;
  font-weight: 600;
  font-size: 24px;
  line-height: 132%;
  color: #1F1F1F;
}
.comment__close{
  width: 24px;
  height: 24px;
  background-color: #efefef;
  color: #919191;
  border-radius: 50% 50%;
  cursor:pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px
}
.comment__icons{
  transform: scale(1.8);
  margin: 20px 20px 20px 0;
}
.comment__input{
  font-weight: 500;
  font-size: 16px;
  line-height: 144%;
  margin-bottom: 50px;
}
.comment__btn{
  margin-top: 10px;
  color: #919191;
  border:none;
}
.product-review__busy-profile{
  margin-top: 35px;
  align-items: flex-start;
}
.product-review__busy-avatar{
  width: 56px;
  height: 56px;
  margin: 0px 20px 0px 0;
  border-radius: 50% 50%;
  background: linear-gradient(225deg, #F8F7F6 0%, #ECE9E6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #717171;
}
.product-review__busy-info{
  width: 85%;
}
.product-review__busy-name{
  margin: 0;
}
.product-info__rating-icon {
  /* fill: #919191; */
  transform: scale(0.7);
}
.product-review__busy-stars{
  width: auto;
}
.product-info__rating-icons{
  transform: scale(0.5);
}
.product-review__busy-date{
  font-size: 12px;
  line-height: 14px;
  color: #919191;
}
</style>
