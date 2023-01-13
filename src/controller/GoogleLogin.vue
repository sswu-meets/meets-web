<template>
    <div id="google-login">
        <h1></h1>
        <div></div>
    </div>
</template>
  
<script>
export default {
    name: 'UserList',
    props: {
        msg: String
    },
    data() {
        return {
        }
    },
    mounted() {
        // var urlSearchObj = new URLSearchParams(window.location.hash.substring(1));
        // var accessToken = urlSearchObj.get("access_token");
        this.$router.replace("/")
    },
    methods: {
        
    }
}
</script>

<style scoped>


</style>
  