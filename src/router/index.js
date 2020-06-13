import Vue from "vue";
import VueRouter from "vue-router";
import People from "../components/People.vue";

import Planets from "../components/Planets.vue";
import Films from "../components/Films.vue";
import Species from "../components/Species.vue";

import Vehicles from "../components/Vehicles.vue";
import Starships from "../components/Starships.vue";

import singleFilm from "../components/singleFilm.vue";
import singlePerson from "../components/singlePerson.vue";

import singlePlanet from "../components/singlePlanet.vue";
import singleSpecie from "../components/singleSpecie.vue";

import singleVehicle from "../components/singleVehicle.vue";
import singleStarship from "../components/singleStarship.vue";

import wplayground from "../components/wplayground.vue";
import registration from "../components/registration.vue";
import signin from "../components/signin.vue";

import updateName from "../components/updateName.vue";

import updatePassword from "../components/updatePassword.vue";

import logHistory from "../components/logHistory.vue";
import messages from "../components/messages.vue";

import message from "../components/message.vue";

import logout from "../components/logout.vue";

Vue.use(VueRouter);

const routes = [
  
  {
    path: "/people/",
    name: "people",
    props: true,
    component: People
  },
  {
    path: "/people/:id",
    name: "people",
    component: singlePerson
  },
  {
    path: "/planets",
    name: "planets",
    component: Planets
  },
  {
    path: "/planets/:id",
    name: "planets",
    component: singlePlanet
  },
  
  {
    path: "/films",
    name: "films",
    component: Films
  },
  {
    path: "/films/:id",
    name: "films",
    component: singleFilm
  },
  {
    path: "/species",
    name: "species",
    component: Species
  },
  {
    path: "/species/:id",
    name: "species",
    component: singleSpecie
  },
  {
    path: "/vehicles",
    name: "vehicles",
    component: Vehicles
  },
  {
    path: "/vehicles/:id",
    name: "vehicles",
    component: singleVehicle
  },
  {
    path: "/starships",
    name: "starships",
    component: Starships
  },
  {
    path: "/starships/:id",
    name: "starships",
    component: singleStarship
  },
  {
    path: "/wplayground",
    name: "wplayground",
    component: wplayground
  },
  {
    path: "/registration",
    name: "registration",
    component: registration
  },
  {
    path: "/signin",
    name: "signin",
    component: signin
  },
  {
    path: "/updateName",
    name: "updateName",
    component: updateName
  },
  {
    path: "/updatePassword",
    name: "updatePassword",
    component: updatePassword
  },
  {
    path: "/logHistory",
    name: "logHistory",
    component: logHistory
  },
  {
    path: "/messages",
    name: "messages",
    component: messages
  },
  {
    path: "/message/:login",
    name: "message",
    component:message
  },
   {
    path: "/logout",
    name: "logout",
    component:logout
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
