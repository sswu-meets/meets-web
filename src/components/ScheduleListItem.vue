<template>
    <div class="schedule-list-item flex-container a-start vertical max-w">
        <div class="schedule-header flex-container j-between a-center horizontal">
            <router-link :to="`/schedule/${schedule.no}`">{{schedule.name}}</router-link>
            <img @click="openDotMenu" src="../assets/dot-menu.png" class="btn">
        </div>
        <div v-if="isDotMenuOpen" class="dot-menu flex-container vertical">
            <button>일정 나가기</button>
        </div>
        <p>{{schedule.no}}</p>
        <div></div>
    </div>
</template>
  
<script>
export default {
    name: 'ScheduleListItem',
    props: {
        schedule: Object,
    },
    data() {
        return {
            isDotMenuOpen: false,
        }
    },
    methods: {
        openDotMenu() {
            this.isDotMenuOpen = !this.isDotMenuOpen;
        }
    }
}
</script>

<style scoped>
.schedule-list-item {
    position: relative;
    background-color: white;
    border-radius: 5px;
    border: 1px solid var(--color-sub-purple);
    padding: 10px;
}

.schedule-list-item .dot-menu {
    position: absolute;
    top: 35px;
    right: 0px;
    border: 1px solid var(--color-sub-purple);
    border-radius: 5px;
    padding: 10px;
    background-color: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
}

.schedule-header {
    width: 100%;
    padding-bottom: 5px;
    border-bottom: 1px solid var(--color-light-gray);
    margin-bottom: 5px;
}

.schedule-header img{
    height: 15px;
}


</style>
  