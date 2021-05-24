<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="good_info">
    <!-- 文字描述 -->
    <div class="text_decoration">
      <div class="decoration_top"></div>
      <div class="text">{{ detailInfo.desc }}</div>
      <div class="decoration_bottom"></div>
    </div>
    <!-- 图片展示 -->
    <div class="img_list" v-for="items in detailInfo.detailImage">
      <div class="img_desc" v-if="items.list">{{ items.key }}</div>
      <div class="img_item" v-for="item in items.list">
        <img :src="item" alt="" @load="imgLoad" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {},
  data() {
    return {
      counter: 0
    };
  },
  created() {},
  mounted() {},
  methods: {
    imgLoad() {
      this.$emit("imgLoad");
    }
  }
};
</script>

<style scoped>
.good_info {
  width: 100vw;
}
.text_decoration {
  position: relative;
}
.decoration_top {
  position: absolute;
  top: 0;
  left: 4px;
  width: 60px;
  height: 1px;
  background-color: #000;
}
.decoration_top::before {
  content: "";
  position: absolute;
  display: block;
  top: -2px;
  left: 0;
  width: 5px;
  height: 5px;
  background-color: #000;
}
.decoration_bottom {
  position: absolute;
  bottom: 0;
  right: 4px;
  width: 60px;
  height: 1px;
  background-color: #000;
}
.decoration_bottom::after {
  content: "";
  position: absolute;
  display: block;
  top: -2px;
  right: 0;
  width: 5px;
  height: 5px;
  background-color: #000;
}
.text {
  padding: 10px 4px;
  margin: 4px 0;
  font-size: 12px;
  text-indent: 2em;
}
.img_list {
  font-size: 14px;
}
.img_desc {
  padding-left: 10px;
  margin: 10px 0;
}
.img_item img {
  width: 100%;
}
</style>
