<template>
  <section v-if="expert" class="modal expert">
    <div class="modal-content expert__content">
      <div class="expert__header">
        <div class="expert__avatar avatar" :style="{backgroundImage: `url(${$image + expert.image})`}"></div>
        <div class="expert__header-main">
          <h2 class="expert__name">{{ expert.name }}</h2>
          <p class="expert__profession"></p>
          <button @click="$emit('edit')" class="expert__edit main-btn">Edit the profile</button>
        </div>
      </div>
      <div class="expert__block flex">
        <div class="expert__left">
          <h3 class="expert__subtitle">Skills</h3>
          <ul class="expert__skills">
            <li v-for="skill in expert.skills" :key="skill.title" class="expert__skill">
              {{ skill.title }}
            </li>
          </ul>
          <h3 class="expert__subtitle">Hired companies</h3>
          <h3 class="expert__subtitle">Abilities</h3>
          <ul class="resume-main__list">
            <li class="resume-main__item">
              <star-rating
                :increment="1"
                :star-size="18"
                :max-rating="3"
                :read-only="false"
                :rating="expert.resume.technical"
                :show-rating="false"
                :inactive-color="'#E3E1E5'"
                :active-color="'#FFA043'"
                :border-color="'rgba(255, 255, 255, 0.1)'"
              />
              Technical
            </li>
            <li class="resume-main__item">
              <star-rating
                :increment="1"
                :star-size="18"
                :max-rating="3"
                :read-only="false"
                :rating="expert.resume.academic"
                :show-rating="false"
                :inactive-color="'#E3E1E5'"
                :active-color="'#FFA043'"
                :border-color="'rgba(255, 255, 255, 0.1)'"
              />
              Academic
            </li>
            <li class="resume-main__item">
              <star-rating
                :increment="1"
                :star-size="18"
                :max-rating="3"
                :read-only="false"
                :rating="expert.resume.management"
                :show-rating="false"
                :inactive-color="'#E3E1E5'"
                :active-color="'#FFA043'"
                :border-color="'rgba(255, 255, 255, 0.1)'"
              />
              Management
            </li>
          </ul>
        </div>
        <div class="expert__right expert-box">
          <h4 class="expert-box__subtitle">MAIL</h4>
          <p class="expert-box__value">{{ expert.email }}</p>
          <h4 class="expert-box__subtitle">ADDRESS</h4>
          <p class="expert-box__value">{{ expert.resume.address }}</p>
          <h4 class="expert-box__subtitle">CV</h4>
          <p class="expert-box__value">
            <CvFile :file="expert.resume.cv" />
          </p>
          <h4 class="expert-box__subtitle">REGISTERED</h4>
          <p class="expert-box__value"></p>
        </div>
      </div>
    </div>
    <div @click="$emit('close')" class="close"></div>
  </section>
</template>

<script>
export default {
  props: {
    expert: {
      type: Object,
      default: () => { }
    },
  },
  components: {
    CvFile: () => ({
      component: import('@/components/common/cv')
    })
  }
}
</script>

<style>
.expert {
  background: rgba(0, 0, 0, 0.8);
}
.expert__content {
  width: 918px;
  max-width: 95%;
}
.expert__header {
  display: flex;
  justify-content: center;
  padding-bottom: 32px;
  border-bottom: 0.5px solid #EBEAED;
}
.expert__avatar {
  width: 80px;
  height: 80px;
  margin: 0 24px 0 0;
}
.expert__name {
  font-size: 28px;
  line-height: 36px;
  margin: 0 0 8px;
}
.expert__profession {
  color: #84818A;
  font-size: 16px;
  line-height: 20px;
  margin: 0 0 8px;
}
.expert__edit {
  width: 147px;
  background-color: var(--blue-color);
  border-radius: 4px;
  height: 32px;
}
.expert__block {
  padding: 32px 0 0;
  align-items: flex-start;
}
.expert__subtitle {
  color: #2E2C34;
  font-size: 20px;
  line-height: 28px;
  margin: 0 0 16px;
}
.expert__skills {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
}
.expert__skill {
  background: #FBFAFC;
  border: 0.5px solid rgba(0, 0, 0, 0.16);
  box-sizing: border-box;
  border-radius: 24px;
  padding: 6px 24px;
  margin: 0 8px 8px 0;
}
.resume-main__list {
  display: flex;
  font-size: 14px;
  line-height: 20px;
}
.resume-main__item {
  margin-right: 40px;
}
.expert-box {
  width: 356px;
  padding: 20px 24px;
  box-sizing: border-box;
  background: #FFFFFF;
  border: 1px solid #E8E7E8;
}
.expert-box__subtitle {
  color: #84818A;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  margin: 0 0 8px;
}
.expert-box__value {
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin: 0 0 24px;
}
</style>
