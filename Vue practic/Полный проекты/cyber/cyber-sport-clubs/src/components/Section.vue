<template>
  <div class="section">
    <!-- <div class="container"> -->
    <div class="section__layout">
      <div class="section__title"><h1>Новости</h1></div>

      <div class="section__wrapper">
        <div class="section__inner">
          <img
            class="section__inner_img"
            src="@/assets/img/section__inner_img.png"
            alt=""
          />
          <h3>Анонс FIFA 2022 в Алмате</h3>
          <p>
            В Алматы собираются презентовать свежую игру FIFA 2022 в предверии
            игр EURO 2020. Об этом обьявил президент федерации футбола РК Джон
            Доу
          </p>
          <div class="section__data">
            <img src="@/assets/img/section__inner.png" alt="" />
            <p>
              12 марта 2021
            </p>
          </div>
        </div>
        <div class="section__inner">
          <img
            class="section__inner_img"
            src="@/assets/img/section__inner_img.png"
            alt=""
          />
          <h3>Анонс FIFA 2022 в Алмате</h3>
          <p>
            В Алматы собираются презентовать свежую игру FIFA 2022 в предверии
            игр EURO 2020. Об этом обьявил президент федерации футбола РК Джон
            Доу
          </p>
          <div class="section__data">
            <img src="@/assets/img/section__inner.png" alt="" />
            <p>
              12 марта 2021
            </p>
          </div>
        </div>
        <div class="section__inner">
          <img
            class="section__inner_img"
            src="@/assets/img/section__inner_img.png"
            alt=""
          />
          <h3>Анонс FIFA 2022 в Алмате</h3>
          <p>
            В Алматы собираются презентовать свежую игру FIFA 2022 в предверии
            игр EURO 2020. Об этом обьявил президент федерации футбола РК Джон
            Доу
          </p>
          <div class="section__data">
            <img src="@/assets/img/section__inner.png" alt="" />
            <p>
              12 марта 2021
            </p>
          </div>
        </div>
        <div class="section__inner">
          <img
            class="section__inner_img"
            src="@/assets/img/section__inner_img.png"
            alt=""
          />
          <h3>Анонс FIFA 2022 в Алмате</h3>
          <p>
            В Алматы собираются презентовать свежую игру FIFA 2022 в предверии
            игр EURO 2020. Об этом обьявил президент федерации футбола РК Джон
            Доу
          </p>
          <div class="section__data">
            <img src="@/assets/img/section__inner.png" alt="" />
            <p>
              12 марта 2021
            </p>
          </div>
        </div>
        <div class="section__inner">
          <img
            class="section__inner_img"
            src="@/assets/img/section__inner_img.png"
            alt=""
          />
          <h3>Анонс FIFA 2022 в Алмате</h3>
          <p>
            В Алматы собираются презентовать свежую игру FIFA 2022 в предверии
            игр EURO 2020. Об этом обьявил президент федерации футбола РК Джон
            Доу
          </p>
          <div class="section__data">
            <img src="@/assets/img/section__inner.png" alt="" />
            <p>
              12 марта 2021
            </p>
          </div>
        </div>
        <div class="section__inner">
          <img
            class="section__inner_img"
            src="@/assets/img/section__inner_img.png"
            alt=""
          />
          <h3>Анонс FIFA 2022 в Алмате</h3>
          <p>
            В Алматы собираются презентовать свежую игру FIFA 2022 в предверии
            игр EURO 2020. Об этом обьявил президент федерации футбола РК Джон
            Доу
          </p>
          <div class="section__data">
            <img src="@/assets/img/section__inner.png" alt="" />
            <p>
              12 марта 2021
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<style scoped>
.section {
  width: 100%;
  /* height: 600px; */
  margin-top: 10px;
  background-color: #f7f7f7;
}

.section__layout {
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
}
.section__title {
  border-bottom: 0.55px solid #707070;
  padding-bottom: 1%;
}
.section__wrapper {
  width: 100%;
  /* height: 500px; */
  margin-top: 3%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: repeat(3, 1fr); */
  grid-gap: 20px;
}
.section__inner {
  padding: 10px 20px 20px;

  background: #ffffff;
  border: 0.33px solid rgba(26, 32, 44, 0.12);
  border-radius: 12px;
}
p {
  color: #4a5568;
}
.section__inner_img {
  width: 100%;
  border-radius: 12px;
}
.section__data {
  display: flex;
  align-items: center;
}
.section__data p {
  margin-left: 2%;
}
</style>
