<template>
  <header>
    <router-link to="/">
      <img id="logo" alt="meets logo" src="./assets/meets-logo.png">
    </router-link>
    <div id="user-menu" class="flex-container horizontal center gap-1">
      <span v-if="loginState">{{user.name}}</span>
      <a id="login-btn" v-if="!loginState" @click="oauthSignIn">로그인</a>
      <div id="profile">
        <img alt="user profile" v-if="loginState" :src="user.profile" referrerpolicy="no-referrer">
        <img alt="default profile" v-if="!loginState" src="./assets/default-profile.png">
      </div>
    </div>
  </header>
  <router-view ></router-view>
</template>

<script>
import { computed } from 'vue'
import { useStore } from "vuex"

export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
    }
  },
  setup () {
    const store = useStore()

    return {
      user: computed(() => store.state.user),
      loginState: computed(() => store.state.loginState),
    }
  },
  methods: {
    oauthSignIn() {
      console.log("oauthSignIn");
      // Google's OAuth 2.0 endpoint for requesting an access token
      var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

      // Create <form> element to submit parameters to OAuth 2.0 endpoint.
      var form = document.createElement('form');
      form.setAttribute('method', 'GET'); // Send as a GET request.
      form.setAttribute('action', oauth2Endpoint);

      // Parameters to pass to OAuth 2.0 endpoint.
      var params = require("./constant/google.json");

      // Add form parameters as hidden input values.
      for (var p in params) {
        var input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', p);
        input.setAttribute('value', params[p]);
        form.appendChild(input);
      }

      // Add form to page and submit it to open the OAuth 2.0 endpoint.
      document.body.appendChild(form);
      form.submit();
    }
  }
}
</script>

<style>
:root {
  --color-main-purple: #928FFF;
  --color-sub-purple: #DFDAFB;
  --color-light-purple: rgb(223, 218, 251, 0.3);
}

* {
  box-sizing: border-box;
}

p {
  margin: 0px;
}

button {
  border: none;
  cursor: pointer;
}

a {
  text-decoration: none;
}

input:focus {
  outline: none;
}

#app {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px 20px;
  gap: 30px;
}

body {
  margin: 0px;
  background-color: #F6F6F6;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.max-w {
  width: 100%;
}

.max-h {
  height: 100%;
}

.flex-container {
  display: flex;
}

.horizontal.flex-container {
  flex-direction: row;
}

.vertical.flex-container {
  flex-direction: column;
}

.flex-container.center {
  justify-content: center;
  align-items: center;
}

.flex-container.j-center {
  justify-content: center;
}

.flex-container.a-center {
  align-items: center;
}

.flex-container.a-start {
  align-items: flex-start;
}

.flex-container.a-end {
  align-items: flex-end;
}

.flex-grow-1 {
  flex-grow: 1;
}

.gap-1 {
  gap: 10px;
}

.gap-2 {
  gap: 20px;
}

.bold {
  font-weight: bold;
}

.font-size-l {
  font-size: 30px;
}

.font-size-m {
  font-size: 18px;
}

.font-size-s {
  font-size: 14px;
}

header a #logo {
  width: 90px;
}

header > #user-menu > #login-btn {
  font-size: 14px;
  cursor: pointer;
}

header > #user-menu > #profile {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
}

header > #user-menu > #profile {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
}

header > #user-menu > #profile > img{
  width: 100%;
}

.purple-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-sub-purple);
  border-radius: 5px;
  color: black;
}

.purple-btn.btn-size-s {
  width: 240px;
  height: 40px;
}

.purple-btn.btn-size-m {
  width: 400px;
  height: 40px;
}

.sub-purple-card {
  background-color: var(--color-light-purple);
  border: 1px solid var(--color-sub-purple);
  border-radius: 5px;
  padding: 20px;
}

</style>
