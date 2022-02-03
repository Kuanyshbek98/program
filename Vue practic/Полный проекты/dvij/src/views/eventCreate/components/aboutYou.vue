<template>
  <div class="about-you">
    <h1 class="event-create__title">О вас</h1>
    <h2 class="event-create__subtitle">Полное имя</h2>
    <input type="text" class="main-input" placeholder="Айбек Нуртазаев" />
    <h2 class="about-you__subtitle event-create__subtitle">Фото в Профиле</h2>
    <profile />
    <a href="" class="more">Обновить фото</a>
    <h2 class="about-you__subtitle event-create__subtitle">Ваша история</h2>
    <p class="event-create__subtext">
      Какие уникальные навыки вы применяете? Расскажите, почему любите свое дело
      и что о нем знаете.
    </p>
    <textarea
      class="main-textarea "
      placeholder="Какое мероприятие вы проводите? Больше конкретики"
      name=""
      id=""
      cols="30"
      rows="10"
    ></textarea>
  </div>
</template>

<script>
import profile from "@/components/profile-img.vue";
export default {
  components: {
    profile,
  },
};
</script>

<style scoped>
.about-you__subtitle {
  margin-top: 19px;
}
</style>
