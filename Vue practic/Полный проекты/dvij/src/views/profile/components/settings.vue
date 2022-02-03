<template>
  <div class="settings-block">
    <ul class="settings__items">
      <li class="settings__item">
        <div class="settings__item-box flex">
          <p class="settings__item-text">Уведомления</p>
          <img src="@/assets/images/setting-img.svg" alt="" />
        </div>
      </li>

      <li class="settings__item">
        <p class="settings__item-info">Настройки аккаунта</p>
        <div class="settings__item-box flex">
          <p class="settings__item-text">Личная информация</p>
          <img src="@/assets/images/setting-img.svg" alt="" />
        </div>
      </li>
      <li class="settings__item">
        <div class="settings__item-box flex">
          <p class="settings__item-text">Платежи и выплаты</p>
          <img src="@/assets/images/setting-img.svg" alt="" />
        </div>
      </li>
      <li class="settings__item">
        <p class="settings__item-info">Создать Ивенты</p>
        <div class="settings__item-box flex">
          <p class="settings__item-text">Создать Ивент</p>
          <img src="@/assets/images/setting-img.svg" alt="" />
        </div>
      </li>
      <li class="settings__item">
        <div class="settings__item-box flex">
          <p class="settings__item-text">Мои мероприятия</p>
          <img src="@/assets/images/setting-img.svg" alt="" />
        </div>
      </li>
      <li class="settings__item">
        <p class="settings__item-info">Поддержка</p>
        <div class="settings__item-box flex">
          <p class="settings__item-text">Настройки</p>
          <img src="@/assets/images/setting-img.svg" alt="" />
        </div>
      </li>
      <li class="settings__item">
        <div class="settings__item-box flex">
          <p class="settings__item-text">Поддержка</p>
          <img src="@/assets/images/setting-img.svg" alt="" />
        </div>
      </li>
      <li class="settings__item">
        <div class="settings__item-box flex">
          <p class="settings__item-text">О нас</p>
          <img src="@/assets/images/setting-img.svg" alt="" />
        </div>
      </li>
      <li class="settings__item">
        <div class="settings__item-box flex">
          <p class="settings__item-text">Выйти</p>
          <img src="@/assets/images/setting-img.svg" alt="" />
        </div>
      </li>
    </ul>
    <label for="" class="settings__item-info">Версия 1.1</label>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.settings-block {
  text-align: center;
  padding-bottom: 100px;
}
.settings__items {
  margin-bottom: 30px;
}
.settings__item {
  letter-spacing: 0.5px;
  padding: 12px 0;
  margin: 14px 0;
  border-bottom: 1px solid #d0dbea;
  text-align: start;
}
.settings__item-info {
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: #9fa5c0;
  margin: 2px 0;
}
.settings__item-text {
  font-weight: bold;
  font-size: 17px;
  line-height: 27px;
  color: #3e5481;
  margin: 10px 0;
}
</style>
