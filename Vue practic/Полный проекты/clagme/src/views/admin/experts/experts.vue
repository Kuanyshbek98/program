<template>
  <section class="expert-page">
    <div class="expert-page__header flex">
      <h1 class="statistics-page__title admin-title">Experts</h1>
      <ul class="expert-page__sort-list">
        <li class="expert-page__sort-item expert-page__sort-item_active"><ListIcon /></li>
        <li class="expert-page__sort-item"><TableIcon /></li>
      </ul>
    </div>
    <ul class="expert-page__tabs">
      <li v-for="tab in tabs" :key="tab" class="expert-page__tab" :class="{'expert-page__tab_active': activeTab === tab}">
        <router-link to="/admin/experts">{{ tab }}</router-link>
      </li>
    </ul>
    <div class="expert-page__table">
      <div class="expert-page__thead">
        <div class="expert-page__tr">
          <div class="expert-page__td">ID</div>
          <div class="expert-page__td">Name</div>
          <div class="expert-page__td">Position</div>
          <div class="expert-page__td">Skills</div>
          <div class="expert-page__td">CV</div>
          <div class="expert-page__td">Hourly</div>
          <div class="expert-page__td">&nbsp;</div>
        </div>
      </div>
      <div v-if="EXPERT_LIST" class="expert-page__tbody">
        <div v-for="(expert, index) in EXPERT_LIST.data" :key="index" class="expert-page__tr">
          <div class="expert-page__td expert-page__id">{{ expert.id }}</div>
          <div @click="open(expert)" class="expert-page__td expert-page__expert">
            <div class="expert-page__avatar avatar" :style="{backgroundImage: `url(${$image + 'images/' + (expert.resume ? expert.resume.photo : '')})`}"></div>
            <div class="expert-page__text">
              <h4 class="expert-page__name">{{ expert.name }}</h4>
              <p class="expert-page__email">{{ expert.email }}</p>
            </div>
          </div>
          <div class="expert-page__td expert-page__position">{{ expert.resume ? expert.resume.title : '' }}</div>
          <div class="expert-page__td">
            <ul class="expert-page__skills flex-only">
              <li v-for="skill in expert.skills" :key="skill.title" class="expert-page__skill">{{ skill.title }}</li>
            </ul>
          </div>
          <div class="expert-page__td">
            <CvFile v-if="expert.resume && expert.resume.cv" :file="expert.resume.cv" />
          </div>
          <div class="expert-page__td">{{ expert.resume ? expert.resume.price : 0 }}$</div>
          <div class="expert-page__td">
            <a @click="showAction=expert" class="expert-page__option"><OptionIcon /></a>
            <ul v-if="showAction && showAction.id === expert.id" class="expert-page__actions">
              <li @click="openModal('show')" class="expert-page__action">Show</li>
              <li @click="openModal('edit')" class="expert-page__action">Edit</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showAction" @click="showAction=null" class="close"></div>
    <ModalBlock v-if="expert" :expert="expert" @close="expert=null" @edit="edit" />
    <CreateEditBlock v-if="createEdit" @close="createEdit=null" :data="createEdit" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import ListIcon from '@/assets/svg/list.svg?inline'
import TableIcon from '@/assets/svg/table.svg?inline'
import OptionIcon from '@/assets/svg/option.svg?inline'
export default {
  data() {
    return {
      tabs: [
        'All Claggers', 'Developers', 'Design', 'HR Managers', 'QA engineers', 'Human Resource', 'IT Support', 'Marketing', 'Accounting'
      ],
      activeTab: 'All Claggers',
      expert: null,
      createEdit: null,
      showAction: null
    }
  },
  computed: {
    ...mapGetters([
      'EXPERT_LIST'
    ])
  },
  methods: {
    open (value) {
      this.expert = value
    },
    edit () {
      this.createEdit = this.expert
      this.createEdit.type = 'edit'
      this.expert = null
    },
    openModal (type) {
      if (type === 'show') {
        this.expert = this.showAction
      } else {
        this.createEdit = this.showAction
      }
      this.showAction = null
    }
  },
  components: {
    ListIcon,
    TableIcon,
    OptionIcon,
    CvFile: () => ({
      component: import('@/components/common/cv')
    }),
    ModalBlock: () => ({
      component: import('./components/modal')
    }),
    CreateEditBlock: () => ({
      component: import('./components/createOrEdit')
    })
  },
  async created() {
    await this.$store.dispatch('getExpertList')
  }
}
</script>

<style scoped>
.statistics-page__title {
  margin-bottom: 33px;
}
.expert-page__tabs {
  display: flex;
  align-items: center;
}
.expert-page__tab {
  color: #84818A;
  font-size: 14px;
  line-height: 20px;
  margin-right: 16px;
  padding: 0 12px 12px;
  border-bottom: 2px solid #FBFAFC;
  transition: border-bottom-color 0.2s ease-in, color 0.2s ease-in;
}
.expert-page__tab_active, .expert-page__tab:hover {
  font-weight: 600;
  color: var(--primary-color);
  border-color: var(--blue-color);
}
.expert-page__sort-list {
  display: flex;
}
.expert-page__sort-item {
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
.expert-page__sort-item:first-child {
  border-radius: 4px 0 0 4px;
  border-right: none;
}
.expert-page__sort-item svg {
  fill: #84818A;
}
.expert-page__sort-item_active {
  background: #FBFAFC;
}
.expert-page__sort-item_active svg {
  fill: var(--blue-color);
}
.expert-page__tr {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.expert-page__tbody .expert-page__tr {
  padding: 14px 16px;
  background-color: #FFFFFF;
  box-sizing: border-box;
}
.expert-page__tbody .expert-page__tr:not(:last-child) {
  border-bottom: 1px solid #EBEAED;
}
.expert-page__tr > div:nth-child(1) {
  width: 75px;
  margin-right: 20px;
}
.expert-page__tr > div:nth-child(2) {
  width: 150px;
  margin-right: 20px;
}
.expert-page__tr > div:nth-child(3) {
  width: 150px;
  margin-right: 20px;
}
.expert-page__tr > div:nth-child(4) {
  width: 270px;
  margin-right: 20px;
}
.expert-page__tr > div:nth-child(5) {
  width: 90px;
  margin-right: 20px;
}
.expert-page__tr > div:nth-child(6) {
  width: 60px;
  margin-right: 10px;
}
.expert-page__tr > div:nth-child(7) {
  width: 20px;
}
.expert-page__thead {
  margin-top: 30px;
  padding: 30px 16px 11px;
  border-bottom: 1px solid #EBEAED;
  color: #84818A;
  font-weight: 600;
}
.expert-page__skill {
  background: #FBFAFC;
  border: 0.5px solid rgba(0, 0, 0, 0.16);
  box-sizing: border-box;
  border-radius: 24px;
  padding: 6px 20px;
}
.expert-page__skill:not(:last-child) {
  margin-right: 8px;
}
.expert-page__expert {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.expert-page__avatar {
  width: 34px;
  min-width: 34px;
  height: 34px;
  margin: 0 10px 0 0;
}
.expert-page__name {
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
}
.expert-page__email {
  font-size: 12px;
  line-height: 18px;
  color: #84818A;
  margin: 0;
}
.expert-page__option {
  display: block;
  text-align: center;
}
.expert-page__actions {
  position: absolute;
  background-color: #FFFFFF;
  z-index: 1;
  right: 10px;
  top: 12px;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.15);
  width: 150px;
}
.expert-page__action {
  padding: 10px 0 10px 5px;
  cursor: pointer;
}
.expert-page__action:hover {
  background-color: rgba(0, 0, 0, .1);
}
</style>
