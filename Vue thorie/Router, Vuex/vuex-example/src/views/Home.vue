<template>
  <div class="home">
    <!-- <h1>{{ SOUNT }}</h1> -->
    <!-- <h1>{{ cart }}</h1> -->
    <!-- <h3>{{ count }}</h3> -->
    <!-- <h3>{{ subModuleGetters }}</h3> -->
    <!-- <h3>{{ subModuleGet }}</h3> -->
    <button @click="functiona()">HOME Click</button>
  </div>
</template>

<script>
import {
  /* createNamespacedHelpers,*/ mapGetters,
  // mapMutations,
  // mapActions,
} from "vuex";
// const { mapGetters } = createNamespacedHelpers("b/subModule");
export default {
  name: "Home",
  data() {
    return {
      number: 25,
    };
  },
  computed: {
    // ...mapGetters("b", ["SOUNT"]),
    ...mapGetters({ cart: ["b/subModule/SOUNT"] }),

    // ...mapState({
    //   count: (state) => state.b.numberState,
    // }),
    // ...mapState("b/subModule", ["subModuleNumber"]),

    // ...mapState({
    //   a: (state) => state.b.subModule.subModuleNumber,
    //   b: (state) => state.b.subModule.subModuleNumberb,
    // }),
    // ...mapState("b/subModule", {
    //   a: (state) => state.subModuleNumber,
    //   b: (state) => state.subModuleNumberb,
    // }),
    // ...mapState({
    //   a: (state) => state.subModuleNumber,
    //   b: (state) => state.subModuleNumberb,
    // }),

    ...mapGetters(["b/modules/subModuleGetters", "b/modules/subModuleGet"]),
  },
  methods: {
    // ...mapActions("b/modules", ["subModules2", "subModules"]),
    // ...mapMutations("b/subModule", ["MUTATION_INCREMENTES"]),
    // ...mapMutations(["MUTATION_INCREMENTES"]),
    // ...mapActions(["increment", "increment2"]),
    // ...mapActions({
    //   increment: ["b/increment"],
    //   increment2: ["b/increment2"],
    // }),
    // ...mapActions("cart", ["increment", "increment2"]),

    functiona() {
      // this.subModules();
      // this.$store.dispatch("b/subModule/subModules2", this.number);
      this.$store.registerModule(["b/subModule", "myModule"], {});
      // this.MUTATION_INCREMENTES(47);
      // console.log(this.$store.state.post.posts);
      // this.$store.dispatch("increment", this.number);
      // console.log(stat);
      // this.$store.commit("b/MUTATION_INCREMENTE", 12);
      // this.$store.dispatch("checkout", this.number);
      // console.log(this.$store.state.account.accountNum);
    },
  },
  // mounted() {
  //   this.$store.dispatch("increment", this.number);
  // },
};
</script>

<style scoped></style>
