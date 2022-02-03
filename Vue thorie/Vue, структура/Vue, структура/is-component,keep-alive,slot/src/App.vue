<template>
  <div>
    <keep-alive>
      <tr v-bind:is="component">
        <h1>Yergesh</h1>
      </tr>
    </keep-alive>
    <button @click="ComponentCreate()">Companent Create</button>
  </div>
</template>

<script>
import BlogPostRow from "@/components/BlogPostRow";
import NewBlock from "@/components/NewBlock";

export default {
  data() {
    return {
      component: "blog-post-row",
      componen: "new-block",
    };
  },
  components: {
    BlogPostRow,
    NewBlock,
  },
  methods: {
    ComponentCreate() {
      this.component === "new-block"
        ? (this.component = "blog-post-row")
        : (this.component = "new-block");
    },
  },
};
</script>

<style scoped></style>
