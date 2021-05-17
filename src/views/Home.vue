<template>
  <div id="home">
    <nav-bar class="home-nav">
      <!-- <div slot="left">1</div> -->
      <div slot="center">购物街</div>
      <!-- <div slot="right">3</div> -->
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";
export default {
  name: "Home",
  components: {
    NavBar
  },
  data() {
    return {
      banner: [],
      recommend: []
    };
  },
  created() {
    getHomeMultidata()
      .then(res => {
        console.log(res);
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
        console.log(this.banner);
        console.log(this.recommend);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  text-align: center;
  color: #fff;
}
</style>
