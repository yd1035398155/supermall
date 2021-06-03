import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { getHomeMultidata } from "network/home";
import toast from "components/common/toast";
import FastClick from "fastclick";
import LazyLoad from "vue-lazyload";
Vue.config.productionTip = false;
// 事件总线
Vue.prototype.$bus = new Vue();

// 安装toast插件
Vue.use(toast);

// 解决移动端300ms延迟问题
FastClick.attach(document.body);

// 使用懒加载
Vue.use(LazyLoad, {
  loading: require("./assets/img/common/placeholder.png")
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

getHomeMultidata();
