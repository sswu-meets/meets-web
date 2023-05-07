import { createStore } from "vuex";
import axios from "axios"
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  plugins: [createPersistedState()],
  state: {
    loginState: false,
    user: {
      email: "",
      name: "",
      profile: "",
    },
    scheduleList: []
  },
  getters: {
  },
  mutations: {
    login(state, {email, name, profile}) {
      state.loginState = true;
      state.user.email = email;
      state.user.name = name;
      state.user.profile = profile;
    },
    logout(state) {
      state.loginState = false
      state.user.email = "";
      state.user.name = "";
      state.user.profile = "";
    },
    saveSchedule(state, scheduleList) {
      for (const schedule of scheduleList) {
        scheduleList.push({
          scheduleNo: schedule.no,
          scheduleName: schedule.scheduleName,
          placeTuneState: schedule.placeTuneState,
          dateTuneState: schedule.dateTuneState,
          meetingNo: schedule.meetingNo
        })
      }
    },
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
    },
    getScheduleList({commit, state}) {
      axios
      .get("/user/schedulelist")
      .then(res => {
        console.log("일정 정보");
        console.log(res.data);
        commit('saveSchedule', res.data);
      })
      return state.scheduleList;
    }
  }
});