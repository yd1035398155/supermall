<template>
  <div id="home">
    <nav-bar class="home_nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"
      class="fixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @queryData="queryData"
    >
      <home-swiper :banners="banners" @swiperLoad="swiperLoad" />
      <recommend-view :recommends="recommends" @recommendLoad="recommendLoad" />
      <feature-view @featureLoad="featureLoad" />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
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

import { itemListenerMixin, backTopMixin } from "common/mixin";
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
    Scroll
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      currentType: "pop",
      tabOffsetTop: 0,
      isSwiperLoad: false,
      isRecommendLoad: false,
      isFeatureLoad: false,
      isLoad: false,
      isTabFixed: false,
      saveY: 0,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    };
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {},
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
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
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    queryData() {
      this.getHomeGoods(this.currentType);
    },
    // 全部组件内的图片加载完毕时,开始计算tabbar的offsetTop
    isAllLoad() {
      if (
        this.isSwiperLoad &&
        this.isRecommendLoad &&
        this.isFeatureLoad &&
        !this.isLoad
      ) {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
        this.isLoad = true;
      }
    },
    swiperLoad() {
      this.isSwiperLoad = true;
      this.isAllLoad();
    },
    recommendLoad() {
      this.isRecommendLoad = true;
      this.isAllLoad();
    },
    featureLoad() {
      this.isFeatureLoad = true;
      this.isAllLoad();
    },
    // 监听滚动距离
    contentScroll(position) {
      // 1.判断是否显示BackTop按钮
      this.ShowBackTop(position);
      // 2.决定tabControl是否吸顶(position:flex)
      this.isTabFixed = position.y < -this.tabOffsetTop;
    },
    // =====================网络请求
    getHomeMultidata() {
      getHomeMultidata()
        .then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp();
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
  color: #fff;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10; */
}

.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.fixed {
  position: relative;
  z-index: 9;
}
</style>
