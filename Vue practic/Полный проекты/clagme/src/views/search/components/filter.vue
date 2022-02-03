<template>
  <div class="search-filter">
    <h2 class="search-filter__title">Filters</h2>
    <form @submit="search()" class="search-filter__form">
      <div class="search-filter__field">
        <label for="rate" class="search-filter__label">Hourly rate</label>
        <input @change="search()" v-model="rate" id="rate" type="number" inputmode="numeric" class="search-filter__input">
        <a class="search-filter__prefix">Up to : </a>
      </div>
      <div class="search-filter__field">
        <label class="search-filter__label">Skills</label>
        <v-select @close="search()" v-if="SKILL_LIST" required v-model="skills" class="vue-style" label="title" :options="SKILL_LIST"></v-select>
      </div>
      <div class="search-filter__field">
        <label class="search-filter__label">Available date</label>
        <date-picker @change="search" valueType="format" format="DD-MM-YYYY" v-model="date" range></date-picker>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DatePicker from 'vue2-datepicker'

import 'vue2-datepicker/index.css'
// import 'vue2-datepicker/locale/ru-ru'

export default {
  data() {
    return {
      rate: '',
      skills: [],
      date: []
    }
  },
  computed: {
    ...mapGetters([
      'SKILL_LIST'
    ])
  },
  methods: {
    setValues () {
      const queries = JSON.parse(JSON.stringify(this.$route.query))
      if (queries.price) this.rate = queries.price
      if (queries.start_date) this.date[0] = queries.start_date
      if (queries.end_date) this.date[1] = queries.end_date
      Object.entries(queries).map(([k, v]) => {
        if (k.split('[')[0] === 'skill') {
          this.skills.push(v)
        }
      })
    },
    async search () {
      const queries = JSON.parse(JSON.stringify(this.$route.query))
      if (this.rate) queries.price =  this.rate
      else if (queries.price) delete queries.price
      if (this.skills) {
        // this.skills.forEach((skill, index) => {
          queries[`skills[0]`] = this.skills.id
        // })
      }
      if (this.date.length) {
        queries.start_date = this.date[0]
        queries.end_date = this.date[1]
      } else {
        delete queries.start_date
        delete queries.end_date
      }
      if (Object.entries(queries).toString() === Object.entries(this.$route.query).toString()) {
        return
      }
      await this.$router.replace({ query: queries })

      // const formData = new FormData()
      // if (this.rate) formData.append('price', this.rate)
      // this.skills.forEach((skill, index) => {
      //   formData.append(`skills[${index}]`, skill.title)
      // })
      // if (this.date) {
      //   formData.append('start_date', this.date[0])
      //   formData.append('end_date', this.date[1])
      // }
      // await this.$store.dispatch('getSearchList', formData)
      // await this.$router.replace({ query: queries })
    }
  },
  components: {
    DatePicker
  },
  created() {
    this.setValues()
    this.$store.dispatch('getSkillList')
  },
  watch: {
    // skills () {
      // this.search()
    // }
  }
}
</script>

<style scoped>
.search-filter__title {
  margin: 0 0 24px;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.2px;
}
.search-filter__label {
  font-size: 14px;
  line-height: 20px;
  color: #504F54;
}
.search-filter__input, .vue-style {
  border-radius: 4px;
  border: 1px solid #EBEAED;
  margin: 8px 0 24px;
  height: 42px;
}
.search-filter__input {
  padding-left: 63px;
}
.search-filter__field {
  position: relative;
}
.search-filter__prefix {
  position: absolute;
  top: 40px;
  left: 10px;
  color: #84818A;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.mx-datepicker {
  margin-top: 8px;
  width: 100%;
  height: 32px;
}
</style>
