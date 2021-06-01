// 插件的封装方式
// 1.创建插件的Vue对象
// 2.创建JS文件，挂载
// 3.在Main函数中载入并注册插件
// 4.需要用的地方直接this.$toast.show()

import Toast from "./Toast";
const obj = {};
// vue.use()后执行install函数
obj.install = function(Vue) {
  console.log("执行install函数");
  // 1.创建组件构造器
  const toastContrustor = Vue.extend(Toast);
  // 2.根据组件构造器,new一个组件对象
  const toast = new toastContrustor();
  // 3.挂载
  toast.$mount(document.createElement("div"));
  // 4.toast.$el就是上面的div
  document.body.appendChild(toast.$el);
  Vue.prototype.$toast = toast;
};
export default obj;
