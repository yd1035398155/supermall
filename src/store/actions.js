import { ADD_COUNTER, ADD_TO_CART } from "./mutation-type";
export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 购物车中是否存在该商品
      let product = context.state.carList.find(
        item => item.iid === payload.iid
      );
      // 不存在,push进入购物车
      if (product) {
        context.commit(ADD_COUNTER, product);
        resolve("当前商品数量+1");
      }
      // 存在,数量加1
      else {
        payload.count = 1;
        context.commit(ADD_TO_CART, payload);
        resolve("添加新的商品");
      }
    });
  }
};
