<template>
  <div id="app">
    <header>
      <router-link to="/"
        ><img src="@/assets/img/logo.png" alt=""
      /></router-link>
      <ul>
        <li><a href="#">Турниры</a></li>
        <li><a href="#">Бронировать комп. клубы</a></li>
        <li><a href="">Интернет магазин</a></li>
      </ul>
      <ul>
        <li class="link">
          <input class="input" type="text" placeholder="Искать турниры" />
        </li>
        <li class="link"><button>Вход</button></li>
        <li class="link"><button class="btn">Регистрация</button></li>
      </ul>
    </header>
  </div>
</template>
<script>
export default {
  name: "headers",
  data() {
    return {};
  },
};
</script>
<style scoped>
header {
  /* background-color: blueviolet; */
  width: 100%;
  height: 80px;
  border: 0.5px solid rgba(26, 32, 44, 0.12);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  color: #4a5568;
  box-sizing: border-box;
}
ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
}
li {
  margin: 0px 25px;
}
.link {
  margin-left: 5px;
}
input {
  padding: 0px 12px;

  width: 244px;
  height: 44px;
  background: #edf2f7;
  border: 0.33px solid rgba(26, 32, 44, 0.2);
  border-radius: 12px;
  margin-bottom: 8px;
}

button {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 16px;

  width: 66px;
  height: 34px;

  background: #ffffff;

  border: 0.5px solid rgba(26, 32, 44, 0.2);
  box-sizing: border-box;
  border-radius: 12px;
}
.btn {
  width: 119px;
  height: 34px;
  text-align: center;
  color: #ffffff;
  background: #4c6fff;
  border-radius: 12px;
  padding: 8px 16px;
}
</style>
