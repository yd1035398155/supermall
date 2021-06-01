<template>
  <div class="cart_list">
    <scroll class="content" ref="scroll">
      <cart-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :item-info="item"
        :item-key="index"
      />
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "./CartListItem";
export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },

  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartList"])
  },
  created() {},
  mounted() {},
  methods: {},
  // 添加商品后无法滚动,考虑到高度有变化,应该刷新
  activated() {
    this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
.cart_list {
  height: calc(100% - 44px - 49px - 40px);
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>
