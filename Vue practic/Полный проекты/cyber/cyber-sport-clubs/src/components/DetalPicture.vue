<template>
  <div class="detail-picture__img">
    <img
      class="detail-picture__imgGlobal"
      src="@/assets/img/imageGloval.png"
      alt=""
    />
    <div class="detail-picture__images">
      <img
        class="detail-picture__imagesLocal"
        src="@/assets/img/images-local.png"
        alt=""
      />
      <img
        class="detail-picture__imagesLocal"
        src="@/assets/img/images-local2.png"
        alt=""
      />
      <img
        class="detail-picture__imagesLocal"
        src="@/assets/img/images-local3.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.detail-picture__img {
  width: 50%;
}
.detail-picture__images {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
}
.detail-picture__imgGlobal {
  width: 90%;
}
.detail-picture__imagesLocal {
  width: 20%;
}
</style>
