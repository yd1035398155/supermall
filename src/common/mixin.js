import { debounce } from "./utils";
import BackTop from "components/common/backtop/BackTop";
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
export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    };
  },
  components: { BackTop },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    ShowBackTop(position) {
      this.isShowBackTop = position.y < -1000;
    }
  }
};
