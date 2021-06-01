<template>
  <div class="bottom_bar">
    <div class="check_content">
      <check-button
        :is-checked="isSelectAll"
        class="check_box"
        @click.native="checkClick"
      />
      <span>全选</span>
    </div>
    <div class="price">合计:￥{{ totalPrice }}</div>
    <div class="calculate" @click="calcClick">去计算:({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  data() {
    return {};
  },
  components: {
    CheckButton
  },
  computed: {
    // 注意分号
    ...mapGetters(["cartList", "cartLength"]),
    totalPrice() {
      return this.cartList
        .filter(item => {
          return item.checked;
        })
        .reduce((total, current) => {
          return total + current.count * current.price;
        }, 0)
        .toFixed(2);
    },
    checkLength() {
      return this.cartList.filter(item => item.checked).length;
    },
    isSelectAll() {
      // 取没被选中的对象,若没被选的对象数量不为0,则返回false
      // if (this.cartLength === 0) return false;
      // return !this.cartList.filter(item => !item.checked).length;
      // if (this.cartLength === 0) return false;
      // return !this.cartList.find(item => !item.checked);
      if (this.cartLength === 0) return false;
      return this.cartList.every(item => item.checked === true);
    }
  },
  methods: {
    checkClick() {
      // if (this.isSelectAll) {
      //   this.cartList.forEach(item => {
      //     item.checked = false;
      //   });
      // } else {
      //   this.cartList.forEach(item => (item.checked = true));
      // }
      this.isSelectAll
        ? this.cartList.forEach(item => (item.checked = false))
        : this.cartList.forEach(item => (item.checked = true));
    },
    calcClick() {
      // if (!this.isSelectAll) this.$toast.show("请选择购买的商品", 2000);
      if (this.cartList.every(item => item.checked === false)) {
        this.$toast.show("请选择购买的商品", 2000);
      }
    }
  }
};
</script>

<style scoped>
.bottom_bar {
  display: flex;
  height: 40px;
  background-color: #eee;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
}
.check_content {
  display: flex;
  align-items: center;
  height: 100%;
}
.check_box {
  display: flex;

  justify-content: center;
  align-items: center;
  margin-right: 5px;
}
.calculate {
  padding: 0 10px;
  background-color: rgb(255, 0, 43);
  height: 100%;
  line-height: 40px;
  text-align: center;
  color: #fff;
}
</style>
