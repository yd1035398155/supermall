<template>
  <div id="home">
    <nav-bar class="home_nav"><div slot="center">购物街</div></nav-bar>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pullUpLoad="true"
      @scroll="contentScroll"
      @queryData="queryData"
    >
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        class="tab_control"
        @tabClick="tabClick"
      />
      <!-- 显示商品 -->
      <goods-list :goods="showGoods" />
    </scroll>
    <!-- native监听组件根元素的原生事件。监听组件时，必须加native
		 -->
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
// 子组件
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";
// 公共组件
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/common/backtop/BackTop";
//业务组件
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
// 网络请求
import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      currentType: "pop",
      isShowBackTop: false,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    // =================事件监听
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        default:
          this.currentType = "sell";
          break;
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    queryData() {
      this.getHomeGoods(this.currentType);
      // 由于图片加载是异步的,better-scroll在还没加载完图片时就固定了可滚动区域,
      // refresh()重新计算可滚动区域
      this.$refs.scroll.scroll.refresh();
    },
    // 监听滚动距离
    contentScroll(position) {
      // 当滚动距离小于1000时，不显示BackTop按钮
      this.isShowBackTop = position.y < -1000;
      // console.log(position);
      // 当滚动到页面底部时加载更多商品4103
    },
    // =====================网络请求
    getHomeMultidata() {
      getHomeMultidata()
        .then(res => {
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then(res => {
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page += 1;
          setTimeout(() => {
            this.$refs.scroll.finishPullUp();
          }, 1000);
        })
        .catch(err => err);
    }
  }
};
</script>

<style scoped>
#home {
  /* vh:viewport height 视口高度 */
  position: relative;
  height: 100vh;
}
.home_nav {
  background-color: var(--color-tint);
  text-align: center;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.tab_control {
  position: sticky;
  top: 43px;
  background-color: #fff;
  z-index: 9;
}
.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
