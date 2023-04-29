<template>
    <div id="google-login">
        <h1></h1>
        <div></div>
    </div>
</template>
  
<script>
import {useStore} from "vuex"

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
    setup () {
        const store = useStore()

        return {
            login: (accessToken) => store.dispatch('login', accessToken),
        }
    },
    methods: {
    }
}
</script>

<style scoped>


</style>
  