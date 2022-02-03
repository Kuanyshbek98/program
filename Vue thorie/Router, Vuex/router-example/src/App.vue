<template>
  <div id="app">
    <h1>Router Examples</h1>
    <h2>{{ $route.params.id }}</h2>
    <br />
    <!-- <router-link to="/a1" replace>Click a1</router-link> | -->
    <router-link to="/meta">Click a</router-link> <br />
    <router-link to="/meta2">Click a2</router-link> <br />
    <router-link to="/meta3">Click a3</router-link> <br /> 
    <components :is="layout"></components>
    <router-view />
    <!-- 
    <router-view name="a" />
    <router-view name="b" /> 
    -->
    <!-- 
    <h1>Named Views</h1>
    <router-view class="view two" name="nav"></router-view>
    <router-view class="view one"></router-view>
    <router-view class="view one"></router-view>
     -->
  </div>
</template>

<script>
import EmptyLayout from "@/layouts/layoutEmpty";
import MainLayout from "@/layouts/layoutMain";
export default {
  created() {
    // this.$router.push("/chats/tabs");
    // this.$router.replace("/chats/tabs");
    // this.$router.push({name:"One"})
  },
  computed: {
    layout() {
      if (this.$route.meta.layout) {
        console.log(this.$route.meta.layout);
        return this.$route.meta.layout + "-layout";
      } else {
        return "empty-layout";
      }
    },
  },
  components: { MainLayout, EmptyLayout },
};
</script>

<style scoped></style>
