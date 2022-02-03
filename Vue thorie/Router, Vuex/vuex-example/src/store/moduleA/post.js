import { SOME_MUTATION } from "../mutation_types";
// [SOME_MUTATION]
export default {
  namespaced: true,
  // const moduleA = {
  // namespaced: true,
  state: {
    numberState: 1223,
    posts: [1, 4, 34, 7, 3, 6],
    count: 13,
  },
  mutations: {
    [SOME_MUTATION](state) {
      // console.log(state.numberState);
      state.posts = [...state.posts, ...[54, 23, 678]];
      // state.count = poyload;
      // console.log("poyload - " + poyload);
    },
  },
  actions: {
    subModules: {
      root: true,
      handler(_, value) {
        console.log("subModule +" + value);
      },
    },
    increment({ dispatch }, value) {
      // commit("MUTATION_INCREMENT", value);
      console.log("increment - " + value);
      dispatch("increment2", value);
      // dispatch("increment3", value);
    },
    increment2({ commit }, value2) {
      commit("MUTATION_INCREMENT", value2);
      console.log("increment2 -" + value2);
      console.log("incremen2t ll");
    },
    increment3({ commit, state }, value3) {
      const savedCartItems = state.numberStatec;
      // commit(value3.type, value3.amount);
      commit(value3.type, savedCartItems);

      // console.log("increment3 - f- " + value3);
      console.log("increment3 - f- " + value3.amount + "--" + savedCartItems);
    },
    // actionA({ commit }) {
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       commit("MUTATION_INCREMENT");
    //       resolve("kuka");
    //     }, 1200);
    //     console.log("time");
    //   });
    // },
  },

  getters: {
    COUNT: (state) => state.numberState,
    createPostes(state) {
      return state.posts;
    },
    // Creates: (state) => (id) => state.posts.filter((todo) => todo / 2 >= id),
  },
  // }
};
