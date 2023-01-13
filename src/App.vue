<template>
  <header>
    <img id="logo" alt="meets logo" src="./assets/meets-logo.png">
    <div id="user-menu" class="flex-container horizontal center gap-1">
      <span v-if="loginState">{{user.name}}</span>
      <a id="login-btn" v-if="!loginState" @click="oauthSignIn">로그인</a>
      <div id="profile">
        <img alt="user profile" v-if="loginState" :src="user.profile">
        <img alt="default profile" v-if="!loginState" src="./assets/default-profile.png">
      </div>
    </div>
  </header>
  <router-view></router-view>
</template>

<script>
import axios from "axios"

export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      loginState: false,
      user: {
        email: "",
        name: "",
        profile: "",
      },
      googleLoginUrl: "https://accounts.google.com/o/oauth2/v2/auth?client_id=207911921876-ee9ke7dmpgvnlnrha5kt1vvg9ki8o17a.apps.googleusercontent.com&redirect_uri=http://localhost:8081&response_type=token&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
    }
  },
  methods: {
    getLoginState() {
      console.log("getLoginState() 실행");
      axios
      .get("/user/status")
      .then(res => {
        console.log(res);
        this.loginState = res.data;
        if (this.loginState) {
          this.getUserInfo();
        }
      })
    },
    getUserInfo() {
      console.log("getUserInfo 실행");
      axios
      .get("/user")
      .then(res => {
        console.log(res);
        this.user.email = res.data.email;
        this.user.name = res.data.name;
        this.user.profile = res.data.profileUrl;
      })
    },
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
* {
  box-sizing: border-box;
}

p {
  margin: 0px;
}

button {
  border: none;
}

#app {
  width: 100vw;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #F6F6F6;
  color: #2c3e50;
  padding: 20px 20px;
}

body {
  margin: 0px;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

header > #logo {
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
</style>
