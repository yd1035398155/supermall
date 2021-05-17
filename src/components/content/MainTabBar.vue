<template>
  <tab-bar>
    <tab-bar-item path="/home1">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/home_active.svg"
        alt=""
      />
      <div slot="item-text">首页1</div>
    </tab-bar-item>
    <tab-bar-item path="/home2">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/home_active.svg"
        alt=""
      />
      <div slot="item-text">首页2</div>
    </tab-bar-item>
    <tab-bar-item path="/home3">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/home_active.svg"
        alt=""
      />
      <div slot="item-text">首页3</div>
    </tab-bar-item>
    <tab-bar-item path="/home4">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" />
      <div slot="item-text">首页4</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/TabBar/TabBar";
import TabBarItem from "components/common/TabBar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style></style>
