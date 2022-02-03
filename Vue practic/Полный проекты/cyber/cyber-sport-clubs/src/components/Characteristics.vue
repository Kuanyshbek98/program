<template>
  <div class="characteristics">
    <h2 class="characteristics__title">Характеристики</h2>
    <div class="characteristics__info">
      <ul class="characteristics__items">
        <li class="characteristics__item item-content">
          <p class="item-content__text">
            Бренд
          </p>
          <strong class="item-content__desc">Sony Alpha 7 Mark II</strong>
        </li>
        <li class="characteristics__item item-content ">
          <p class="item-content__text">
            Resolution
          </p>
          <strong class="item-content__desc">
            42MP Full-Frame Exmor R BSI CMOS Sensor
          </strong>
        </li>
        <li class="characteristics__item item-content">
          <p class="item-content__text">
            Video
          </p>
          <strong class="item-content__desc"
            >UHD 4K30p Video with HLG S-Log3 Gammas
          </strong>
        </li>
        <li class="characteristics__item item-content">
          <p class="item-content__text">
            Connectivity
          </p>
          <strong class="item-content__desc"
            >Built-In Wi-Fi/Bluetooth, Dual SD Slots
          </strong>
        </li>
      </ul>
    </div>
    <div class="characteristics__excerpt ">
      <select
        class="characteristics__dropdown dropdown-option select "
        name=""
        id=""
      >
        <option class="dropdown-option__active" value="">
          Больше характеристик</option
        >
      </select>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.characteristics {
  padding: 16px 16px 25px 16px;
  background: #ffffff;
  border: 0.33px solid rgba(26, 32, 44, 0.12);
  box-sizing: border-box;
  border-radius: 12px;
  /* margin-bottom: 140px; */

  font-family: Exo 2;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  color: #1a202c;
}
.item-content__text {
  font-family: Jost;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 0.16px;
  color: #718096;
}
.characteristics__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.characteristics__excerpt {
  text-align: center;
}
.characteristics__dropdown {
  color: #4c6fff;
  font-family: Jost;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.16px;
}
</style>
