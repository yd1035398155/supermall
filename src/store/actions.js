import { ADD_COUNTER, ADD_TO_CART } from "./mutation-type";
export default {
  addCart(context, payload) {
    let product = context.state.carList.find(item => item.iid === payload.iid);
    if (product) context.commit(ADD_COUNTER, product);
    else {
      payload.count = 1;
      context.commit(ADD_TO_CART, payload);
    }
  }
};
