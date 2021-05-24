<template>
  <div>
    <!-- 标题 -->
    <div class="info_title">{{ goods.title }}</div>
    <!-- 价格 -->
    <div class="info_price">
      <span class="new_price">{{ goods.newPrice }}</span>
      <span class="old_price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <!-- 销量收藏发货 -->
    <!-- v-if问题:异步数据先显示初始数据,在显示带数据的数据,
		goods.columns加载时还是一个空数组,当渲染完毕后,才加载异步数据,
		所以不加v-if就会报错
		 -->
    <div v-if="goods.columns" class="info_other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <!-- 服务信息 -->
    <div v-if="goods.services" class="info_services">
      <span
        class="info_service_item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.info_title {
  margin: 10px;
}
.new_price {
  color: var(--color-tint);
  font-size: 20px;
  margin: 0 10px 0;
}
.old_price {
  color: #ccc;
  text-decoration: line-through;
  font-size: 12px;
  margin: 0 5px 0;
}
.discount {
  display: inline-block;
  text-align: center;

  width: 50px;
  height: 22px;
  line-height: 22px;
  font-size: 12px;
  border-radius: 11px;
  background-color: var(--color-tint);
  color: #fff;
}
.info_other {
  /* margin-top: 15px; */
  line-height: 60px;
  display: flex;
  color: #ccc;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  padding: 0 10px 0;
  justify-content: space-between;
}
.info_services {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
  padding: 0 10px 0;
}
.info_service_item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}
.info_service_item span {
  font-size: 13px;
  color: #333;
}
</style>
