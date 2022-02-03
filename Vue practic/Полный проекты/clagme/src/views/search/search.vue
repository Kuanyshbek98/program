<template>
  <section class="search">
    <div class="search__header search-header">
      <div class="container search-header__content">
        <FormBlock class="home-page-head__form" />
        <form @submit.prevent="search" class="search-header__mobile-form">
          <input v-model="searchModel" class="search-header__mobile-input" type="text" placeholder="Ex: Sr. UX Designer">
        </form>
      </div>
    </div>
    <div class="container search__content flex">
      <FilterBlock class="search__filter" />
      <ResultBlock class="search__result" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      searchModel: ''
    }
  },
  methods: {
    async getData () {
      const formData = new FormData()
      Object.entries(this.$route.query).map((obj) => {
        formData.append(obj[0], obj[1])
      })
      await this.$store.dispatch('getSearchList', formData)
    },
    async search () {
      const queries = JSON.parse(JSON.stringify(this.$route.query))
      if (this.searchModel) queries.title = this.searchModel
      else if (queries.title) delete queries.title
      if (Object.entries(queries).toString() === Object.entries(this.$route.query).toString()) {
        return
      }
      await this.$router.replace({ query: queries })
    }
  },
  components: {
    FormBlock: () => ({
      component: import('@/components/common/form')
    }),
    FilterBlock: () => ({
      component: import('./components/filter')
    }),
    ResultBlock: () => ({
      component: import('./components/result')
    }),
  },
  async created() {
    await this.getData()
  },
  watch: {
    async $route () {
      await this.getData()
    }
  },
}
</script>

<style scoped>
.search__header {
  height: 200px;
  display: flex;
  box-sizing: border-box;
  margin-top: -64px;
  padding-top: 64px;
  background: linear-gradient(0deg, #FFF3D7, #FFF3D7), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
}
.search-header__content {
  margin-bottom: 0;
  align-items: flex-start;
}
.search__content {
  padding: 64px 0;
  align-items: flex-start;
}
.search__filter {
  width: 288px;
}
.search__result {
  width: calc(100% - 312px);
}
.search-header__mobile-form {
  display: none;
}

@media (max-width: 768px) {
  .search__header {
    height: auto;
    background: #FFFFFF;
    filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.12));
  }
  .home-page-head__form {
    display: none;
  }
  .search-header__mobile-form {
    display: block;
    position: relative;
    padding: 12px;
  }
  .search-header__mobile-input {
    background: #FBFAFC;
    border: 0.33px solid #EBEAED;
    box-sizing: border-box;
    border-radius: 40px;
    height: 40px;
    width: 100%;
    padding-left: 40px;
  }
  .search__filter {
    display: none;
  }
  .search__result {
    width: 100%;
  }
  .search__content {
    padding: 16px 0;
  }
}
</style>
