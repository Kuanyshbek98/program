<template>
  <div id="app">
    <h1>Api Examples</h1>
    <router-view />
    <router-link to="/search">Search-Img</router-link> ||
    <button @click="fetchApi()">fetch</button> ||
    <button @click="axiosApi()">axios</button>||
    <button @click="apiExampleParams()">Exaplle</button>||
    <button @click="Token()">Token</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: null,
      items: [{ userId: 3 }, { _limit: 10 }],
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
    async axiosApi() {
      // -----------------GET--------------------------
      let data = {
        imagePath: 12,
        productSpect: "example text",
      };
      await axios
        .get("https://jsonplaceholder.typicode.com/poss?_limit=3", {
          params: {
            // обьект ішіндегі қайсы элемент нақты керек екенін көрсету үшін осында жазады
            user_id: data.imagePath, //user_id - базада болуы керек, осының ішіндегі 12-ні ғана алу үшін керек
          },
          headers: {
            // "Content-Type": "application/json",
            // Token: "LLF0yK2Ixk2gME76s31MNPFpuIr0X7",
          },
        })
        .then((response) => (this.info = response.data))
        .catch((error) => {
          console.log("-->" + error);
          //this.errored = true; //-переменный өзгертуге болады
        })
        .finally(() => {
          console.log("--> finally");
          //this.loading = false;
        });
      console.log(this.info);
      // -----------------POST--------------------------
      // let formData = new FormData();
      // // formData.append('files[]', file, file.name)
      // formData.append("cad_id", "data.imagePath"); // cat_id  - базада болуы керек, сол нәрсені өзгерту үшін,немесе бұйрық беру үшін керек
      // //     for (let i = 0; i < 10; i++) {
      // //       formData.append(example_arr[${i}], 'Франция')
      // //     }
      // await axios
      //   .post("https://jsonplaceholder.typicode.com/posts?_limit=3", formData, {
      //     // params: {
      //     //   // обьект ішіндегі қайсы элемент нақты керек екенін көрсету үшін осында жазады
      //     //   // user_key_id: this.$store.state.localStorage.userKeyId,
      //     // },
      //     headers: {
      //       // доступ алу үшін, сен екеніңді білуі үшін
      //       "Content-Type": "application/json",
      //       // Token: "LLF0yK2Ixk2gME76s31MNPFpuIr0X7",
      //     },
      //   })
      //   .then((response) => {
      //     console.log(response.data);
      //   })
      //   .catch((error) => console.log("-->" + error));
      // ----------------- --------------------------
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
        .post("https://jsonplaceholder.typicode.com/posts?", questions, {
          params: {
            userId: 3,
            _limit: 10,
          },
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
      // await this.$api
      //   .post("/user/login", {
      //     email: this.email,
      //     password: this.password, // login, parol - енгізіп api-ге доступ алады, сосын api әр сұрағанда әрүрлі token жібереді
      //   })
      //   .then((response) => {
      //     Cookies.set("clagme-tk", response.data.data.token); // сосын ол token- ді Cookies-қа сақтап қоямыз
      //   });
      //кейін оны Глобалный $api файлға орнатып қою керек, әр $api запроста қайта қайта жазбас үшін
    },
  },
};
</script>

<style scoped></style>


