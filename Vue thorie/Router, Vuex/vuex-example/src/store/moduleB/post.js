export default {
  namespaced: true,
  modules: {
    subModule: {
      namespaced: true,
      state: {
        subModuleNumber: 9897,
        subModuleNumberb: 1000,
      },
      mutations: {
        MUTATION_INCREMENTES(state, poyload) {
          console.log(state.subModuleNumber + "--" + poyload);
        },
      },
      actions: {
        subModules(_, value) {
          // commit("MUTATION_INCREMENTES", value, { root: false });
          console.log("subModule -" + value);
        },
        subModules2({ dispatch }, value) {
          dispatch("subModules", value, { root: true });
          console.log("subModules -" + value);
        },
      },
      getters: {
        subModuleGet: (state) => state.subModuleNumberb,
        subModuleGetters: (state) => state.subModuleNumber,
        SOUNT: (state) => state.subModuleNumber,
      },
    },
  },
  state: {
    numberState: 12823,
  },
  mutations: {
    MUTATION_INCREMENTE(state, poyload) {
      // console.log(state.numberState);
      state.numberState = poyload + 1;
      // console.log("mutations" + state.numberState);
    },
  },
  actions: {
    checkout({ commit }, products) {
      // console.log("actions" + products);
      commit("MUTATION_INCREMENTE", products);
    },
  },
  getters: {
    SOUNT: (state) => state.numberState,
  },
  // account: {
  //   state: {
  //     accountNum: 98,
  //   },
  //   mutations: {},
  //   actions: {},
  //   getters: {},
  // },
};
