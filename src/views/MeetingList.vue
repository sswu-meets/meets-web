<template>
    <div id="meeting-list">
        <h1>meeting-list</h1>
        <div></div>
    </div>
</template>
  
<script>
import {useStore} from "vuex"

export default {
    name: 'MeetingList',
    props: {
    },
    data() {
        return {
        }
    },
    mounted() {
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
#meeting-list {
    overflow: scroll;
}

</style>
  