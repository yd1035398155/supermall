<template>
  <div class="feature">
    <a href="https://act.mogujie.com/zzlx67">
      <img src="~assets/img/home/recommend_bg.jpg" alt="" @load="featureLoad" />
    </a>
  </div>
</template>

<script>
export default {
  name: "FeatureView",
  methods: {
    featureLoad() {
      this.$emit("featureLoad");
    }
  }
};
</script>

<style scoped>
.feature img {
  width: 100%;
}
</style>
