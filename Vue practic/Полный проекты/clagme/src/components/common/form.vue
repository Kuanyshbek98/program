<template>
  <form @submit.prevent="search()" class="common-form flex">
    <div class="common-form__block">
      <input v-model="searchModel" type="text" class="common-form__input" placeholder="for example, UI UX designer">
      <SearchIcon class="common-form__icon" />
    </div>
<!--    <div class="common-form__block">-->
<!--      <input type="text" class="common-form__input" placeholder="Time range">-->
<!--      <TimeIcon class="common-form__icon" />-->
<!--    </div>-->
    <button class="common-form__button">
      Search
    </button>
  </form>
</template>

<script>
import SearchIcon from '@/assets/svg/search.svg?inline'
// import TimeIcon from '@/assets/svg/time.svg?inline'
export default {
  data() {
    return {
      searchModel: ''
    }
  },
  methods: {
    async search () {
      if (this.$route.name === 'Home') {
        await this.$router.push(`/search?title=${this.searchModel}`)
      } else {
        const queries = JSON.parse(JSON.stringify(this.$route.query))
        if (this.searchModel) queries.title = this.searchModel
        else if (queries.title) delete queries.title
        if (Object.entries(queries).toString() === Object.entries(this.$route.query).toString()) {
          return
        }
        await this.$router.replace({ query: queries })
      }
    }
  },
  components: {
    SearchIcon,
    // TimeIcon,
  },
  created() {
    this.searchModel = this.$route.query.title
  }
}
</script>

<style scoped>
.common-form {
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 28px 32px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(32px);
  border-radius: 8px;
}
.common-form__block {
  width: 100%;
  height: 72px;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 12px 0;
  box-sizing: border-box;
}
.common-form__block:first-child {
  border-radius: 8px 0 0 8px;
}
.common-form__block:first-child:after {
  content: '';
  position: absolute;
  right: 0;
  background-color: #E8E7E8;
  width: 1px;
  height: 48px;
}
.common-form__input {
  height: 100%;
  background-color: transparent;
  padding-left: 56px;
}
.common-form__icon {
  top: 50%;
  transform: translateY(-50%);
  left: 19px;
  position: absolute;
}
.common-form__button {
  width: 190px;
  height: 72px;
  background: var(--blue-color);
  border-radius: 0 8px 8px 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
}

@media (max-width: 991px) {
  .common-form__block {
    height: 50px;
    box-sizing: border-box;
  }
  .common-form__button {
    height: 52px;
  }
}

@media (max-width: 768px) {
  .common-form {
    flex-direction: column;
    overflow: hidden;
  }
  .common-form__block {
    width: 100%;
  }
  .common-form__button {
    width: 100%;
    border-radius: 0 0 8px 9px;
  }
}
</style>
