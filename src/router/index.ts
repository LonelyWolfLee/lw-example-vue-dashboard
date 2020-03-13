import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import(/* webpackChunkName: "about" */ "../views/Profile.vue")
  },
  {
    path: "/vacation",
    name: "vacation",
    component: () => import(/* webpackChunkName: "about" */ "../views/Vacation.vue")
  },
  {
    path: "/configure",
    name: "configure",
    component: () => import(/* webpackChunkName: "about" */ "../views/Configure.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
