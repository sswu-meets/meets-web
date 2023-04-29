import { createStore } from "vuex";
import axios from "axios"

export default createStore({
  state: {
    loginState: false,
    user: {
      email: "",
      name: "",
      profile: "",
    }
  },
  getters: {
  },
  mutations: {
    login(state, {email, name, profile}) {
      state.loginState = true
      state.user.email = email;
      state.user.name = name;
      state.user.profile = profile;
    },
    logout(state) {
      state.loginState = false
      state.user.email = "";
      state.user.name = "";
      state.user.profile = "";
    }
  },
  actions: {
    login({commit}, accessToken) {
      axios
      .post(
          "/user/login",
          {accessToken: accessToken},
      )
      .then(res => {
          commit("login", {
            email: res.data.email,
            name: res.data.name, 
            profile: res.data.profileUrl}
          )
      })
    },
    logout({commit}) {
      commit("logout")
    }
  }
});