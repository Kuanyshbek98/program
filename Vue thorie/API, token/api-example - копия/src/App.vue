<template>
  <div id="app">
    <h1>Api Examples</h1>
    <router-view />
    <router-link to="/search">Search-Img</router-link> ||
    <button @click="fetchApi()">fetch</button> ||
    <button @click="apiExampleParams()">apiExampleParams</button>||
    <button @click="Token()">Token</button>
    <hr />
    <div class="img__items">
      <div class="" v-for="(pos, i) in obj.data" :key="i">
        <img class="img__item" :src="pos.url" />
      </div>
    </div>
    <hr />
    <AxiosGet />
    <hr />
    <AxiosPost />
  </div>
</template>

<script>
// import axios from "axios"
import AxiosGet from "@/components/AxiosGet.vue";
import AxiosPost from "@/components/AxiosPost.vue";
export default {
  data() {
    return {
      info: null,
      items: [{ userId: 3 }, { _limit: 10 }],
      obj: {
        data: [
          {
            id: 1,
            url:
              "https://sinkvein.ru/wp-content/uploads/2018/11/%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0.jpg",
          },
          {
            id: 2,
            url: "https://klike.net/uploads/posts/2019-01/1547365376_1.jpg",
          },
          {
            id: 3,
            url:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqb5o3Eau2nKnLdUbbQs5rM6ZJ5x5VFAWzrw&usqp=CAU",
          },
          {
            id: 4,
            url:
              "https://sinkvein.ru/wp-content/uploads/2018/11/%D0%BC%D0%B8%D1%80.jpg",
          },
          {
            id: 5,
            url:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-wl-dQprdHCRDUSIWROQLoC4WemrX1WsuJA&usqp=CAU",
          },
          {
            id: 6,
            url:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIyS0W-dIMn4zDcGu1N7O8be6wPNekbDlAg&usqp=CAU",
          },
        ],
      },
    };
  },
  methods: {
    async fetchApi() {
      // const res = await fetch(
      //   "https://jsonplaceholder.typicode.com/posts?_limit=3",
      //   {
      //     method: "GET",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     params: {
      //       // обьект ішіндегі қайсы элемент нақты керек екенін көрсету үшін осында жазады
      //       // user_key_id: this.$store.state.localStorage.userKeyId,
      //     },
      //     credentials: "include",
      //     body: null // GET- запроста body жазу дұрыс емес
      //   }
      // );

      // PUT delete

      // try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=3",
        // "https://jsonplaceholder.typicode.com/photos?_limit=6",
        {
          method: "POST", //GET
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            // обьект ішіндегі қайсы элемент нақты керек екенін көрсету үшін осында жазады
            // user_key_id: this.$store.state.localStorage.userKeyId,
          },
          credentials: "include",
          // body: formData,
          body: JSON.stringify({
            email: "this.form.email",
            password: "this.form.password",
            //  login:  1232,
            //  image: "@/assets/img/club.png",
          }),
        }
      );

      //   if (res.status === 200 || res.status === 201) {
      //       localStorage.setItem("user".JSON.stringify(data));
      //     const data = await res.json();
      //     console.log(data);
      //   } else {
      //       // this.errors = data;
      //       // console.log("error");
      //   }
      // }
      // catch (error) {
      //   console.error(error);
      // }

      console.log(res);
      const data = await res.json();
      console.log(data);
    },
    async apiExampleParams() {
      // -----------------GET--------------------------
      // let n = 0;
      const questions = {};
      for (let i = 0; i < 5; i++) {
        questions[`questions[${i}]question`] = "what is the world?";
        questions[`questions[${i}][options][${i}][option]`] = "option";
      }

      // const userId = {
      //   userId: 3,
      //   _limit: 10,
      // };

      // let formData = new FormData();

      //  // lessonId:2
      //  // questions[0][question]:what is the world?
      //  // questions[0][options][0][option]:option
      //  // questions[0][options][0][isCorrect]:0

      await this.$api
        // .get("/posts", {
        .get("/api/v1/student/books", {
          // params: {
          //   userId: 3,
          //   _limit: 10,
          // },
          // params: questions,
          headers: {
            "Content-Type": "application/json",
          },
          // credentials: "include",
        })
        .then((response) => console.log(response.data))
        .catch((error) => {
          console.log("-->" + error);
        })
        .finally(() => {
          console.log("--> finally");
        });
    },
    async Token() {
      let formDatas = new FormData();
      formDatas.append("files ", "Элгфтныр");
      formDatas.append("files1 ", "Элгфтнырe");
      console.log(Array.from(formDatas));

      for (let key of formDatas) {
        console.log(key);
      }
      await this.$api
        .post("/user/login", {
          email: this.email,
          password: this.password, // login, parol - енгізіп api-ге доступ алады, сосын api әр сұрағанда әрүрлі token жібереді
        })
        .then((response) => {
          Cookies.set("clagme-tk", response.data.data.token); // сосын ол token- ді Cookies-қа сақтап қоямыз
        });
      // кейін оны Глобалный $api файлға орнатып қою керек, әр $api запроста қайта қайта жазбас үшін
    },
  },
  components: {
    AxiosGet,
    AxiosPost,
  },
};
</script>

<style scoped>
.img__items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-template-columns: repeat(3, 250px); */
  /* grid-template-rows: repeat(6, 80px); */
  /* background-color: rgb(255, 255, 227); */
  grid-row-gap: 15px;
  grid-column-gap: 15px;
}
.img__item {
  border: 1px solid;
  width: 100%;
}
</style>
