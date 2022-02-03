<template>
  <div class="map">
    <div class="container">
      <h1>Kuanyshbek YErgesh</h1>
      <div class="map__title">
        <h2>Сотрудничество с нами обеспечивает:</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus erat
          vestibulum aliquet fringilla a ut etiam tristique. At interdum tellus
          nunc arcu nunc venenatis velit lorem. Urna in bibendum vitae sapien
          lorem eget lectus malesuada aliquet. Sit vulputate eleifend in elit
          egestas vitae. Urna adipiscing mus egestas dolor enim commodo. Leo eu
          nulla dui pharetra, venenatis semper nulla sagittis arcu.
        </p>
      </div>
    </div>
    <div class="maps"><img src="@/assets/img/Cart.png" alt="" /></div>
    <div class="map__socials">
      <div class="socials__tel">
        <p>cybersport-rk@gmail.com</p>
        <a href="tel:+77077778808">+7 (707) 777 88 08</a>
      </div>
      <div class="socials__adress">
        <p>Наш адрес</p>
        <b>ул. Шевченко 90, 108-офис, г. Алматы</b>
      </div>
      <div class="socials__adress">
        <p>Мы в соц. сетях</p>
        <img src="@/assets/img/instagram.png" alt="" />
        <img src="@/assets/img/facebook.png" alt="" />
        <img src="@/assets/img/twitter.png" alt="" />
        <img src="@/assets/img/linkedin.png" alt="" />
        <!-- <i class="fab fa-facebook-f"></i> -->
        <!-- <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-linkedin-in"></i>
        <i class="fab fa-pinterest-square"></i> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.map {
  /* margin-top: 600px; */
  background: #ffffff;
}
.map__title {
  display: flex;
  padding: 30px 0px 10px 0px;
}
.map__title h2 {
  width: 40%;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.326451px;
  color: #1a202c;
}
.map__title p {
  width: 60%;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.16px;
  color: #2d3748;
}
.maps img {
  width: 100%;
}

.map__socials {
  width: 90%;
  margin: 0px auto 1%;
  padding: 15px 0px 40px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  color: #1a202c;
  text-align: start;
}
.socials__tel a {
  color: #1a202c;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
}
.socials__adress p {
  font-size: 14px;
  line-height: 18px;
  color: #718096;
}
.socials__adress img {
  margin-right: 10px;
}
</style>
