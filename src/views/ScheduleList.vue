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
        console.log(this.scheduleList);
    },
    methods: {
        updateScheduleList() {
            axios
            .get("/user/schedulelist")
            .then(res => {
                console.log(res.data);
                for (const schedule of res.data) {
                    this.scheduleList.push({
                        no: schedule.no,
                        name: schedule.scheduleName,
                        fixStartDate: schedule.fixStartDate,
                        fixEndDate: schedule.fixEndDate,
                        startTime: schedule.startTime,
                        endTime: schedule.endTime,
                        placeTuneState: schedule.placeTuneState,
                        dateTuneState: schedule.dateTuneState,
                        meetingNo: schedule.meetingNo,
                        participants: schedule.participants
                    })
                }
                console.log(this.scheduleList[0].name);
                console.log(this.scheduleList[0].participants);
            })
        },
    }
}
</script>

<style scoped>
#schedule-list {
    overflow: scroll;
}

</style>
  