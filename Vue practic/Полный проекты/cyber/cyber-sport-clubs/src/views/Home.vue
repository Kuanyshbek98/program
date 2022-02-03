<template>
  <div>
    <Banner />
    <div class="container">
      <Tournaments />
      <Section />
    </div>
    <Map />
    <div class="container">
      <Question />
    </div>
  </div>
</template>

<script>
import Tournaments from "@/components/Tournaments";
import Section from "@/components/Section";
import Map from "@/components/Map";
import Question from "@/components/Question";
import Banner from "@/components/Banner";
export default {
  components: {
    Tournaments,
    Section,
    Map,
    Question,
    Banner,
  },
};
</script>

<style scoped></style>
