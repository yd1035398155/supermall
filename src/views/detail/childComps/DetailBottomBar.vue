<template>
  <div class="bottom_bar">
    <div class="bottom_left">
      <div class="left">
        <i class="icon_server"></i>
        <div>客服</div>
      </div>
      <div class="center">
        <i class="icon_shop"></i>
        <div>店铺</div>
      </div>
      <div class="right">
        <i class="icon_collection"></i>
        <div>收藏</div>
      </div>
    </div>
    <div class="bottom_right">
      <div class="add" @click="addToCart">加入购物车</div>
      <div class="purchase">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    addToCart() {
      this.$emit("addToCart");
    }
  }
};
</script>

<style scoped>
.bottom_bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  font-size: 13px;
}
.bottom_left {
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  background-color: #fff;
  padding-top: 5px;
}
.bottom_left i {
  display: block;
  width: 25px;
  height: 25px;
  background-size: 100% 600%;
}
.icon_server {
  background: url("~assets/img/detail/detail_bottom.png") no-repeat 0 -53px;
  /* 宽度 高度 */
}
.icon_shop {
  background: url("~assets/img/detail/detail_bottom.png") no-repeat 0 -98px;
  /* 宽度 高度 */
}
.icon_collection {
  background: url("~assets/img/detail/detail_bottom.png") no-repeat 0 1px;
}
.bottom_right {
  display: flex;
  flex: 1;
  text-align: center;
  line-height: 49px;
}
.add {
  flex: 1;
  background-color: yellow;
}
.purchase {
  flex: 1;
  background-color: var(--color-high-text);
  color: #fff;
}
</style>
