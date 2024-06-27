import { createStore } from "vuex";
import juegosJson from "./db/juegos.json";

export default createStore({
  state: {
    juegos: juegosJson,
  },
  getters: {},
  mutations: {
    cargaJuegos(state, payload) {
      state.juegos = payload;
    },
  },
  actions: {
    incrementarStock({ commit, state }, i) {
      const { juegos } = state;
      juegos[i].stock++;
      commit("cargaJuegos", juegos);
    },
    disminuirStock({ commit, state }, i) {
      const { juegos } = state;
      juegos[i].stock--;
      commit("cargaJuegos", juegos);
    },
  },
  modules: {},
});
