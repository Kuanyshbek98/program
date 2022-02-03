<template>
  <div>
    <h1>Api Examples</h1>
    <button @click="axiosGet()">axiosGet</button>

    <div class="img__items">
      <div class="" v-for="(pos, i) in info" :key="i">
        <img class="img__item" :src="pos.thumbnailUrl" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: null,
    };
  },

  methods: {
    async axiosGet () {
      // -----------------GET--------------------------
      // let data = {
      //   "data[2].id": 12,
      // };
      await axios
        .get("http://185.113.134.213/api/v1/student/courses?page=1&limit=10", {
          params: {
            // обьект ішіндегі қайсы элемент нақты керек екенін көрсету үшін осында жазады
            // user_id: data.imagePath, //user_id - базада болуы керек, осының ішіндегі 12-ні ғана алу үшін керек
            // id 8-ге тең болса шығару керек шарты
          },
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xODUuMTEzLjEzNC4yMTNcL2FwaVwvdjFcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjM4NzgyODkxLCJleHAiOjE2MzkxNDI4OTEsIm5iZiI6MTYzODc4Mjg5MSwianRpIjoiRTBlcjkzalZWbDRBamd6RCIsInN1YiI6MjYsInBydiI6IjljNDI5ZTZhNjBjZDUyODU0NzNmMmM4YmM3MDFlYzA5NDhkZjRkOGMifQ.zgPbJS-VKULnwWCHAUU_-XZm_vDUcGGMH7pz98EXztc",
            // get-те headers блогы болмайды, өйткені get-данный алу үшін қолданылады, headers данный жіберетін кезде қолданылады, қодтарды ашу, token-ге доступ алу үшін
          },
        })
        .then((response) => (this.info = response))
        .catch((error) => {
          console.log("-->" + error);
          //this.errored = true; //-переменный өзгертуге болады
        })
        .finally(() => {
          console.log("--> finally");
          //this.loading = false;
        });
      console.log(this.info);
    },
  },
};
</script>

<style scoped>
.img__items {
  margin: 20px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 15px;
  grid-column-gap: 15px;
}
.img__item {
  border: 1px solid;
  width: 100%;
}
</style>
