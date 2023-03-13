<template>
    <div id="google-login">
        <h1></h1>
        <div></div>
    </div>
</template>
  
<script>
import axios from "axios"

export default {
    name: 'GoogleLogin',
    props: {
        msg: String
    },
    data() {
        return {
        }
    },
    mounted() {
        var urlSearchObj = new URLSearchParams(window.location.hash.substring(1));
        var accessToken = urlSearchObj.get("access_token");
        this.login(accessToken);
        this.$router.replace("/")
    },
    methods: {
        login(accessToken) {
            console.log();
            axios
            .post(
                "/user/login",
                {accessToken: accessToken},
            )
            .then(res => {
                console.log(res.data);
                localStorage.setItem("login_state", true);
                localStorage.setItem("user_email", res.data.email);
                localStorage.setItem("user_name", res.data.name);
                localStorage.setItem("user_profile", res.data.profileUrl);
            })
        }
    }
}
</script>

<style scoped>


</style>
  