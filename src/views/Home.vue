<template>
  <div id="home" class="flex-container vertical a-center flex-grow-1 gap-2">
    <div id="greeting-msg-container" class="font-size-l flex-container horizontal j-center a-end gap-1">
      <span>오직</span>
      <span class="bold">'모임'</span>
      <span>을 위한 통합 및 공유형 서비스</span>
    </div>
    <div class="flex-container horizontal gap-2 center">
      <router-link to="/schedule" class="purple-btn btn-size-s font-size-s">새 일정 만들기 +</router-link>
      <button class="purple-btn btn-size-s">새 모임 만들기 +</button>
    </div>
    <img v-if="!loginState" id="mockup-img" class="max-w" alt="service mockup" src="../assets/home-image.png">
    <div v-if="loginState" class="flex-container horizontal flex-grow-1 gap-2 center">
      <ScheduleList class="sub-purple-card max-w max-h"></ScheduleList>
      <MeetingList class="sub-purple-card max-w max-h"></MeetingList>
    </div>
  </div>
</template>

<script>
import { computed } from "vue"
import { useStore } from "vuex"
import ScheduleList from "./ScheduleList.vue"
import MeetingList from "./MeetingList.vue"

export default {
  name: 'HelloWorld',
  props: {
  },
  components: {
    ScheduleList, MeetingList
  },
  setup () {
    const store = useStore()

    return {
      user: computed(() => store.state.user),
      loginState: computed(() => store.state.loginState),
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home {
  width: 500px;
  overflow: hidden;
  margin: auto;
}

#home div {
  width: 100%;
}

#greeting-msg-container {
  width: max-content;
  position: relative;
  margin-bottom: 10px;
}

#greeting-msg-container::before {
  content: "";
  display: block;
  position: absolute;
  width: 80px;
  height: 22px;
  background-color: var(--color-sub-purple);
  z-index: 0;
  left: 57px;
}

#greeting-msg-container > span{
  z-index: 1;
}

#mockup-img {
  margin-top: 50px;
}

@media (max-width: 900px) {
  #mockup-img {
    width: 80%;
  }
}
</style>
