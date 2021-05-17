import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("../views/Home");
const Home1 = () => import("../views/Home1");
const Home2 = () => import("../views/Home2");
const Home3 = () => import("../views/Home3");
Vue.use(VueRouter);

const routes = [
  // {
  //   path: "",
  //   redirect: "/home"
  // },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/home1",
    component: Home1
  },
  {
    path: "/home2",
    component: Home2
  },
  {
    path: "/home3",
    component: Home3
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
