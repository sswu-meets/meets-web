<template>
  <div id="home" class="flex-container vertical a-center">
    <div id="greeting-msg-container" class="font-size-l flex-container horizontal a-end gap-1">
      <span>오직</span>
      <span class="bold">'모임'</span>
      <span>을 위한 통합 및 공유형 서비스</span>
    </div>
    <div class="flex-container horizontal gap-2 center">
      <router-link to="/schedule" class="purple-btn btn-size-s font-size-s">새 일정 만들기 +</router-link>
      <button class="purple-btn btn-size-s">새 모임 만들기 +</button>
    </div>
    <img id="mockup-img" alt="service mockup" src="../assets/home-image.png">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created() {
    console.log("home created");
  },
  mounted() {
    console.log("home mounted");
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home {
  height: calc(100vh - 55px);
  overflow: hidden;
}

#greeting-msg-container {
  width: max-content;
  position: relative;
  margin-bottom: 30px;
}

#greeting-msg-container::before {
  content: "";
  display: block;
  position: absolute;
  width: 80px;
  height: 22px;
  background-color: var(--color-light-purple);
  z-index: 0;
  left: 57px;
}

#greeting-msg-container > span{
  z-index: 1;
}

#mockup-img {
  width: 750px;
  margin-top: 50px;
}

@media (max-width: 900px) {
  #mockup-img {
    width: 80%;
  }
}
</style>
