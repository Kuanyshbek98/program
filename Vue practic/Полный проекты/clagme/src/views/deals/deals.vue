<template>
  <section class="deals-page">
    <div class="container">
      <h1 class="deals-page__title deals-page__title_main">Deals</h1>
      <h2 class="deals-page__subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in adipiscing massa, turpis
      </h2>
      <div class="flex deals-page__mobile">
        <h1 class="deals-page__title deals-page__title_mobile">Deals</h1>
        <TabsBlock class="deals-page__tabs" />
      </div>
      <div v-if="DEAL_LIST" class="deals-page__box">
        <DealBlock v-for="(deal, index) in DEAL_LIST.data" :key="deal.id" :deal="deal" :index="index" @done="done" />
        <h3 v-if="DEAL_LIST.data && !DEAL_LIST.data.length">
          У вас нет открытых сделок
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
      'DEAL_LIST',
      'TYPE'
    ])
  },
  methods: {
    async getData () {
      await this.$store.dispatch('getDealList', {
        type: this.$route.query.active || (this.TYPE === 'user' ? 'accepted' : 'send'),
        userType: this.TYPE
      })
    },
    done (index) {
      this.DEAL_LIST.data.splice(index, 1)
    }
  },
  components: {
    TabsBlock: () => ({
      component: import('./components/tabs')
    }),
    DealBlock: () => ({
      component: import('./components/deal')
    }),
  },
  async created() {
    await this.getData()
  },
  watch: {
    $route () {
      this.getData()
    }
  },
}
</script>

<style scoped>
.deals-page {
  padding: 40px 0;
}
.deals-page__title {
  font-size: 36px;
  line-height: 48px;
  margin: 0 0 16px;
}
.deals-page__subtitle {
  color: #504F54;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin: 0 0 32px;
}
.deals-page__mobile {
  width: 100%;
  display: block;
}
.deals-page__title_mobile {
  display: none;
}

@media (max-width: 768px) {
  .deals-page {
    padding: 0;
  }
  .deals-page__title_main {
    display: none;
  }
  .deals-page__subtitle {
    display: none;
  }
  .deals-page__mobile {
    display: flex;
    align-items: center;
    padding: 14px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    margin-bottom: 16px;
  }
  .deals-page__title_mobile {
    display: block;
    font-size: 20px;
    line-height: 24px;
    margin: 0;
  }
}
</style>
