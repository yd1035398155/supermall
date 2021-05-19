<template>
  <div class="good_item">
    <img :src="goodsItem.show.img" alt="" />
    <div class="goods_info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style>
.good_item {
  position: relative;
  padding-bottom: 40px;
  width: 48%;
}
.good_item img {
  width: 100%;
  border-radius: 5px;
}
.goods_info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods_info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
  padding: 2px;
}
.goods_info .price {
  margin-right: 5px;
  color: var(--color-high-text);
}
.goods_info .collect {
  position: relative;
  text-align: center;
  padding-left: 14px;
}
.goods_info .collect::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 14px;
  height: 14px;
  /* url no-repeat position(x,y)/size(x,y) */
  background: url("~assets/img/common/collect.svg") no-repeat 0 -1px/14px 14px;
}
</style>
