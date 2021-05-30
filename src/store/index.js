import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations";
import actions from "./actions";
//1.安装插件
Vue.use(Vuex);
// 2.创建state
const state = {
  carList: []
};
// 3.导出
export default new Vuex.Store({
  // 只用来存放data,修改数据要在mutations里
  state,
  // methods
  mutations,
  // 异步
  actions,
  modules: {}
});
