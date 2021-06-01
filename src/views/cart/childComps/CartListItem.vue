<template>
  <div class="list_item">
    <div class="item_selector">
      <!-- 监听组件时在click后加.native -->
      <check-button :is-checked="itemInfo.checked" @click.native="checkClick" />
    </div>
    <div class="item_img">
      <img :src="itemInfo.image" alt="" />
    </div>
    <div class="item_info">
      <div class="title_info">{{ itemInfo.title }}</div>
      <div class="item_desc">{{ itemInfo.desc }}}</div>
      <div class="info_bottom">
        <div class="item_price">￥{{ itemInfo.price }}</div>
        <div class="item_count">x{{ itemInfo.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  name: "CartListItem",
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      }
    },
    itemKey: {
      type: Number,
      default() {
        return 0;
      }
    }
  },
  components: {
    CheckButton
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    checkClick() {
      this.itemInfo.checked = !this.itemInfo.checked;
      // this.$store.state.carList[this.itemKey].checked = !this.$store.state
      //   .carList[this.itemKey].checked;
    }
  }
};
</script>

<style scoped>
.list_item {
  display: flex;
  width: 100%;
  /* height: 100px; */
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item_selector {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item_img {
  padding: 5px;
}
.item_img img {
  width: 80px;
  height: 100px;
  /* display: block; */
  border-radius: 5px;
}
.item_info {
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.title_info,
.item_desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 5px;
  font-size: 16px;
  color: black;
}
.item_desc {
  color: #666;
  font-size: 12px;
}

.info_bottom {
  display: flex;
  font-size: 16px;
  justify-content: space-evenly;
}
.item_price,
.item_count {
  position: absolute;
  bottom: 5px;
}
.item_price {
  left: 5px;
  color: orange;
}
.item_count {
  right: 5px;
}
</style>
