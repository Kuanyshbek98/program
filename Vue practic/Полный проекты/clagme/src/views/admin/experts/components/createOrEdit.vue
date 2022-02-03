<template>
  <section class="modal create-edit">
    <form @submit.prevent="createEdit()" class="modal-content create-edit__content">
      <h2 class="create-edit__tile">Edit expert</h2>
      <div class="create-edit__input-block auth-form__input-block">
        <input id="email" required inputmode="email" type="email" v-model="email" class="create-edit__input auth-form__input"/>
        <label for="email" class="create-edit__label auth-form__label">Email</label>
      </div>
      <div class="join-us__content flex">
        <div class="create-edit__input-block create-edit__input-block_mini auth-form__input-block">
          <input id="last-name-user" type="text" required inputmode="text" v-model="lastName" class="create-edit__input auth-form__input"/>
          <label for="last-name-user" class="create-edit__label auth-form__label">Last name</label>
        </div>
        <div
          class="create-edit__input-block create-edit__input-block_mini auth-form__input-block">
          <input id="first-name-user" type="text" required inputmode="text" v-model="firstName" class="create-edit__input auth-form__input"/>
          <label for="first-name-user" class="create-edit__label auth-form__label">First name</label>
        </div>
      </div>
      <div class="create-edit__input-block auth-form__input-block">
        <input id="password-user" type="password" v-model="password" class="create-edit__input auth-form__input"/>
        <label for="password-user" class="create-edit__label auth-form__label">Password</label>
      </div>
      <div class="create-edit__bottom auth-form__bottom flex">
        <button class="create-edit__btn auth-form__btn">Save</button>
      </div>
    </form>
    <div @click="$emit('close')" class="close"></div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      email: '',
      lastName: '',
      firstName: '',
      password: '',
      image: '',
      file: null,
      enterprise: '',
      position: '',
      countryId: '',
      cityId: '',
      zipCode: '',
      siteLink: ''
    }
  },
  computed: {
    ...mapGetters([
      'CITY_LIST',
      'COUNTRY_LIST',
      'SKILL_LIST'
    ])
  },
  methods: {
    fileChangeHandler (e) {
      this.file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = (e) => {
        this.image = e.target.result
      }
      reader.readAsDataURL(this.file)
    },
    async createEdit() {
      const formData = new FormData()
      formData.append('email', this.email)
      formData.append('name', this.firstName)
      formData.append('surname', this.lastName)
      formData.append('user_id', this.data.id)
      if (this.password) {
        formData.append('password', this.password)
      }

      const url = this.data.type === 'new' ? '/admin/add-user' : '/admin/edit-user'
      await this.$api.post(url, formData)
        .then((response) => {
          console.log(response)
          this.$toast.success('Success')
          this.$store.dispatch('getCompanyList')
          this.$emit('close')
        })
        .catch((e) => {
          if (e.response) {
            this.$toast.error(e.response.data.message)
          }
        })
    }
  },
  components: {
  },
  created() {
    this.$store.dispatch('getCityList')
    this.$store.dispatch('getCountryList')
    if (this.data.type === 'edit') {
      this.email = this.data.email
      this.lastName = this.data.name
      this.firstName = this.data.surname
      this.image = this.$image + 'image/' +this.data.image
      this.enterprise = this.data.company_name
      this.position = this.data.position
      this.countryId = this.data.country_id
      this.cityId = this.data.city_id
      this.zipCode = this.data.zip
      this.siteLink = this.data.site
    }
  }
}
</script>

<style scoped src="@/assets/css/auth.css"></style>
<style>
.create-edit {
  background: rgba(0, 0, 0, 0.8);
}
.create-edit__content {
  width: 918px;
  max-width: 95%;
}
.create-edit__input-block {
  width: 100%;
}
.create-edit__input-block_mini {
  width: calc(50% - 24px);
}
.create-edit__tile {
  text-align: center;
  font-size: 28px;
  line-height: 36px;
  margin: 0 0 24px;
}
</style>
