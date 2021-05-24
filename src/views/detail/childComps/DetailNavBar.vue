<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          class="title_item"
          :class="{ active: index === currentIndex }"
          @click="itemClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "",
  components: {
    NavBar
  },
  data() {
    return {
      currentIndex: 0,
      titles: ["商品", "参数", "评论", "推荐"]
    };
  },
  created() {},
  mounted() {},
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.back();
      // this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
}
.title_item {
  flex: 1;
  font-size: 12px;
}
.active {
  color: var(--color-high-text);
}

.back img {
  width: 22px;
  height: 22px;
  vertical-align: middle;
}
</style>
