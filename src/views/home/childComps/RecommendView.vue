<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend_item">
      <a :href="item.link"><img :src="item.image" alt=""/></a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default: []
    }
  }
};
</script>

<style>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommend_item {
  flex: 1;
}
.recommend_item img {
  width: 90%;
  margin-bottom: 10px;
}
</style>
