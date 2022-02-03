<template>
  <div class="event-create">
    <HeaderBlock v-bind:data="header" />
    <div class="container">
      <component
        class="event-create__components"
        :is="arrCategories[linkNumber]"
      >
      </component>
    </div>
    <Choose v-bind:value="choose" />
  </div>
</template>

<script>
import HeaderBlock from "@/components/header/header";
import Choose from "@/components/choose";
export default {
  data() {
    return {
      arrCategories: [
        "categories",
        "city",
        "theme",
        "language",
        "info",
        "about-you",
        "location",
        "date",
      ],
      linkNumber: 0,
      header: {
        name: null,
        color: "#3E5481",
        chooseImg: false,
        cancel: true,
      },
      choose: {
        backBG: "#F4F5F7",
        nextBG: "#1FCC79",
        backColor: "#2E3E5C",
        backlink: () =>
          "/event-create/" +
          this.arrCategories[this.linkNumber != 0 ? this.linkNumber - 1 : 0],
        nextlink: () =>
          "/event-create/" +
          this.arrCategories[
            this.linkNumber < this.arrCategories.length - 1
              ? this.linkNumber + 1
              : this.arrCategories.length - 1
          ],
        eventCreate: true,
      },
    };
  },

  components: {
    HeaderBlock,
    Choose,
    Categories: () => ({
      component: import("./components/categories.vue"),
    }),
    City: () => ({
      component: import("./components/city.vue"),
    }),
    Theme: () => ({
      component: import("./components/theme.vue"),
    }),
    Language: () => ({
      component: import("./components/language.vue"),
    }),
    Info: () => ({
      component: import("./components/info.vue"),
    }),
    AboutYou: () => ({
      component: import("./components/aboutYou.vue"),
    }),
    Location: () => ({
      component: import("./components/location.vue"),
    }),
    Date: () => ({
      component: import("./components/date.vue"),
    }),
  },
  watch: {
    "$route.params.id"(to) {
      this.linkNumber = this.arrCategories.indexOf(to);
    },
  },
};
</script>

<style scoped>
.event-create {
  padding-bottom: 100px;
}
.event-create__components {
  padding-bottom: 50px;
}
</style>
