<template>
  <div class="resume-main">
    <div class="resume-main__content">
      <h1 class="resume-main__title">Resume</h1>
      <template v-if="RESUME">
        <div class="resume-main__avatar-block avatar-resume-main">
          <div class="avatar-resume-main__image">
            <div class="avatar-resume-main__cover avatar" :style="{backgroundImage: `url(${image ? image : $image + 'images/' + RESUME.photo})`}"></div>
            <div class="avatar-resume-main__radius avatar" :style="{background: `linear-gradient(0deg, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url(${image ? image : $image + RESUME.photo})`}"></div>
          </div>
          <div class="avatar-resume-main-actions">
            <label class="avatar-resume-main__uploader">
              <input @change="fileChangeHandler" type="file" hidden accept="image/*">
              Upload new picture
            </label>
            <a class="avatar-resume-main__remove">Remove picture</a>
          </div>
        </div>
        <label class="resume-main__label">Title</label>
        <input v-model="RESUME.title" type="text" class="resume-main__input">
        <label class="resume-main__label">Address</label>
        <textarea v-model="RESUME.address" class="resume-main__input resume-main__input_textarea" placeholder="Your address"></textarea>
        <label class="resume-main__label">Price</label>
        <input v-model="RESUME.price" type="text" class="resume-main__input">
        <label class="resume-main__label">Skills</label>
        <v-select v-if="SKILL_LIST" required v-model="RESUME.skills" class="vue-style" label="title" :options="SKILL_LIST" multiple></v-select>
        <p class="resume-main__text">Rate your following abilities</p>
        <ul class="resume-main__list">
          <li class="resume-main__item">
            <star-rating
              :increment="1"
              :star-size="24"
              :max-rating="3"
              :read-only="false"
              :rating="RESUME.management"
              :show-rating="false"
              :inactive-color="'#E3E1E5'"
              :active-color="'#FFA043'"
              :border-color="'rgba(255, 255, 255, 0.1)'"
              @rating-selected ="setRating('management', $event)"
            />
            Management
          </li>
          <li class="resume-main__item">
            <star-rating
              :increment="1"
              :star-size="24"
              :max-rating="3"
              :read-only="false"
              :rating="RESUME.technical"
              :show-rating="false"
              :inactive-color="'#E3E1E5'"
              :active-color="'#FFA043'"
              :border-color="'rgba(255, 255, 255, 0.1)'"
              @rating-selected ="setRating('technical', $event)"
            />
            Technical
          </li>
          <li class="resume-main__item">
            <star-rating
              :increment="1"
              :star-size="24"
              :max-rating="3"
              :read-only="false"
              :rating="RESUME.academic"
              :show-rating="false"
              :inactive-color="'#E3E1E5'"
              :active-color="'#FFA043'"
              :border-color="'rgba(255, 255, 255, 0.1)'"
              @rating-selected ="setRating('academic', $event)"
            />
            Academic
          </li>
        </ul>
        <label class="resume-main__upload urm">
          <input @change="fileCvHandler" type="file" hidden>
          <template v-if="!cvName">
            <h2 class="urm__title">Upload CV</h2>
            <ImageIcon class="urm__icon" />
            <p class="urm__text">Drag & drop a file to attach it, or </p>
            <a class="urm__color">browse for a file...</a>
          </template>
          <p v-else class="urm__text">{{ cvName }}</p>
        </label>
      </template>
      <div class="resume-main__bottom">
        <button type="button" @click="discard()" class="resume-main__default">Discard</button>
        <button @click="save()" class="resume-main__success">Save Changes</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ImageIcon from '@/assets/svg/image.svg?inline'
export default {
  data() {
    return {
      file: null,
      image: '',
      cv: null,
      cvName: null
    }
  },
  computed: {
    ...mapGetters([
      'RESUME',
      'SKILL_LIST'
    ])
  },
  methods: {
    fileChangeHandler (e) {
      // const files = Array.from(e.target.files)
      this.file = e.target.files[0]
      const reader = new FileReader()

      reader.onload = (e) => {
        this.image = e.target.result
      }
      reader.readAsDataURL(this.file)
    },
    fileCvHandler (e) {
      if (!e) {
        return
      }
      // const files = Array.from(e.target.files)
      this.cv = e.target.files[0]
      const reader = new FileReader()
      this.cvName = e.target.value

      reader.readAsDataURL(this.cv)
    },
    setRating (index, rating) {
      this.RESUME[index] = rating
    },
    async save () {
      console.log(this.RESUME)
      const formData = new FormData()
      formData.append('title', this.RESUME.title)
      formData.append('address', this.RESUME.address)
      formData.append('price', this.RESUME.price)
      formData.append('management', this.RESUME.management)
      formData.append('academic', this.RESUME.academic)
      formData.append('technical', this.RESUME.technical)
      if (this.file) {
        formData.append('photo', this.file)
      }
      if (this.cv) {
        formData.append('cv', this.cv)
      }
      if (this.RESUME.skills) {
        this.RESUME.skills.forEach((skill) => {
          formData.append('skills[]', skill.id)
        })
      }
      await this.$api.post('/user/create-resume', formData)
        .then((response) => {
          console.log(response)
          this.$toast.success('Saved by!')
        })
        .catch((e) => {
          if (e.response) {
            this.$toast.error(e.response.data.message)
          }
        })
    },
    discard () {
      this.$router.go(-1)
    }
  },
  components: {
    ImageIcon,
  },
  async created() {
    await this.$store.dispatch('getResume')
    await this.$store.dispatch('getSkillList')
  }
}
</script>

<style scoped>
.resume-main__title {
  font-size: 24px;
  line-height: 33px;
  margin: 0 0 40px;
}
.avatar-resume-main {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}
.avatar-resume-main__image {
  width: 183px;
  height: 183px;
  margin: 0 24px 0 0;
  border-radius: 0;
  position: relative;
}
.avatar-resume-main__cover, .avatar-resume-main__radius {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.avatar-resume-main__radius {
  border-radius: 0;
}
.avatar-resume-main__cover {
  z-index: 1;
}
.avatar-resume-main-actions {
  text-align: center;
}
.avatar-resume-main__uploader {
  border: 1px solid var(--blue-color);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 8px 27px;
  display: block;
  margin-bottom: 16px;
  color: var(--blue-color);
  cursor: pointer;
}
.avatar-resume-main__remove {
  color: #84818A;
}
.resume-main__input {
  width: 100%;
  background: #FFFFFF;
  border: 1px solid #EBEAED;
  border-radius: 4px;
  height: 48px;
  margin: 8px 0 24px;
  padding-left: 16px;
}
.resume-main__input_textarea {
  height: 100px;
  padding: 14px 16px;
  resize: none;
  margin-bottom: 24px;
}
.resume-main__text {
  margin-top: 56px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #2E2C34;
}
.resume-main__bottom {
  margin-top: 40px;
}
.resume-main__default {
  background: #FFFFFF;
  border: 1px solid #EBEAED;
  border-radius: 4px;
  width: 91px;
  height: 40px;
  margin-right: 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
}
.resume-main__success {
  background: var(--blue-color);
  border-radius: 4px;
  height: 40px;
  width: 138px;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
}
.resume-main__list {
  display: flex;
}
.resume-main__item {
  margin-right: 56px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.vue-star-rating {
  margin-bottom: 8px;
}
.urm {
  background: #FFFFFF;
  border: 1px dashed #B6B4BA;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 143px;
  text-align: center;
  padding: 16px 0;
  font-weight: 500;
  line-height: 20px;
  margin-top: 56px;
  cursor: pointer;
}
.urm__title {
  color: #504F54;
  font-weight: 500;
  font-size: 14px;
  margin: 0 0 12px;
}
.urm__text {
  color: #84818A;
  font-size: 14px;
  margin: 12px 0 4px;
}
.urm__color {
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: var(--blue-color);
}
.search-filter__input, .vue-style {
  border-radius: 4px;
  border: 1px solid #EBEAED;
  margin: 8px 0 24px;
  height: 42px;
}

@media (max-width: 420px) {
  .avatar-resume-main__image {
    width: 144px;
    min-width: 144px;
    height: 144px;
    margin-right: 16px;
  }
  .avatar-resume-main__uploader {
    padding: 8px 15px;
  }
  .resume-main__text {
    margin-top: 30px;
  }
  .resume-main__item {
    margin-right: 25px;
  }
}
</style>
