<template>
  <div class="club__wrapper">
    <input type="text" v-model="productSpect" />
    <input
      type="file"
      @change="uploadImage"
      name="image"
      id="image"
      accept="image/*"
    /> 
    <!-- accept - сурет кез келген форматта орнату -->
    <button type="submit" @click.prevent="submit">Submit</button>
    <hr />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      arr: [],
      imagePath: "",
      productSpect: "",
    };
  },
  methods: {
    uploadImage(e) {
      // console.log(e);
      let img = e.target.files[0];
      let fd = new FormData();
      // formData.append('files[]', file, file.name)
      fd.append("image", img);

      axios
        .post("http://185.111.106.28/api/v1/user/edit", fd, {
          // .get("http://185.111.106.28/api/v1/user/edit", { fd,
          headers: {
            // "Content-Type": "application/json",
            Token: "LLF0yK2Ixk2gME76s31MNPFpuIr0X7",
          },
        })
        .then((resp) => {
          this.imagePath = resp.data.path; 
        })
        .catch((error) => console.log(error.response));

      // const instance = axios.create({
      //   baseURL: "http://185.111.106.28/api/",
      //   fd,
      //   timeout: 1000,
      //   headers: { Authorization: "Bearer " + LLF0yK2Ixk2gME76s31MNPFpuIr0X7 },
      // });

      // instance
      //   .get("/v1/user/get_by_id")
      //   .then((response) => {
      //     return response.data;
      //   });
    },
    submit() {
      let data = {
        imagePath: this.imagePath,
        productSpect: this.productSpect,
      };
      axios.post("http://185.111.106.28/api/v1/user/edit", data, {
        headers: {
          // "Content-Type": "application/json",
          Token: "LLF0yK2Ixk2gME76s31MNPFpuIr0X7",
        },
      });
    },
  },
};
</script>

<style scoped>
.club__wrapper_select {
  margin-left: 10px;
}
.clubs__grid {
  margin-top: 40px;
  padding: 20px 0px;
  border-top: 2px solid #5e5d5d;
}
</style>
