<template>
  <section class="companies-page">
    <div class="companies-page__header flex">
      <h1 class="companies-page__title admin-title">Companies</h1>
      <div class="flex">
        <ul class="companies-page__sort-list">
          <li class="companies-page__sort-item companies-page__sort-item_active"><ListIcon /></li>
          <li class="companies-page__sort-item"><TableIcon /></li>
        </ul>
        <button @click="createEdit={type:'new'}" class="companies-page__add">
          <PlusIcon />
          Add Company
        </button>
      </div>
    </div>
    <div v-if="COMPANY_LIST" class="companies-page__list">
      <div v-for="(company, index) in COMPANY_LIST.data" :key="index" class="companies-page__item item-companies-page">
        <div class="item-companies-page__header flex">
          <div @click="open(company)" class="flex">
            <div class="item-companies-page__avatar avatar flex" :style="{backgroundImage: `url(${$image + 'image/' + company.image})`}"></div>
            <h3 class="item-companies-page__name">{{ company.company_name }}</h3>
          </div>
          <a @click="showAction=company" class="item-companies-page__option"><OptionIcon /></a>
          <ul v-if="showAction && showAction.id === company.id" class="companies-page__actions">
            <li @click="openModal('show')" class="companies-page__action">Show</li>
            <li @click="openModal('edit')" class="companies-page__action">Edit</li>
          </ul>
        </div>
        <div class="main-line"></div>
        <div class="item-companies-page__info">
          <a><GeoIcon />
            {{ company.city }}, Kz</a>
          <a target="_blank" :href="company.site"><WorldIcon />
            {{ company.site }}</a>
        </div>
        <h4 class="item-companies-page__position">{{ company.position }}</h4>
        <p class="item-companies-page__text">We need a great designer who's also a great animator!</p>
      </div>
    </div>
    <div v-if="showAction" @click="showAction=null" class="close"></div>
    <ModalBlock v-if="company" :company="company" @close="company=null" @edit="edit" />
    <CreateEditBlock v-if="createEdit" @close="createEdit=null" :data="createEdit" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import ListIcon from '@/assets/svg/list.svg?inline'
import TableIcon from '@/assets/svg/table.svg?inline'
import PlusIcon from '@/assets/svg/plus.svg?inline'
import OptionIcon from '@/assets/svg/option.svg?inline'
import GeoIcon from '@/assets/svg/geo.svg?inline'
import WorldIcon from '@/assets/svg/world.svg?inline'
export default {
  data() {
    return {
      company: null,
      createEdit: null,
      showAction: null
    }
  },
  computed: {
    ...mapGetters([
      'COMPANY_LIST'
    ])
  },
  methods: {
    open (value) {
      this.company = value
    },
    edit () {
      this.createEdit = this.company
      this.createEdit.type = 'edit'
      this.company = null
    },
    openModal (type) {
      if (type === 'show') {
        this.company = this.showAction
      } else {
        this.createEdit = this.showAction
      }
      this.showAction = null
    }
  },
  components: {
    ListIcon,
    TableIcon,
    PlusIcon,
    OptionIcon,
    GeoIcon,
    WorldIcon,
    ModalBlock: () => ({
      component: import('./components/modal')
    }),
    CreateEditBlock: () => ({
      component: import('./components/createOrEdit')
    })
  },
  async created() {
    await this.$store.dispatch('getCompanyList')
  }
}
</script>

<style scoped>
.companies-page__sort-list {
  display: flex;
}
.companies-page__sort-item {
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
.companies-page__sort-item:first-child {
  border-radius: 4px 0 0 4px;
  border-right: none;
}
.companies-page__sort-item svg {
  fill: #84818A;
}
.companies-page__sort-item_active {
  background: #FBFAFC;
}
.companies-page__sort-item_active svg {
  fill: var(--blue-color);
}
.companies-page__add svg {
  fill: #FFFFFF;
  margin-right: 8px;
}
.companies-page__add {
  margin-left: 16px;
  border-radius: 4px;
  padding: 10px 24px;
  color: #FFFFFF;
  background-color: var(--blue-color);
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
}
.companies-page__list {
  display: grid;
  grid-gap: 24px;
  margin-top: 32px;
  --auto-grid-min-size: 340px;
  grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
  position: relative;
}
.item-companies-page {
  background: #FFFFFF;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 12px 22px 17px 20px;
  position: relative;
}
.item-companies-page__header {
  padding-bottom: 12px;
}
.item-companies-page__avatar {
  width: 48px;
  height: 48px;
  margin: 0 12px 0 0;
}
.item-companies-page__name {
  color: #3B3A40;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: 0.2px;
  margin: 0;
}
.item-companies-page__info {
  margin-top: 16px;
  display: flex;
}
.item-companies-page__info a {
  margin-right: 17px;
  display: flex;
  align-items: center;
}
.item-companies-page__info svg {
  margin-right: 10px;
}
.item-companies-page__position {
  font-size: 16px;
  line-height: 22px;
  margin: 24px 0 0;
}
.item-companies-page__text {
  color: #3B3A40;
  font-size: 14px;
  line-height: 24px;
  margin: 8px 0 0;
}
.item-companies-page__option {
  padding: 0 10px;
}
.companies-page__actions {
  position: absolute;
  background-color: #FFFFFF;
  z-index: 1;
  right: 10px;
  top: 12px;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.15);
  width: 150px;
}
.companies-page__action {
  padding: 10px 0 10px 5px;
  cursor: pointer;
}
.companies-page__action:hover {
  background-color: rgba(0, 0, 0, .1);
}
</style>
