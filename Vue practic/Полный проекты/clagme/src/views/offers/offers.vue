<template>
  <section class="offers-page">
    <div class="container">
      <h1 class="offers-page__title">Offers</h1>
      <h2 class="offers-page__subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in adipiscing massa, turpis
      </h2>
      <div v-if="OFFER_LIST" class="offers-page__box">
        <OfferBlock v-for="(offer, index) in OFFER_LIST.data" :key="index" :offer="offer" />
        <h3 v-if="OFFER_LIST.data && !OFFER_LIST.data.length">
          У вас нет открытых приложении
        </h3>
      </div>
      <v-spinner v-else />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'OFFER_LIST'
    ])
  },
  components: {
    OfferBlock: () => ({
      component: import('./components/offer')
    }),
  },
  methods: {
    async getData () {
      await this.$store.dispatch('getOfferList')
    }
  },
  async created() {
    await this.getData()
  }
}
</script>

<style scoped>
.offers-page {
  padding: 40px 0;
}
.offers-page__title {
  font-size: 36px;
  line-height: 48px;
  margin: 0 0 16px;
}
.offers-page__subtitle {
  color: #504F54;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin: 0 0 24px;
}

@media (max-width: 768px) {
  .offers-page {
    padding: 0;
  }
  .offers-page__title {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.2px;
    background-color: #FFFFFF;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    padding: 20px 0;
  }
}
</style>
