<template>
  <div>
    <h2>Dinamic</h2>
    {{ dinamicState }} <br />{{ foo }}<br />
    <button @click="Dinamic()">Click Dinamic module</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import store from "../store";
import postModule from "../module/post.js";
store.registerModule("postModule", postModule.postModule.modules.subModule);
store.registerModule("postModule2", postModule.postModule);
console.log(postModule.postModule.modules.subModule);

export default {
  computed: {
    ...mapState("postModule", ["dinamicState"]),
    ...mapState("postModule2", ["foo"]),
  },
  methods: {
    ...mapMutations("postModule2", ["MUTATION_DINAMIC"]),
    Dinamic() {
      this.MUTATION_DINAMIC();
    },
  },
};
</script>

<style scoped></style>
