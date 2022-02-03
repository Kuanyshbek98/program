<template>
  <div id="app"> 
    <Headers />
    <!-- <router-link to="/">Home</router-link>|
    <router-link to="/clubs">Clubs</router-link> -->
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Headers from "@/components/Headers";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Headers,
    Footer,
  },
};
</script>

<style scoped> 
</style>
