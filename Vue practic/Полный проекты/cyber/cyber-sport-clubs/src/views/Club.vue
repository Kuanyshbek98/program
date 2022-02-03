<template>
  <div>
    <Banner />
    <div class="container">
      <BookNow />
      <Review />
      <h2>Другие популярные места</h2>
      <Club />
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import Club from "@/components/Club.vue";
import BookNow from "@/components/BookNow.vue";
import Review from "@/components/Review.vue";
export default {
  components: {
    Banner,
    Review,
    BookNow,
    Club,
  },
};
</script>
