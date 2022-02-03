<template>
  <div class="search-result">
    <header v-if="SEARCH_LIST" class="search-result__header flex">
      <p class="search-result__left-block">
        Showing : <span class="search-result__result-count">{{ SEARCH_LIST.resumes ? SEARCH_LIST.resumes.length : 0 }} filtered results</span>
      </p>
      <div class="search-result__right-block flex">
        Sort by :
        <select class="search-result__select">
          <option value="new">New posts</option>
        </select>
      </div>
    </header>
    <div v-if="SEARCH_LIST" class="search-result__list">
      <div v-for="search in SEARCH_LIST.resumes" :key="search.id" class="search-result__item item">
        <div class="item__header flex">
          <h3 class="item__title">{{ search.title }}</h3>
          <CvFile v-if="search.cv" class="item__header-cv" :file="search.cv" />
        </div>
        <div v-if="search.user" class="item__company item-company flex">
          <div class="item-company__about flex">
            <div class="item-company__logo avatar" :style="{backgroundImage: `url(${$image + 'images/' + search.photo})`}"></div>
            <h4 class="item-company__name">{{ search.user.name }} {{ search.user.surname }}</h4>
          </div>
          <button @click="openModal(search)" class="item-company__hire">{{ search.send_offer ? 'Your requested' : 'Hire clagger' }}</button>
        </div>
        <div class="item__text">
          Hired companies:
          <a
            v-for="company in search.hired"
            :key="company.enterprise_name"
            class="item__companies-logo avatar"
            :title="company.enterprise_name"
            :style="{backgroundImage: `url(${$image + 'image/' + company.image})`}"
          ></a>
        </div>
        <div class="item__line"></div>
        <ul class="item__tags">
          <li v-for="(skill, i) in search.skills" :key="i" class="item__tag">
            <router-link :to="`/search?skill[0]=${skill.title}`" class="item__link">{{ skill.title }}</router-link>
          </li>
        </ul>
        <ul class="item__rating-list">
          <li class="item__rating">
            <star-rating
              :increment="0.1"
              :star-size="15"
              :max-rating="3"
              :read-only="true"
              :rating="search.academic"
              :show-rating="false"
              :inactive-color="'#E3E1E5'"
              :active-color="'#FFA043'"
              :border-color="'rgba(255, 255, 255, 0.1)'"
            />
            Academic
          </li>
          <li class="item__rating">
            <star-rating
              :increment="0.1"
              :star-size="15"
              :max-rating="3"
              :read-only="true"
              :rating="search.technical"
              :show-rating="false"
              :inactive-color="'#E3E1E5'"
              :active-color="'#FFA043'"
              :border-color="'rgba(255, 255, 255, 0.1)'"
            />
            Technical
          </li>
          <li class="item__rating">
            <star-rating
              :increment="0.1"
              :star-size="15"
              :max-rating="3"
              :read-only="true"
              :rating="search.management"
              :show-rating="false"
              :inactive-color="'#E3E1E5'"
              :active-color="'#FFA043'"
              :border-color="'rgba(255, 255, 255, 0.1)'"
            />
            Management
          </li>
        </ul>
        <div class="item__bottom item-bottom">
          <CvFile v-if="search.cv" class="item-bottom__cv" :file="search.cv" />
          <button @click="openModal(search)" class="item-bottom__hire">{{ search.send_offer ? 'Your requested' : 'Hire clagger' }}</button>
        </div>
      </div>
      <h3 v-if="!SEARCH_LIST.resumes.length">Нет результата</h3>
    </div>
    <ProposalBlock v-if="showModal" @close="showModal=false" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      showModal: false
    }
  },
  computed: {
    ...mapGetters([
      'SEARCH_LIST'
    ])
  },
  methods: {
    openModal (search) {
      if (search.send_offer) {
        return
      }
      this.showModal = true
      this.$store.commit('setProposalData', search)
    }
  },
  components: {
    CvFile: () => ({
      component: import('@/components/common/cv')
    }),
    ProposalBlock: () => ({
      component: import('./proposal')
    }),
  }
}
</script>

<style scoped>
.search-result__header{
  padding-bottom: 16px;
  border-bottom: 0.5px solid #E0E0E0;
  margin-bottom: 24px;
}
.search-result__left-block {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #B6B4BA;
  margin: 0;
}
.search-result__result-count {
  color: var(--primary-color);
}
.search-result__right-block {
  white-space: nowrap;
  color: #B6B4BA;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
}
.item {
  background: #FFFFFF;
  border: 0.33px solid #E3E1E5;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 24px 16px;
  margin-bottom: 16px;
}
.item__title {
  font-size: 20px;
  line-height: 24px;
  margin: 0;
}
.item__header {
  margin-bottom: 16px;
}
.item__company {
  margin-bottom: 16px;
}
.item-company__logo {
  width: 44px;
  height: 44px;
  margin-right: 12px;
}
.item-company__name {
  font-size: 16px;
  line-height: 22px;
  margin: 0;
}
.item__text {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.item__companies-logo {
  width: 36px;
  height: 36px;
  margin: 0 4px 0 0;
}
.item__companies-logo:first-child {
  margin-left: 8px;
}
.item__line {
  width: calc(100% + 16px);
  background: #E3E1E5;
  height: 1px;
  margin-bottom: 16px;
}
.item__tags {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}
.item__tag:not(:last-child) {
  margin-right: 8px;
}
.item__tag {
  font-size: 14px;
  line-height: 20px;
  background: #FBFAFC;
  border: 0.5px solid rgba(0, 0, 0, 0.16);
  box-sizing: border-box;
  border-radius: 24px;
}
.item__link {
  display: block;
  padding: 6px 20px;
}
.item-company__hire {
  border: 1px solid var(--blue-color);
  border-radius: 4px;
  width: 112px;
  height: 36px;
  background-color: #FFFFFF;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: var(--blue-color);
}
.item__rating-list {
  display: flex;
}
.item__rating {
  margin-right: 24px;
  color: #84818A;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.item-bottom__hire, .item-bottom__cv {
  display: none !important;
}

@media (max-width: 768px) {
  .search-result__header {
    display: none;
  }
  .item__header-cv, .item-company__hire {
    display: none !important;
  }
  .item-company__logo {
    width: 40px;
    height: 40px;
  }
  .item__header {
    margin-bottom: 12px;
  }
  .item-bottom__hire, .item-bottom__cv {
    display: flex !important;
  }
}
</style>
