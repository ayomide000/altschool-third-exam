import { createStore } from "vuex";

export default createStore({
  state: {
    defaultCount: 0,
    form: {
      count: "",
    },
  },
  getters: {
    count(state) {
      return state.defaultCount;
    },
    countInputs(state) {
      return state.form.count;
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
    updateInput(state, payload) {
      state.form.count = payload;
    },
    setValue(state, payload) {
      state.defaultCount = payload;
      // state.form.count = payload;
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
    updateInput({ commit }, payload) {
      commit("updateInput", payload);
    },
    setValue({ commit }, payload) {
      commit("setValue", payload);
    },
  },
});
