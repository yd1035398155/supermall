<template>
  <div class="detail">
    <detail-nav-bar />
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad" />
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import Scroll from "components/common/scroll/Scroll";
import { getDetail, Goods, Shop } from "network/detail";
import { debounce } from "common/utils";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    Scroll
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {}
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid)
      .then(result => {
        const data = result.result;
        // 1.获取顶部轮播图数据
        this.topImages = data.itemInfo.topImages;
        // 2.获取商品信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        // 3.获取店铺信息
        this.shop = new Shop(data.shopInfo);
        // 4.获取用户评价和模特图片
        this.detailInfo = data.detailInfo;
      })
      .catch(err => {
        err;
      });
  },
  mounted() {},
  methods: {
    imgLoad() {
      const refresh = debounce(this.$refs.scroll.refresh, 500);
      refresh();
    }
  }
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 11;
  height: 100vh;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>
