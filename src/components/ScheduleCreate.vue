<template>
    <div id="schedule-create">
        <input type="text" placeholder="일정 이름" id="schedule-name" class="font-size-m">
        <FullCalendar id="schedule-create-calendar" :options="calendarOptions" />
    </div>
</template>
  
<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
    name: 'ScheduleCreate',
    components: {
        FullCalendar
    },
    props: {
        msg: String
    },
    data() {
        return {
            calendarOptions: {
                plugins: [ dayGridPlugin, interactionPlugin ],
                initialView: 'dayGridMonth',
                selectable: true,
                unselectAuto: false,
                headerToolbar: {
                    left: 'prev',
                    center: 'title',
                    right: 'next'
                },
                events: [
                ],
                titleFormat : function(date) {
                    return date.date.year +"년 "+(date.date.month +1)+"월"; 
                },
                validRange: {
                    start: new Date(),
                },
            }
        }
    },
}
</script>

<style>
:root {
    --color-main-purple: #928FFF;
    --color-light-purple: #DFDDFD;
    --fc-button-bg-color: transparent;
    --fc-button-border-color: transparent;
    --fc-button-text-color: var(--color-main-purple);
    --fc-button-active-bg-color: transparent;
    --fc-button-active-border-color: transparent;
    --fc-highlight-color: rgba(198,189,255,.4);
    --fc-bg-event-color: var(--color-light-purple);
}

#schedule-create {
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: auto;
}

#schedule-name {
    width: 100%;
    height: 40px;
    background-color: transparent;
    border: 0px;
    border-bottom: 2.5px solid var(--color-main-purple);
    color: var(--color-main-purple);
}

.fc {
    height: 450px;
    background-color: white;  
    border-radius: 10px;
    padding: 20px;
}

.fc tbody tr {
    height: 50px;
}

.fc tbody td {
    height: 50px;
}

.fc .fc-toolbar {
    height: 37px;
}

.fc .fc-col-header {
    height: 30px;
}

.fc .fc-toolbar-title {
    font-size: 18px;
    color: var(--color-main-purple);
}

.fc .fc-button {
    display: flex;
    width: 45px;
    justify-content: center;
    align-items: center;
}

.fc .fc-button:disabled {
    opacity: 0;
    cursor: default;
}

.fc .fc-button-primary:hover {
    transform: scale(1.4);
    background-color: transparent;
    border: transparent;
}

.fc .fc-button-primary:not(:disabled).fc-button-active:focus, .fc .fc-button-primary:not(:disabled):active:focus {
    box-shadow: none;
}

.fc .fc-button-primary:focus {
    box-shadow: none;
}

.fc .fc-daygrid-day-frame {
    width: 50px;
    height: 50px;
    min-height: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {
    width: 0;
    min-height: 0;
}

.fc .fc-bg-event {
    opacity: 1;
}

.fc tbody .fc-event-start::after {
    content: '';
    display: block;
    width: 50px;
    height: 50px;
    background-color: var(--color-main-purple);
}

.fc .fc-scrollgrid-sync-table {
    height: auto !important;
}

.fc .fc-view-harness {
    height: 335px !important;
    flex-grow: 0;
}

</style>
  