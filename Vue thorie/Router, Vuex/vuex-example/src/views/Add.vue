<template>
  <div>
    <hr />
    <h1>{{ COUNT }}</h1>
    zdvfbg
    <hr />
    <!-- {{ COUNT }}| {{ createPostes }}| -->
    <button @click="add()">Click</button>
  </div>
</template>

<script>
// import { /* mapGetters, mapActions,*/ mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      number: 25,
      countAlias: 0,
    };
  },
  computed: {
    ...mapGetters(["COUNT"]),
    // ...mapGetters(["COUNT", "createPostes"]),
    // arrow functions can make the code very succinct!
    // ...mapMutations(["MUTATION_INCREMENT", 47]),
    // ...mapMutations(["MUTATION_INCREMENT"]),
    // ...mapState({
    //   count: (state) => state.a.count,
    // }),
  },
  methods: {
    // ...mapActions(["increment", "increment2"]),
    // ...mapActions({ adde: "increment2" }),

    add() {
      // this.count();
      // console.log("+" + this.countAlias);
      // this.increment2(12);
      // this.$store.dispatch("increment", this.number);
      // this.$store.dispatch("increment3", {
      //   type: "MUTATION_INCREMENT",
      //   amount: 10,
      // });
      this.$store.commit("SOME_MUTATION", 19);
      // console.log(this.$store.state.a.numberState);
      // console.log(this.$store.state.b.numberState);
    },
  },
  mounted() {
    // $store.dispatch("actionA").then(() => {});
    // console.log(this.increment);
    //console.log(this.$store.getters.Creates(10));
    // console.log(this.$store.state.post.posts.filter((todo) => todo / 2 >= 3));
  },
};
</script>

<style scoped></style>
