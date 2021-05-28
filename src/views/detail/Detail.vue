<template>
  <div class="detail">
    <detail-nav-bar @titleclick="titleClick" />
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad" />
      <detail-param-info :param-info="paramInfo" ref="params" />
      <detail-comment :comment="comment" ref="comment" />
      <goods-list :goods="recommend" ref="recommend" />
    </scroll>
  </div>
</template>

<script>
// 子组件
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailComment from "./childComps/DetailComment";
// 公共组件
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import Scroll from "components/common/scroll/Scroll";
// 业务组件
import GoodsList from "components/content/goods/GoodsList";
import { itemListenerMixin } from "common/mixin";
// 网络请求和函数
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam,
  Comment
} from "network/detail";
import { debounce } from "common/utils";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailComment,
    Scroll,
    GoodsList
  },
  mixins: [itemListenerMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      comment: {},
      recommend: [],
      themeTopYs: [],
      getThemeTopY: null
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
        // 5.获取参数信息
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
        // 6.获取评论信息
        this.comment = new Comment(data.rate.list[0]);

        // this.$nextTick(() => {
        //   // 根据最新的数据,对应的DOM已经被渲染出来
        //   // 但图片依旧没有加载完(目前获取到的offsetTop不包含图片的高度)
        //   // offsetTop值不对的时候,都是因为图片的问题
        //   this.themeTopYs = [];
        //   this.themeTopYs.push(0);
        //   this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        //   console.log(this.themeTopYs);
        // });
      })
      .catch(err => {
        err;
      });
    getRecommend()
      .then(result => {
        this.recommend = result.data.list;
      })
      .catch(err => {
        err;
      });
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44);
      // console.log(this.themeTopYs);
    });
  },
  mounted() {},
  methods: {
    imgLoad() {
      this.getThemeTopY();
    },
    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100);
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
