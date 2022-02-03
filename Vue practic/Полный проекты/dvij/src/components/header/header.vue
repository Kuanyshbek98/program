<template>
  <header class="header" :class="{ flex: data.cancel }">
    <svg
      width="11"
      height="19"
      viewBox="0 0 11 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style="margin-right:15px"
      v-show="data.chooseImg"
      @click="$router.go(-1)"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.20711 9.3271L9.22925 3.30496C9.24226 3.29283 9.2551 3.28044 9.26777 3.26777L9.97487 2.56066C10.5607 1.97487 10.5607 1.02513 9.97487 0.43934C9.38909 -0.146447 8.43934 -0.146447 7.85355 0.43934L7.52579 0.767105L7.52513 0.766442L0.732233 7.55933C-0.244077 8.53564 -0.244079 10.1186 0.732233 11.0949L7.14646 17.5091L7.52513 17.8878L7.85357 18.2162C8.43936 18.802 9.3891 18.802 9.97489 18.2162C10.5607 17.6304 10.5607 16.6807 9.97489 16.0949L9.64645 15.7664L9.26778 15.3878C9.26635 15.3863 9.2649 15.3849 9.26346 15.3835L3.20711 9.3271Z"
        :fill="`${data.color}`"
      />
    </svg>
    <h2 v-show="data.name" class="header__title main-title">
      {{ data.name }}
    </h2>
    <h2 v-show="data.cancel" class="header__cancel-title">Cancel</h2>
    <div v-show="data.cancel" class="header__event-list">
      <span class="header__event-item">1</span> /
      <span class="header__event-item header__event-item_end">17</span>
    </div>
  </header>
</template>

<script>
export default {
  // props: ["data"],
  props: {
    data: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;

  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
  margin: 0;
  padding: 10px 31px;
}
.header__title {
  font-size: 17px;
  line-height: 27px;
  letter-spacing: 0.5px;
}
.header__cancel-title {
  font-weight: bold;
  font-size: 17px;
  line-height: 27px;
  letter-spacing: 0.5px;
  color: #ff6464;
}
.header__event-item {
  font-weight: bold;
  font-size: 17px;
  line-height: 27px;
  letter-spacing: 0.5px;
  color: #3e5481;
}
.header__event-item_end {
  color: #9fa5c0;
}
</style>
