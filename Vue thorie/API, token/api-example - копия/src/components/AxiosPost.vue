<template>
  <div>
    <h1>Api Examples</h1>
    <button @click="axiosPost()">axiosPost</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    async axiosPost() {
      // -----------------POST--------------------------
      let formData = new FormData();
      // formData.append('files[]', file, file.name)
      formData.append("courseName", "courses");
      formData.append("description", "descriptions");
      formData.append("price", 532);
      formData.append("discountPrice", 332);
      formData.append("promoPath", "sfffafa");
      formData.append("courseParams[0]", "first parameters");
      formData.append("courseParams[1]", "second parameters");
      formData.append("subject", "eeeeeeeeeeeeeeeee");
      // formData.append("password", "kuanysh_bek_98"); // cat_id  - базада болуы керек, сол нәрсені өзгерту үшін,немесе бұйрық беру үшін керек
      //     for (let i = 0; i < 10; i++) {
      //       formData.append(example_arr[${i}], 'Франция')
      //     }
      await axios
        .post("http://185.113.134.213/api/v1/teacher/create-course", formData, {
          params: {
            //   // обьект ішіндегі қайсы элемент нақты керек екенін көрсету үшін осында жазады
            //   // user_key_id: this.$store.state.localStorage.userKeyId,
          },
          headers: {
            // доступ алу үшін, сен екеніңді білуі үшін
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xODUuMTEzLjEzNC4yMTNcL2FwaVwvdjFcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjM4Nzg4NjA3LCJleHAiOjE2MzkxNDg2MDcsIm5iZiI6MTYzODc4ODYwNywianRpIjoiQ3dkTjI1YnRmeGVyNEREZyIsInN1YiI6MzYsInBydiI6ImIyN2JlZTIzYmFmNTQyOWY1YjlhMjE2OTZmZGUwM2MyNzcwNDRlYTUifQ.x3znvWzRL0hC1CWMkoI3VwAs0wuRBievkfyvNqORiq8",
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log("-->" + error));
      // ----------------- --------------------------
    },
  },
};
</script>

<style scoped></style>
