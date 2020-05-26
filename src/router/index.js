import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import People from "../views/People.vue";

import Planets from "../views/Planets.vue";
import Films from "../views/Films.vue";
import Species from "../views/Species.vue";

import Vehicles from "../views/Vehicles.vue";
import Starships from "../views/Starships.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path:'/people/:id',
    name: "people",
    props: true,
    component: People
  },
  {
    path:'/planets',
    name: "planets",
    component: Planets
  },
  {
    path:'/films',
    name: "films",
    component: Films
  },
  {
    path:'/species',
    name: "species",
    component: Species
  },
  {
    path:'/vehicles',
    name: "vehicles",
    component: Vehicles
  },
  {
    path:'/starships',
    name: "starships",
    component: Starships
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
