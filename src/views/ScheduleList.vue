<template>
    <div id="schedule-list" class="flex-container vertical gap-1">
        <ScheduleListItem
            v-for="schedule in scheduleList"
            :id = "schedule.no"
            :key = "schedule.no"
            :schedule = "schedule"
        ></ScheduleListItem>
    </div>
</template>
  
<script>
import ScheduleListItem from "../components/ScheduleListItem.vue"
import axios from "axios"

export default {
    name: 'ScheduleList',
    props: {
    },
    components: {
        ScheduleListItem
    },
    data() {
        return {
            scheduleList: [],
        }
    },
    mounted() {
        this.updateScheduleList();
    },
    methods: {
        updateScheduleList() {
            axios
            .get("/user/schedulelist")
            .then(res => {
                for (const schedule of res.data) {
                    this.scheduleList.push({
                        no: schedule.no,
                        name: schedule.scheduleName,
                        placeTuneState: schedule.placeTuneState,
                        dateTuneState: schedule.dateTuneState,
                        meetingNo: schedule.meetingNo
                    })
                }
            })
        },
    }
}
</script>

<style scoped>


</style>
  