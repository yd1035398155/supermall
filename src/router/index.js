import Vue from "vue";
import VueRouter from "vue-router";

const Home1 = () => import("../views/Home1");
const Home2 = () => import("../views/Home2");
const Home3 = () => import("../views/Home3");
const Home4 = () => import("../views/Home4");
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home1"
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
  },
  {
    path: "/home4",
    component: Home4
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
