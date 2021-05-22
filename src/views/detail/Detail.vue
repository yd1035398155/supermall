<template>
  <div class="detail">
    <detail-nav-bar />
    <detail-swiper :top-images="topImages" />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import { getDetail, Goods } from "network/detail";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: null
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid)
      .then(result => {
        const data = result.result;
        console.log(data);
        // 1.获取顶部轮播图数据
        this.topImages = data.itemInfo.topImages;
        // 2.获取商品信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
      })
      .catch(err => {
        err;
      });
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped></style>
