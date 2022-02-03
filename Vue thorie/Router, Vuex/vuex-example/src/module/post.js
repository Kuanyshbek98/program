// ../module/post.js
const postModule = {
  namespaced: true,
  modules: {
    subModule: {
      namespaced: true,
      state: {
        dinamicState: 12823,
      },
      mutations: {
        MUTATION_DINAMIC(state) {
          state.dinamicState = state.dinamicState * 3;
        },
      },
      actions: {},
      getters: {},
    },
  },
  state: () => ({
    foo: "bar",
    dinamicState: 12823,
  }),
  mutations: {
    MUTATION_DINAMIC(state) {
      state.dinamicState = state.dinamicState * 2;
    },
  },
  actions: {},
  getters: {},
};
export default { postModule };
