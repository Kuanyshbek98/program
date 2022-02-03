<template>
  <section class="statistics-page">
    <h1 class="statistics-page__title admin-title">Welcome back</h1>
    <p class="statistics-page__text">Here's what's happening in numbers</p>
    <h2 class="statistics-page__subtitle"></h2>
    <ul v-if="STATISTICS" class="statistics-page__results">
      <li class="statistics-page__item item-statistics-page">
        <div class="item-statistics-page__header">
          <a class="item-statistics-page__icon">
            <SubtractIcon />
          </a>
          Total Earnings
        </div>
        <h3 class="item-statistics-page__value">${{ STATISTICS.total_cost }}</h3>
      </li>
      <li class="statistics-page__item item-statistics-page">
        <div class="item-statistics-page__header">
          <a class="item-statistics-page__icon">
            <UserIcon />
          </a>
          Claggers
        </div>
        <h3 class="item-statistics-page__value">{{ STATISTICS.users }}</h3>
      </li>
      <li class="statistics-page__item item-statistics-page">
        <div class="item-statistics-page__header">
          <a class="item-statistics-page__icon">
            <UserIcon />
          </a>
          Clagees
        </div>
        <h3 class="item-statistics-page__value">{{ STATISTICS.employees }}</h3>
      </li>
      <li class="statistics-page__item item-statistics-page">
        <div class="item-statistics-page__header">
          <a class="item-statistics-page__icon">
            <ReceiptIcon />
          </a>
          Total transactions
        </div>
        <h3 class="item-statistics-page__value">{{ STATISTICS.total_transactions }}</h3>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import SubtractIcon from '@/assets/svg/subtract.svg?inline'
import UserIcon from '@/assets/svg/statistic-user.svg?inline'
import ReceiptIcon from '@/assets/svg/receipt.svg?inline'
export default {
  computed: {
    ...mapGetters([
      'STATISTICS'
    ])
  },
  components: {
    SubtractIcon,
    UserIcon,
    ReceiptIcon
  },
  async created() {
    await this.$store.dispatch('getStatistics')
  }
}
</script>

<style scoped>
.statistics-page__title {
  margin-bottom: 8px;
}
.statistics-page__text {
  color: #84818A;
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 24px;
}
.statistics-page__results {
  display: flex;
}
.item-statistics-page {
  padding: 24px;
  background: #FFFFFF;
  width: 281px;
  box-sizing: border-box;
}
.item-statistics-page:not(:last-child) {
  border-right: 1px solid #EBEAED;
}
.item-statistics-page__header {
  display: flex;
  align-items: center;
}
.item-statistics-page__icon {
  background: rgba(85, 66, 246, 0.1);
  mix-blend-mode: normal;
  border-radius: 12px;
  width: 24px;
  height: 24px;
  display: flex;
  vertical-align: bottom;
  margin-right: 8px;
  justify-content: center;
  align-items: center;
}
.item-statistics-page__value {
  font-size: 32px;
  line-height: 40px;
  margin: 24px 0 8px;
}
</style>
