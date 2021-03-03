import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home"; // Aki vas a ir importando cada una de tus Paginas que van a ser componentes de Vue
import Contact from "../views/Contact";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/home", component: Home }, // Aki pones la ruta de la pagina y el componente que representa
    { path: "/contact", component: Contact },
    { path: "*", redirect: "/home" }
  ]
});