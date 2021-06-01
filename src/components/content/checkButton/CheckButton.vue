<template>
  <div class="check_button" :class="{ check: isChecked }">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  components: {},
  props: {
    isChecked: {
      type: Boolean,
      default() {
        return true;
      }
    }
  }
};
</script>

<style scoped>
.check_button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #aaa;
}
.check {
  background-color: red;
  border-color: red;
}
</style>
