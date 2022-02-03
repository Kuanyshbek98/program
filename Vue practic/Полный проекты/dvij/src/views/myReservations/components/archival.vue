<template>
  <div class="archival">
    <div class="archival__block">
      <h3 class="archival__title">0 мероприятий</h3>
      <p class="archival__text">
        Бронируйте меропрития и проводите свои лучшие время с нами.
      </p>
      <button class="my-reservations__btn archival__btn">
        Забронировать
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.archival__block {
  padding: 24px 31px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
}
.archival__title {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  color: #000000;
}
.archival__text {
  margin: 24px 0;

  font-family: Montserrat;
  font-size: 18px;
  line-height: 22px;
  color: #898989;
}
.my-reservations__btn {
  width: 100%;
  margin-top: 60px;
  background: #ffffff;
  border: 1px solid #1fcc79;
  box-sizing: border-box;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-size: 14px;
  text-align: center;
  color: #1fcc79;
}
</style>
