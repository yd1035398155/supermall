<template>
  <div class="tab_control">
    <div
      v-for="(item, index) in titles"
      class="tab_control_item"
      @click="itemClick(index)"
    >
      <span :class="{ active: currentIndex === index }">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    }
  },
  props: {
    titles: {
      type: Array,
      default: []
    }
  }
};
</script>

<style>
.tab_control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
}
.tab_control_item {
  flex: 1;
}
.tab_control_item span {
  padding: 0 5px 5px;
}
.active {
  color: var(--color-tint);
  border-bottom: 3px solid var(--color-tint);
}
</style>
