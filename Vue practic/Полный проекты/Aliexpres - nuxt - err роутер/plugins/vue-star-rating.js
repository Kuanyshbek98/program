import Vue from 'vue'
import StarRating from 'vue-star-rating'

export default async () => {
  await Vue.component('StarRating', StarRating)
}
