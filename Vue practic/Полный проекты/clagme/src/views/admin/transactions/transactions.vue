<template>
  <section class="transaction-page">
    <div class="transaction-page__header flex">
      <h1 class="statistics-page__title admin-title">Transactions</h1>
      <div class="flex">
        <ul class="transaction-page__sort-list">
          <li class="transaction-page__sort-item transaction-page__sort-item_active"><ListIcon /></li>
          <li class="transaction-page__sort-item"><TableIcon /></li>
        </ul>
        <form class="transaction-page__form">
          <input type="text" class="transaction-page__input" placeholder="Search orders..">
          <button class="transaction-page__btn"><SearchIcon /></button>
        </form>
      </div>
    </div>
    <div class="transaction-page__table">
      <div class="transaction-page__thead">
        <div class="transaction-page__tr">
          <div class="transaction-page__td">TRANSACTION ID</div>
          <div class="transaction-page__td">COMPANY</div>
          <div class="transaction-page__td">CLAGGER NAME</div>
          <div class="transaction-page__td">DATE</div>
          <div class="transaction-page__td">TOTAL COST</div>
          <div class="transaction-page__td">&nbsp;</div>
        </div>
      </div>
      <div v-if="TRANSACTION_LIST" class="transaction-page__tbody">
        <div v-for="transaction in TRANSACTION_LIST.data" :key="transaction.id" class="transaction-page__tr">
          <div class="transaction-page__td transaction-page__id">{{ transaction.id }}</div>
          <div class="transaction-page__td transaction-page__expert">
            <div class="transaction-page__avatar avatar" :style="{backgroundImage: `url(${$image + 'images/' + (transaction.resume ? transaction.resume.photo : '')})`}"></div>
            <div class="transaction-page__text">
              <h4 class="transaction-page__name">{{ transaction.user ? transaction.user.name : '' }} {{ transaction.user ? transaction.user.surname : '' }}</h4>
            </div>
          </div>
          <div class="transaction-page__td transaction-page__expert">
            <div class="transaction-page__avatar avatar" :style="{backgroundImage: `url(${$image + 'image/' + transaction.company.image})`}"></div>
            <div class="transaction-page__text">
              <h4 class="transaction-page__name">{{ transaction.company ? transaction.company.name : '' }} {{ transaction.company ? transaction.company.surname : '' }}</h4>
            </div>
          </div>
          <div class="transaction-page__td">{{ transaction.date ? transaction.date.slice(0, 10) : '' }}</div>
          <div class="transaction-page__td">${{ transaction.cost }}</div>
          <div class="transaction-page__td">
<!--            <a class="transaction-page__option"><OptionIcon /></a>-->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import ListIcon from '@/assets/svg/list.svg?inline'
import TableIcon from '@/assets/svg/table.svg?inline'
// import OptionIcon from '@/assets/svg/option.svg?inline'
import SearchIcon from '@/assets/svg/search.svg?inline'
export default {
  data() {
    return {
      tabs: [
        'All Claggers', 'Developers', 'Design', 'HR Managers', 'QA engineers', 'Human Resource', 'IT Support', 'Marketing', 'Accounting'
      ],
      activeTab: 'All Claggers'
    }
  },
  computed: {
    ...mapGetters([
      'TRANSACTION_LIST'
    ])
  },
  components: {
    ListIcon,
    TableIcon,
    // OptionIcon,
    SearchIcon
  },
  async created() {
    await this.$store.dispatch('getTransactionList')
  }
}
</script>

<style scoped>
.statistics-page__title {
  margin-bottom: 33px;
}
.transaction-page__form {
  width: 255px;
  position: relative;
  margin-left: 16px;
}
.transaction-page__input {
  border-radius: 4px;
  height: 44px;
  padding-left: 16px;
}
.transaction-page__btn {
  position: absolute;
  padding: 0;
  background: none;
  top: 15px;
  right: 15px;
}
.transaction-page__sort-list {
  display: flex;
}
.transaction-page__sort-item {
  width: 42px;
  height: 42px;
  background: #FFFFFF;
  border: 1px solid #EBEAED;
  box-sizing: border-box;
  border-radius: 0 4px 4px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.transaction-page__sort-item:first-child {
  border-radius: 4px 0 0 4px;
  border-right: none;
}
.transaction-page__sort-item svg {
  fill: #84818A;
}
.transaction-page__sort-item_active {
  background: #FBFAFC;
}
.transaction-page__sort-item_active svg {
  fill: var(--blue-color);
}
.transaction-page__tr {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.transaction-page__tbody .transaction-page__tr {
  padding: 14px 16px;
  background-color: #FFFFFF;
  box-sizing: border-box;
}
.transaction-page__tbody .transaction-page__tr:not(:last-child) {
  border-bottom: 1px solid #EBEAED;
}
.transaction-page__tr > div:nth-child(1) {
  width: 75px;
  margin-right: 20px;
}
.transaction-page__tr > div:nth-child(2) {
  width: 150px;
  margin-right: 20px;
}
.transaction-page__tr > div:nth-child(3) {
  width: 150px;
  margin-right: 20px;
}
.transaction-page__tr > div:nth-child(4) {
  width: 270px;
  margin-right: 20px;
}
.transaction-page__tr > div:nth-child(5) {
  width: 90px;
  margin-right: 20px;
}
.transaction-page__tr > div:nth-child(6) {
  width: 60px;
  margin-right: 10px;
}
.transaction-page__tr > div:nth-child(7) {
  width: 20px;
}
.transaction-page__thead {
  margin-top: 30px;
  padding: 30px 16px 11px;
  border-bottom: 1px solid #EBEAED;
  color: #84818A;
  font-weight: 600;
}
.transaction-page__skill {
  background: #FBFAFC;
  border: 0.5px solid rgba(0, 0, 0, 0.16);
  box-sizing: border-box;
  border-radius: 24px;
  padding: 6px 20px;
}
.transaction-page__skill:not(:last-child) {
  margin-right: 8px;
}
.transaction-page__expert {
  display: flex;
  align-items: center;
}
.transaction-page__avatar {
  width: 34px;
  height: 34px;
  margin: 0 10px 0 0;
}
.transaction-page__name {
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
}
.transaction-page__email {
  font-size: 12px;
  line-height: 18px;
  color: #84818A;
  margin: 0;
}
.transaction-page__option {
  display: block;
  text-align: center;
}

</style>
