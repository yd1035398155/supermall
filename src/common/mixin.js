import { debounce } from "./utils";
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      refresh: null
    };
  },

  mounted() {
    //1.监听img加载完成
    this.refresh = debounce(this.$refs.scroll.refresh, 100);
    this.itemImgListener = () => {
      this.refresh();
    };
    this.$bus.$on("itemImgLoad", this.itemImgListener);
  }
};
