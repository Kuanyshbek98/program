<template>
  <section v-if="company" class="modal company">
    <div class="modal-content company__content">
      <div class="company__header">
        <div class="company__avatar avatar" :style="{backgroundImage: `url(${$image + 'image/' + company.image})`}"></div>
        <div class="company__header-main">
          <h2 class="company__name">{{ company.company_name }}</h2>
          <p class="company__address">{{ company.city }}, Kz</p>
          <button @click="$emit('edit')" class="company__edit main-btn">Edit the company</button>
        </div>
      </div>
      <div class="company__block">
        <div class="company-box">
          <h4 class="company-box__subtitle">OUR CONTACTS</h4>
          <p class="company-box__value">{{ company.email }}</p>
          <h4 class="company-box__subtitle">HEAD OFFICE</h4>
          <p class="company-box__value">{{ company.company_address }}</p>
          <h4 class="company-box__subtitle">WEBSITE</h4>
          <p class="company-box__value">{{ company.site }}</p>
          <h4 class="company-box__subtitle">REGISTERED</h4>
          <p class="company-box__value"></p>
        </div>
      </div>
    </div>
    <div @click="$emit('close')" class="close"></div>
  </section>
</template>

<script>
export default {
  props: {
    company: {
      type: Object,
      default: () => { }
    },
  },
  components: {
  }
}
</script>

<style>
.company {
  background: rgba(0, 0, 0, 0.8);
}
.company__content {
  width: 918px;
  max-width: 95%;
}
.company__header {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 32px;
  border-bottom: 0.5px solid #EBEAED;
  text-align: center;
}
.company__avatar {
  width: 80px;
  height: 80px;
  margin: 0;
}
.company__name {
  font-size: 28px;
  line-height: 36px;
  margin: 0 0 8px;
}
.company__address {
  color: #84818A;
  font-size: 16px;
  line-height: 20px;
  margin: 0 0 8px;
}
.company__edit {
  width: 180px;
  background-color: var(--blue-color);
  border-radius: 4px;
  height: 32px;
}
.company__block {
  padding: 32px 0 0;
  align-items: flex-start;
  justify-content: center;
}
.company-box {
  margin: auto;
  width: 356px;
  padding: 20px 24px;
  box-sizing: border-box;
  background: #FFFFFF;
  border: 1px solid #E8E7E8;
}
.company-box__subtitle {
  color: #84818A;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  margin: 0 0 8px;
}
.company-box__value {
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin: 0 0 24px;
}
</style>
