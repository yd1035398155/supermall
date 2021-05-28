<template>
  <div class="comment">
    <div class="tab">
      <div class="inner_tab">
        <div>用户评价</div>
        <div>更多</div>
      </div>
    </div>
    <div class="user_info">
      <span><img :src="comment.avatar" alt=""/></span>
      <span>{{ comment.username }}</span>
    </div>
    <div class="content">{{ comment.content }}</div>
    <div class="data_style">
      <span>{{ comment.created | showDate }}</span>
      <span>{{ comment.style }}</span>
    </div>
    <div class="image">
      <img v-for="(item, index) in comment.images" :src="item" :key="index" />
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";
export default {
  name: "",
  props: {
    comment: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    // transdata(time) {
    //   const date = new Date(time * 1000);
    //   return formatDate(date, "yyyy-mm-dd");
    // },
    showDate(value) {
      //将时间戳转换成date对象
      const date = new Date(value * 1000);
      //将date进行格式化
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    }
  },
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.comment {
  width: 100%;
  font-size: 14px;
  border-bottom: 4px solid #ececec;
}
.tab {
  padding: 0 10px;
}
.inner_tab {
  display: flex;
  justify-content: space-between;
  height: 42px;
  line-height: 42px;
  border-bottom: 1px solid #ececec;
}
.user_info {
  height: 60px;
  line-height: 60px;
}
.user_info span {
  margin: 10px;
}
.user_info img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
}
.content {
  padding: 10px;
}
.data_style {
  border-bottom: 4px solid #fff;
}
.data_style span {
  margin: 10px;
  color: #ccc;
}
.image img {
  width: 70px;
  height: 70px;
  margin-top: 5px;
}
</style>
