<template>
  <div class="form-block">
    <form action="" @submit.prevent="formSubmit">
      <h2 class="form-block__title">Написать отзыв</h2>
      <div class="form-block__items">
        <img src="@/assets/img/Vector.png" alt="" /><input
          class="input"
          :class="{ inputt: form.name === '' && this.btnboolean }"
          type="number"
          min="11"
          placeholder="Имя Фамилия"
          v-model.trim="form.name"
        />
      </div>
      <div class="form-block__items">
        <img src="@/assets/img/Vector1.png" alt="" /><input
          class="input"
          :class="{ inputt: form.email === '' && this.btnboolean }"
          type="email"
          placeholder="Почта"
          v-model.trim="form.email"
        />
      </div>
      <p>Выберите оценку</p>
      <div class="form-block__items">
        <img src="@/assets/img/Vector2.png" alt="" />
        <textarea
          :class="{ inputt: form.massage === '' && this.btnboolean }"
          name=""
          cols="30"
          rows="5"
          maxlength="10" minlength="5"
          placeholder="Ваш отзыв"
          class="input"
          v-model.trim="form.massage"
        >
        </textarea>
      </div>
      <button type="submit" class="button">
        Отправить
      </button>

      <div :class="{ errrorForm: isActive }">
        <strong>{{ error }}</strong>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "formblock",
  data() {
    return {
      error: "",
      isActive: false,
      booleanButton: true,
      btnboolean: false,
      form: {
        name: "",
        email: "",
        massage: "",
      },
      isActiv: {
        name: false,
        email: false,
        massage: false,
      },
    };
  },
  methods: {
    async formSubmit() {
      this.btnboolean = true;
      if (
        this.form.name != "" &&
        this.form.email != "" &&
        this.form.massage != ""
      ) {
        let formData = new FormData();
        formData.append("name", this.form.name);
        formData.append("email", this.form.email);
        // formData.append("massage", this.form.massage);
        axios
          .post("http://185.111.106.28/api/v1/user/login", formData, {
            headers: {
              Token: "LLF0yK2Ixk2gME76s31MNPFpuIr0X7",
            },
          })
          .then((resp) => {
            this.imagePath = resp.data.path;
            // console.log(resp);
          })
          .catch((error) => {
            console.log(error.response);
            console.log(error.response.data);
            this.error = error.response.data;
            this.isActive = true;
            setTimeout(() => (this.isActive = false), 2000);
          });

        // try {
        //   const res = await fetch("http://185.111.106.28/api/v1/user/get_by_id", {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //       Token: "LLF0yK2Ixk2gME76s31MNPFpuIr0X7",
        //     },
        //     credentials: "include",
        //     // body: formData,
        //     body: JSON.stringify({
        //       name: this.form.name,
        //       email: this.form.email,
        //       // massage: this.form.massage,
        //     }),
        //   });
        //   const data = await res.json();
        //   // console.log(data.name);
        //   if (data.name === "" || data.email === "" || data.massage === "") {
        //     console.log("error");
        //   } else {
        //     console.log(data);
        //   }
        // } catch (error) {
        //   this.FormError();
        //   // console.error(error.response);
        // }
      } else {
        console.log("errror");
        // this.Inputboolean();
      }
    },
    FormError() {
      console.log("kuan");
    },
  },
};
</script>

<style scoped>
.form-block {
  padding: 10px 10px 20px;
  height: auto;
  background-color: #ffffff;
}
.form-block p {
  margin: 10px 10px;
}
.form-block__items {
  position: relative;
}
.form-block__items img {
  position: absolute;
  left: 20px;
  top: 21px;
}
.inputt {
  border: 2px solid red;
}
form {
  position: relative;
}
.errrorForm {
  width: 200px;
  height: 50px;
  background-color: red;
  color: #ffffff;
  position: absolute;
  right: 10%;
  bottom: 80%;
  font-size: 1.5rem;
}
</style>
