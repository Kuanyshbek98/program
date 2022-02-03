<template>
  <section class="modal create-edit">
    <form @submit.prevent="createEdit()" class="modal-content create-edit__content">
      <h2 class="create-edit__tile">{{ data.type === 'new' ? 'Create' : 'Edit' }} Company</h2>
      <div class="create-edit__uploader flex">
        <label class="create-edit__uploader-label">
          <input @change="fileChangeHandler" id="image" class="create-edit__uploader-input" type="file" hidden accept="image/*">
          <div class="create-edit__uploader-image avatar" :style="{backgroundImage: `url(${image})`}"></div>
          <!--            <img :src="image" alt="" class="create-edit__uploader-image avatar">-->
          <div class="create-edit__uploader-image-cover"></div>
        </label>
        <div class="create-edit__uploader-action">
          <label for="image" class="create-edit__uploader-btn">Upload new picture</label>
          <a class="create-edit__uploader-remove">Remove picture</a>
        </div>
      </div>
      <div class="join-us__content flex">
        <div class="create-edit__input-block create-edit__input-block_mini auth-form__input-block">
          <input id="enterprise" type="text" required inputmode="text" v-model="enterprise" class="create-edit__input auth-form__input"/>
          <label for="enterprise" class="create-edit__label auth-form__label">Enterprize</label>
        </div>
        <div
          class="create-edit__input-block create-edit__input-block_mini auth-form__input-block">
          <input id="position" type="text" required inputmode="text" v-model="position" class="create-edit__input auth-form__input"/>
          <label for="position" class="create-edit__label auth-form__label">Position in the enterprize</label>
        </div>
      </div>
      <div class="join-us__content flex">
        <div class="create-edit__input-block create-edit__input-block_mini auth-form__input-block">
          <input id="first-name" type="text" required inputmode="text" v-model="firstName" class="create-edit__input auth-form__input"/>
          <label for="first-name" class="create-edit__label auth-form__label">Your First name</label>
        </div>
        <div
          class="create-edit__input-block create-edit__input-block_mini auth-form__input-block">
          <input id="last-name" type="text" required inputmode="text" v-model="lastName" class="create-edit__input auth-form__input"/>
          <label for="last-name" class="create-edit__label auth-form__label">Your Last name</label>
        </div>
      </div>
      <div class="create-edit__input-block auth-form__input-block">
        <input id="company-email" type="text" required inputmode="email" v-model="email" class="create-edit__input auth-form__input"/>
        <label for="company-email" class="create-edit__label auth-form__label">Company Email</label>
      </div>
      <div v-if="data.type === 'new'" class="create-edit__input-block auth-form__input-block">
        <input id="password" type="password" required v-model="password" class="create-edit__input auth-form__input"/>
        <label for="password" class="create-edit__label auth-form__label">Password</label>
      </div>
      <div class="join-us__content flex">
        <div class="create-edit__input-block create-edit__input-block_min auth-form__input-block">
          <select v-model="countryId" class="create-edit__input auth-form__input">
            <option disabled value="">Country</option>
            <option v-for="country in COUNTRY_LIST" :key="country.id" :value="country.id">{{ country.name }}</option>
          </select>
        </div>
        <div class="create-edit__input-block create-edit__input-block_min auth-form__input-block">
          <select v-model="cityId" class="create-edit__input auth-form__input">
            <option disabled value="">City</option>
            <option v-for="city in CITY_LIST" :key="city.id" :value="city.id">{{ city.name }}</option>
          </select>
        </div>
        <div class="create-edit__input-block create-edit__input-block_min auth-form__input-block">
          <input id="zip-code" type="text" required v-model="zipCode" class="create-edit__input auth-form__input"/>
          <label for="zip-code" class="create-edit__label auth-form__label">Zip code</label>
        </div>
      </div>
      <div class="create-edit__input-block auth-form__input-block">
        <input id="site-link" type="url" required inputmode="url" v-model="siteLink" class="create-edit__input auth-form__input"/>
        <label for="site-link" class="create-edit__label auth-form__label">Enterprize Site link</label>
      </div>
      <div class="join-us-form__bottom auth-form__bottom flex">
        <button class="join-us-form__btn auth-form__btn">
          {{ data.type === 'new' ? 'Create' : 'Save' }}
        </button>
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
      if (this.file) formData.append('image', this.file)
      formData.append('enterprise_name', this.enterprise)
      formData.append('enterprise_address', 'address')
      formData.append('enterprise_email', this.email)
      formData.append('position', this.position)
      formData.append('city_id', this.cityId || 1)
      formData.append('zip', this.zipCode)
      formData.append('site_link', this.siteLink)
      formData.append('phone', this.phone)
      formData.append('country_id', this.countryId || 1)
      formData.append('name', this.firstName)
      formData.append('surname', this.lastName)
      if (this.data.type === 'edit') {
        formData.append('employee_id', this.data.id)
      } else {
        formData.append('password', this.password)
      }

      const url = this.data.type === 'new' ? '/admin/add-company' : '/admin/edit-company'
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
.create-edit__header {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 32px;
  border-bottom: 0.5px solid #EBEAED;
  text-align: center;
}
.create-edit__avatar {
  width: 80px;
  height: 80px;
  margin: 0;
}
.create-edit__name {
  font-size: 28px;
  line-height: 36px;
  margin: 0 0 8px;
}
.create-edit__address {
  color: #84818A;
  font-size: 16px;
  line-height: 20px;
  margin: 0 0 8px;
}
.create-edit__edit {
  width: 180px;
  background-color: var(--blue-color);
  border-radius: 4px;
  height: 32px;
}
.create-edit__block {
  padding: 32px 0 0;
  align-items: flex-start;
  justify-content: center;
}
.create-edit-box {
  margin: auto;
  width: 356px;
  padding: 20px 24px;
  box-sizing: border-box;
  background: #FFFFFF;
  border: 1px solid #E8E7E8;
}
.create-edit-box__subtitle {
  color: #84818A;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  margin: 0 0 8px;
}
.create-edit-box__value {
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin: 0 0 24px;
}

.create-edit__uploader {
  margin: 44px 0 32px;
  justify-content: flex-start;
}
.create-edit__uploader-label {
  width: 183px;
  height: 183px;
  display: block;
  position: relative;
}
.create-edit__uploader-image, .create-edit__uploader-image-cover {
  width: 100%;
  height: 100%;
}
.create-edit__uploader-image-cover {
  border-radius: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
}
.create-edit__uploader-image {
  position: absolute;
}
.create-edit__uploader-action {
  width: 200px;
  margin-left: 20px;
}
.create-edit__uploader-remove {
  display: block;
  text-align: center;
  color: #84818A;
  font-size: 14px;
  line-height: 20px;
  margin-top: 16px;
}
.create-edit__uploader-btn {
  width: 100%;
  border: 1px solid var(--blue-color);
  border-radius: 4px;
  height: 36px;
  background-color: #FFFFFF;
  color: var(--blue-color);
  font-weight: 600;
  font-size: 14px;
  display: block;
  text-align: center;
  line-height: 36px;
  cursor: pointer;
}
.create-edit__input-block {
  width: 100%;
}
.create-edit__input-block_mini {
  width: calc(50% - 24px);
}
.create-edit__input-block_min {
  width: calc(33% - 18px);
}
.create-edit__tile {
  text-align: center;
  font-size: 28px;
  line-height: 36px;
  margin: 0;
}
</style>
