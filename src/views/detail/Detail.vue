<template>
  <div class="detail">
    <detail-nav-bar />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
export default {
  name: "Detail",
  components: {
    DetailNavBar
  },
  data() {
    return {
      iid: null
    };
  },
  created() {
    this.iid = this.$route.params.iid;
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped></style>
