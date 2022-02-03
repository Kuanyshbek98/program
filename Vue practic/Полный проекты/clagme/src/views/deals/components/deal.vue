<template>
  <div v-if="deal" class="deal">
    <p v-if="$route.query.active === 'canceled' && TYPE === 'employee'" class="offer__canceled-text offer__canceled-text_employee">
      &times; Cancelled by Company
    </p>
    <p v-if="$route.query.active === 'accepted' && TYPE === 'employee'" class="offer__accepted-text offer__canceled-text_employee">
      <CheckIcon /> Clagger have finished the the work and waiting for your confirmation
    </p>
    <h3 v-if="TYPE === 'employee'" class="deal__title">{{ deal.resume.title }}</h3>
    <header class="deal__header deal-header flex">
      <div class="deal-header__left-block flex">
        <div class="deal-header__avatar avatar" :style="{backgroundImage: `url(${$image + (TYPE === 'user' ? 'image/' : 'image/') + deal.employee.image})`}"></div>
        <h3 v-if="TYPE === 'employee'" class="deal-header__name">{{ deal.user.name }} {{ deal.user.surname }}</h3>
        <h3 v-else class="deal-header__name">{{ deal.employee.name }} {{ deal.employee.surname }}</h3>
      </div>
      <div class="deal-header__right-block">
<!--        <MiddleDotIcon class="deal-header__middle-dot" />-->
      </div>
    </header>
    <div v-if="TYPE === 'user'" class="deal__info deal-info">
      <address class="deal-info__text">
        <GeoIcon />
        {{ deal.employee.enterprise_address }}
      </address>
      <a :href="deal.employee.site_link" class="deal-info__text">
        <WorldIcon />
        {{ deal.employee.site_link }}
      </a>
    </div>
    <ul v-if="TYPE === 'employee'" class="deal__skills">
      <li v-for="skill in deal.skills" :key="skill.id" class="deal__skill">{{ skill.title }}</li>
    </ul>
    <div class="offer__body flex">
      <ul class="offer__statistics flex">
        <li class="offer__statistic">
          <strong class="offer__statistic-bold">$ {{ deal.price }}</strong>
          per hour
        </li>
        <li class="offer__statistic">
          <strong class="offer__statistic-bold">{{ deal.hours }}</strong>
          Hours
        </li>
        <li v-if="$route.query.active === 'active'" class="offer__statistic">
          <strong class="offer__statistic-bold">$ {{ deal.hours * deal.price }}</strong>
          Approximate Total
        </li>
        <li v-if="$route.query.active === 'done'" class="offer__statistic">
          <strong class="offer__statistic-bold">$ {{ deal.hours * deal.price }}</strong>
          Total cost
        </li>
        <li v-if="deal.resume.start_date" class="offer__statistic">
          <strong class="offer__statistic-bold">{{ deal.resume.start_date }}</strong>
          Started
        </li>
        <li v-if="$route.query.active === 'done' && deal.resume.end_date" class="offer__statistic">
          <strong class="offer__statistic-bold">{{ deal.resume.end_date }}</strong>
          Ended
        </li>
      </ul>
      <div v-if="$route.query.active === 'accepted' || (!$route.query.active && TYPE === 'user')" class="offer__actions">
        <button v-if="TYPE === 'user'" @click="finish(deal)" class="offer__basic-btn">Task finished</button>
        <button @click="write(deal)" :class="TYPE === 'user' ? 'offer__primary-btn' : 'offer__basic-btn'">Write message</button>
        <button v-if="TYPE === 'employee'" @click="approve(deal)" class="offer__primary-btn">Approve</button>
      </div>
    </div>
    <p v-if="$route.query.active === 'canceled' && TYPE === 'user'" class="offer__canceled-text">
      &times; Cancelled by Company
    </p>
    <div class="offer__line"></div>
    <h4 class="deal__subtitle">Task Description</h4>
    <div class="deal__description">
      {{ deal.description }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

// import MiddleDotIcon from '@/assets/svg/middle-dot.svg?inline'
import GeoIcon from '@/assets/svg/geo.svg?inline'
import WorldIcon from '@/assets/svg/world.svg?inline'
import CheckIcon from '@/assets/svg/check.svg?inline'
export default {
  props: {
    deal: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapGetters([
      'TYPE'
    ])
  },
  methods: {
    async finish (deal) {
      await this.$api.post(`/${this.TYPE}/done-offer`, {
        offer_id: deal.id
      })
        .then((response) => {
          console.log(response)
          this.$toast.success('Success')
          this.$emit('done', this.index)
        })
        .catch((e) => {
          if (e.response) {
            this.$toast.success(e.response.data.message)
          }
        })
    },
    write (deal) {
      console.log(deal)
      this.$store.commit('setChatHeader', this.TYPE === 'user' ? deal.employee : deal.user)
      this.$router.push(`/chat/${this.TYPE === 'user' ? deal.employee.id : deal.user.id}`)
    },
    async approve (deal) {
      await this.$api.post('/employee/offers-accept', {
        offer_id: deal.id
      })
        .then((response) => {
          console.log(response)
          this.$toast.success('Success')
          this.$emit('done', this.index)
        })
        .catch((e) => {
          if (e.response) {
            this.$toast.success(e.response.data.message)
          }
        })
    }
  },
  components: {
    // MiddleDotIcon,
    GeoIcon,
    WorldIcon,
    CheckIcon
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
.deal {
  border: 1px solid #E3E1E5;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 32px;
  max-width: 912px;
  margin-bottom: 16px;
}
.deal-header__avatar {
  width: 48px;
  height: 48px;
  margin: 0 16px 0 0;
}
.deal-header__name {
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.2px;
  color: #3B3A40;
}
.deal-header__middle-dot {
  cursor: pointer;
}
.deal-info {
  margin-bottom: 16px;
  display: flex;
  align-items: center;
}
.deal-info__text {
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
.deal-info__text svg {
  margin-right: 8px;
}
.offer__line {
  margin-bottom: 16px;
  background: #E8E7E8;
  height: 1px;
  width: 100%;
}
.deal__subtitle {
  font-size: 14px;
  line-height: 19px;
  margin: 0 0 8px;
}
.deal__description {
  font-size: 14px;
  line-height: 24px;
  color: #3B3A40;
}
.offer__body {
  margin-bottom: 16px;
}
.offer__statistic {
  color: #84818A;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.offer__statistic:not(:last-child) {
  margin-right: 32px;
}
.offer__statistic-bold {
  display: block;
  color: #000000;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 4px;
  border-radius: 4px;
}
.offer__basic-btn, .offer__primary-btn {
  width: 112px;
  padding: 9px 0;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  margin-right: 8px;
}
.offer__basic-btn {
  border: 1px solid #E3E1E5;
  background-color: #FFFFFF;
  color: #504F54;
}
.offer__primary-btn {
  background-color: var(--blue-color);
  color: #FFFFFF;
}
.offer__canceled-text {
  color: #FC3400;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin: 16px 0;
}
.deal__skill:not(:last-child) {
  margin-right: 8px;
}
.deal__skill {
  font-size: 14px;
  line-height: 20px;
  background: #FBFAFC;
  border: 0.5px solid rgba(0, 0, 0, 0.16);
  box-sizing: border-box;
  border-radius: 24px;
}
.offer__canceled-text_employee {
  margin-top: 0;
}
.offer__accepted-text {
  color: var(--blue-color);
}
.offer__accepted-text svg {
  fill: var(--blue-color);
}
.deal__title {
  margin: 0;
}

@media (max-width: 768px) {
  .deal {
    padding: 10px;
  }
  .deal__title {
    font-size: 20px;
  }
  .deal-header__avatar {
    width: 44px;
    height: 44px;
    margin: 0 12px 0 0;
  }
  .deal-header__name {
    font-size: 16px;
  }
  .offer__body {
    flex-wrap: wrap;
  }
  .offer__statistic {
    margin-bottom: 12px;
  }
  .offer__basic-btn, .offer__primary-btn {
    border-radius: 4px;
  }
}
</style>
