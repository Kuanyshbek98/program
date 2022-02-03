<template>
  <div class="club">
    <div v-for="(pos, i) in Serch" :key="i">
      <!-- <img class="img" src="@/assets/img/club.png" alt="" />  -->
      <img class="img" :src="'http://37.46.133.192:8094/' + pos.image" alt="" />
      <div class="row__title">
        <!-- {{ pos.image  }}  -->
        <div class="title__block">
          <img src="@/assets/img/club-avatar.png" alt="" />
          <div class="title__box">
            <router-link to="/club">
              <h4 class="margin-title">{{ pos.name }}</h4>
            </router-link>
            <div class="title__box_style">
              <img src="@/assets/img/frames.png" alt="" />
              <p class="margin-title">Байтурсынова 183</p>
            </div>
          </div>
        </div>
        <div class="title__img">
          <img src="@/assets/img/frame.png" alt="" />
          <div class="title__img_box">
            <h4 class="margin-title">4.9</h4>
            <img src="@/assets/img/rating.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["Serch"],
  data() {
    return { 
    };
  }, 
};
</script>

<style scoped>
.club {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: repeat(3, 1fr); */
  grid-gap: 30px;
  padding: 5px;
}
.img {
  width: 100%;
}
.row__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}
.title__block {
  display: flex;
  align-items: center;
}
.title__box {
  margin-left: 10px;
  font-size: 18px;
}
.title__box_style {
  display: flex;
  align-items: center;
  color: #718096;
  font-size: 12px;
}
.title__img_box {
  display: flex;
  align-items: center;
}
.title__img_box h4 {
  margin-right: 5px;
}
</style>
