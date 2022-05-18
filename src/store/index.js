import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";


const store = createStore({
  state: {
    loginState: false,
    email: "",
    name: "",
    device_name: null,
    pic: "",
    shadowResponse: {},
    device1_name: "",
    temporaryOtherDeviceName: "EXAMPLE DEVICE 2",
    ready_to_load_scheduling: 0,
  },
  getters: {
    getLoginState(state) {
      return state.loginState;
    },
    getPic(state) {
      return state.pic;
    },
    getDeviceName(state) {
      // while !state.device_name!=""
      return state.device_name;
    },
  },
  mutations: {
    login(state, new_value) {
      state.loginState = new_value;
    },
    logout(state, new_value) {
      state.loginState = new_value;
    },
    thirdfunc(state, new_value) {
      state.loginState = new_value;
    },
    addUserEmail(state, userEmail) {
      state.email = userEmail;
    },
    addUserName(state, name) {
      state.name = name;
    },
    addPic(state, pic) {
      state.pic = pic;
    },
  },
  actions: {
    login({ commit }, new_value) {
      commit("login", new_value);
    },
    logout({ commit }, new_value) {
      commit("logout", new_value);
    }
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage, // clear storage on window close
    }),
  ],
});

export default store;