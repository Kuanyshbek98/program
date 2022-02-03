<template>
  <div v-if="offer" class="offer">
    <header class="offer__header flex">
      <h3 class="offer__title">{{ offer.employee.position }}, {{ offer.hours }} h.</h3>
      <h4 class="offer__price">${{ offer.price }}.00 USD</h4>
    </header>
    <div class="offer__subheader offer-subheader flex">
      <div class="offer-subheader__left-block flex">
        <div class="offer-subheader__avatar avatar" :style="{backgroundImage: `url(${$image + 'image/' + offer.employee.image})`}"></div>
        <h5 class="offer-subheader">{{ offer.employee.enterprise_name }}</h5>
      </div>
      <div class="offer-subheader__right-block flex">
<!--        <a class="offer-subheader__action"><StarIcon /></a>-->
        <a @click="cancelOffer()" class="offer-subheader__action"><TrashIcon /></a>
        <a @click="acceptOffer()" class="offer-subheader__action" :class="{'offer-subheader__action_active': isAccepted}">
          <CheckIcon />
          <span>Accept</span>
        </a>
      </div>
    </div>
    <div class="offer__info offer-info">
      <address class="offer-info__text">
        <GeoIcon />
        {{ offer.employee.city_name }}
      </address>
      <a href="https://healthcenter.kz" class="offer-info__text">
        <WorldIcon />
        {{ offer.employee.site_link }}
      </a>
    </div>
    <div class="offer__line"></div>
    <h6 class="offer__subtitle">Task Description</h6>
    <div class="offer__description">
      {{ offer.description }}
    </div>
    <p class="offer__date">{{ offer.send ? offer.send.split('-').reverse().join('.') : '' }}</p>
  </div>
</template>

<script>
// import StarIcon from '@/assets/svg/star.svg?inline'
import TrashIcon from '@/assets/svg/trash.svg?inline'
import CheckIcon from '@/assets/svg/check.svg?inline'
import GeoIcon from '@/assets/svg/geo.svg?inline'
import WorldIcon from '@/assets/svg/world.svg?inline'
export default {
  props: {
    offer: {
      type: Object,
      default: () => {}
    },
  },
  data() {
    return {
      isAccepted: false
    }
  },
  methods: {
    async cancelOffer () {
      await this.$api.post('/user/cancel-offer', {
        offer_id: this.offer.id
      })
        .then((response) => {
          console.log(response)
          this.$toast.success('Success')
        })
        .catch((e) => {
          if (e.response) {
            this.$toast.error(e.response.data.message)
          }
        })
    },
    async acceptOffer () {
      if (this.isAccepted) {
        return
      }
      await this.$api.post('/user/accept-offer', {
        offer_id: this.offer.id
      })
        .then((response) => {
          console.log(response)
          this.isAccepted = true
          this.$toast.success('Success')
        })
        .catch((e) => {
          if (e.response) {
            this.$toast.error(e.response.data.message)
          }
        })
    }
  },
  components: {
    // StarIcon,
    TrashIcon,
    CheckIcon,
    GeoIcon,
    WorldIcon
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
.offer {
  width: 95%;
  max-width: 912px;
  border: 1px solid #E3E1E5;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 30px 32px;
  margin-bottom: 16px;
}
.offer__title {
  font-size: 20px;
  line-height: 28px;
  margin: 0;
}
.offer__price {
  font-size: 24px;
  line-height: 32px;
  margin: 0;
}
.offer__header {
  margin-bottom: 14px;
}
.offer-subheader {
  font-size: 18px;
  line-height: 22px;
  margin: 0;
}
.offer-subheader__avatar {
  width: 48px;
  height: 48px;
  margin: 0 16px 0 0;
}
.offer-subheader__action:not(:last-child) {
  margin-right: 31px;
}
.offer-info {
  margin: 16px 0;
  display: flex;
  align-items: center;
}
.offer-info__text {
  margin-right: 12px;
  display: flex;
  align-items: center;
  font-family: 'Inter', sans-serif;
  color: #64626A;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
}
.offer-info__text svg {
  margin-right: 8px;
  fill: #84818A;
}
.offer__line {
  margin-bottom: 16px;
  background: #E8E7E8;
  height: 1px;
  width: 100%;
}
.offer__subtitle {
  font-size: 14px;
  line-height: 19px;
  margin: 0 0 8px;
}
.offer__description {
  font-size: 14px;
  line-height: 24px;
  color: #3B3A40;
}
.offer__date {
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #84818A;
  margin: 16px 0 0;
}
.offer-subheader__action_active {
  width: 104px;
  background: #FBFAFC;
  border-radius: 20px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  color: var(--blue-color);
}
.offer-subheader__action svg {
  fill: #84818A;
}
.offer-subheader__action span {
  display: none;
}
.offer-subheader__action_active svg {
  fill: var(--blue-color);
}
.offer-subheader__action_active span {
  display: inline-block;
}

@media (max-width: 768px) {
  .offer {
    width: 100%;
    padding: 10px;
  }
  .offer__header {
    flex-direction: column;
    align-items: flex-start;
  }
  .offer__title {
    margin-bottom: 12px;
  }
}
</style>
