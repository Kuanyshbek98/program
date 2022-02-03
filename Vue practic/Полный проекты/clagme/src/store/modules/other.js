import Cookies from "js-cookie";

let state = {
  token: null,
  type: null,
  proposalData: null,
  socket: null,
  chatHeader: null,
  example: "example-vuex",
};

let mutations = {
  setToken(state, payload) {
    state.token = payload;
  },
  setType(state, payload) {
    state.type = payload;
  },
  setProposalData(state, payload) {
    state.proposalData = payload;
  },
  setSocket(state, payload) {
    state.socket = payload;
  },
  setChatHeader(state, payload) {
    state.chatHeader = payload;
  },
};

let actions = {
  getToken: async ({ commit }, payload) => {
    try {
      if (payload) {
        await commit("setToken", payload);
      } else {
        let token = Cookies.get("clagme-tk");
        await commit("setToken", token || null);
      }
    } catch (err) {
      throw new Error("Внутреняя ошибка сервера, сообщите администратору");
    }
  },
  getType: async ({ commit }, payload) => {
    try {
      if (payload) {
        await commit("setType", payload);
      } else {
        let type = Cookies.get("clagme-type");
        await commit("setType", type || null);
      }
    } catch (err) {
      throw new Error("Внутреняя ошибка сервера, сообщите администратору");
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
