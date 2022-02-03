<template>
  <div>
    <ul class="profile-edit__items">
      <li class="profile-edit__item profile-edit_top flex">
        <p class="profile-edit__text">День рождения:</p>
        <label v-show="!profileChange" for="" class="profile-edit__info">
          14 Ноября 1999
        </label>
        <input class="profile-edit__info" v-show="profileChange" type="date" />
      </li>
      <li class="profile-edit__item flex">
        <p class="profile-edit__text">Пол:</p>
        <label for="" class="profile-edit__info flex">
          <button
            @click="profileChange ? (floorChange = true) : ''"
            :class="{ 'profile-edit__floor-change': floorChange }"
            class="profile-edit__btn profile-edit__female"
          >
            Женский
          </button>
          <button
            @click="profileChange ? (floorChange = false) : ''"
            :class="{ 'profile-edit__floor-change': !floorChange }"
            class="profile-edit__btn profile-edit__male"
          >
            Мужской
          </button>
        </label>
      </li>
      <li class="profile-edit__item flex">
        <p class="profile-edit__text">Номер телефона:</p>
        <label v-show="!profileChange" for="" class="profile-edit__info">
          +7 (775) 345 4523
        </label>
        <input
          class="profile-edit__info"
          v-show="profileChange"
          type="number"
          placeholder="+7 (775) 345 4523"
        />
      </li>
      <li class="profile-edit__item flex">
        <p class="profile-edit__text">Email:</p>
        <label v-show="!profileChange" for="" class="profile-edit__info">
          konayev.d@gmail.com
        </label>
        <input
          class="profile-edit__info"
          v-show="profileChange"
          type="email"
          placeholder="Example@gmail.com"
        />
      </li>
    </ul> 
  </div>
</template>

<script>
export default {
  props: ["profileChange"],
  data() {
    return {
      floorChange: true,
      changeSave: false,
    };
  },
};
</script>

<style scoped>
.profile-edit__items {
  margin-top: 30px;
}
.profile-edit__item {
  padding: 8px 24px;
  width: 97%;
  margin-left: -5%;
  border-bottom: 1px solid #d6d6d6;

  font-size: 15px;
  line-height: 18px;
  color: #000000;
}
.profile-edit__item:hover {
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
}
.profile-edit_top {
  border-top: 1px solid #d6d6d6;
}

.profile-edit__info {
  width: auto;
  font-size: 14px;
  line-height: 17px;

  text-align: end;
  color: #1fcc79;
}
.profile-edit__btn {
  padding: 6px 15px;
  height: auto;
  background-color: #fff;
  border: 1px solid #1fcc79;
  color: #1fcc79;
  font-size: 10px;
  line-height: 12px;
}
.profile-edit__floor-change {
  background-color: #1fcc79;
  color: #fff;
}
.profile-edit__female {
  border-radius: 7px 0 0 7px;
}
.profile-edit__male {
  border-radius: 0 7px 7px 0;
}
</style>
