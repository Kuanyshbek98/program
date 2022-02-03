<template>
  <div class="page">
    <!-- <div class="container"> -->
    <div class="page__layout">
      <h1>Турниры</h1>
      <div class="page__wrapper">
        <ul>
          <li><a href="">Рекомендуемые</a></li>
          <li><a href="">Прошедшие</a></li>
          <li><a href="">Регистрация</a></li>
        </ul>
        <select class="main-select" name="" id="">
          <option value="">Самые свежие</option>
          <option value="">Самые свежие</option>
          <option value="">Самые свежие</option>
        </select>
      </div>
    </div>
    <div class="page__box">
      <div class="box">
        <div v-for="pos in post" :key="pos.id" class="inner">
          <div class="row">
            <div class="col">
              <img class="col__img" :src="pos.img" />
              <h3 class="col__title">
                <router-link to="/clubs">{{ pos.title }}</router-link> 
                <!--  /register">Register </router-link> -->
                <!-- <router-link to="/register">{{ pos.title }}</router-link> -->
              </h3>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <img
                class="col__imges"
                src="@/assets/img/participants.png"
                alt=""
              />
              <h4 class="col__title">+24 участников</h4>
            </div>
            <div class="col">
              <img
                class="col__img_vuz"
                src="@/assets/img/satbaev.png"
                alt=""
              />
              <h4 class="col__title">Генеральный спонсор</h4>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <img class="col__img_data" src="@/assets/img/icon-data.png" alt="" />
              <p>12 марта 2021, Завершен</p>
            </div>
            <div class="col">
              <img class="col__img_price" src="@/assets/img/icon-rating.png" alt="" />
              <p>300 000 ₸</p>
            </div>
          </div>
          <button class="row__btn">Подать заявку</button>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: [
        {
          id: 1,
          title: "Fifa Alaman Baige 2021",
          img:
            "https://images.unsplash.com/photo-1628026552212-12829804437e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80",
        },
        {
          id: 2,
          title: "Dota 2 Almaty Tournament 2021",
          img:
            "https://images.unsplash.com/photo-1628026552212-12829804437e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80",
        },
        {
          id: 3,
          title: "PUBG MOBILE Almaty Tournament 2021",
          img:
            "https://images.unsplash.com/photo-1628026552212-12829804437e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80",
        },
        {
          id: 4,
          title: "Fifa Alaman Baige 2021",
          img:
            "https://images.unsplash.com/photo-1628026552212-12829804437e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80",
        },
        {
          id: 5,
          title: "Fifa Alaman Baige 2021",
          img:
            "https://images.unsplash.com/photo-1628026552212-12829804437e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80",
        },
        {
          id: 6,
          title: "Fifa Alaman Baige 2021",
          img:
            "https://images.unsplash.com/photo-1628026552212-12829804437e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80",
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.38px;
  color: #1a202c;
}
.page__layout {
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  border-bottom: 0.55px solid #cbd5e0;
  padding-bottom: 20px;
}
.page__wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.page__wrapper ul {
  display: flex;
}
.page__wrapper li {
  margin-right: 28px;
  width: 121px;

  padding: 8px 2px;
  border-radius: 12px;
  text-align: center;
  background-color: #fff;
}
.page__wrapper li:hover {
  color: #fff;
  background-color: #1a202c;
}
/*--------------------------------------------*/
.page__box {
  margin-top: 30px;
  /* height: 600px; */
}
.box {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-rows: repeat(2, 1fr); */
  grid-gap: 20px;
}
.inner {
  /* width: 100%; */
  background-color: rgb(168, 191, 192);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 12px;

  background: #ffffff;
  border: 0.33px solid rgba(26, 32, 44, 0.12);
  box-sizing: border-box;
  border-radius: 12px;

  font-family: Jost;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;

  letter-spacing: 0.16px;
  color: #1a202c;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
.col {
  display: flex;
  align-items: center;
  padding: 5px;
  margin-right: 20px;
}
.col h4 {
  font-weight: normal;
  font-size: 15px;
  line-height: 16px;
  color: #4a5568;
}
.col h3 {
  margin-left: 16px;
}
.col p {
  color: #4a5568;
}
.col__title {
  margin: 0px 5px;
}
.col__img {
  border-radius: 30px;
  width: 50px;
  height: 50px;
}
.col__img_vuz {
  margin: 0px 10px 0px 0px;
  /* width: 90px; */
}
.col__img_data {
  margin-right: 5px;
  color: #718096;
}
.col__img_price {
  margin-left: 10px;
}
.row__btn {
  padding: 8px 16px;
  margin-left: 10px;

  width: 140px;
  height: 34px;
  background: #ffffff;
  border: 1px solid rgba(26, 32, 44, 0.2);
  box-sizing: border-box;
  border-radius: 12px;
  line-height: 18px;
  font-weight: 600;
  font-size: 14px;
  color: #1a202c;
}
</style>
