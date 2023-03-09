// import counter from "@/composables/counter";
import { createStore } from "vuex";

export default createStore({
  state: {
    defaultCount: 0,
    obj: {
      count: parseInt(localStorage.getItem("count")) || 0,
    },
  },
  getters: {
    count(state) {
      return state.defaultCount;
    },
  },
  mutations: {
    increment(state) {
      state.defaultCount++;
    },
    decrement(state) {
      state.defaultCount--;
    },
    reset(state) {
      state.defaultCount = 0;
    },
    updateMessage(state, payload) {
      state.obj.message = payload;
    },
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
    decrement({ commit }) {
      commit("decrement");
    },
    reset({ commit }) {
      commit("reset");
    },
    updateMessage({ commit }, payload) {
      commit("updateMessage", payload);
    },
  },
  modules: {},
});
