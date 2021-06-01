<template>
  <div class="toast" v-show="isshow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {},
  components: {},
  data() {
    return {
      message: "",
      isshow: false,
      timer: null
    };
  },
  created() {},
  mounted() {},
  methods: {
    show(message = "默认文字", duration = 2000) {
      this.message = message;
      this.isshow = true;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.isshow = false;
        this.message = "";
      }, duration);
    }
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  padding: 8px 10px;
  /* border-radius: 20%; */
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 13;
}
</style>
