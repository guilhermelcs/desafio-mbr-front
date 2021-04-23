import { createWebHistory, createRouter } from "vue-router";
import Cadastro from "../pages/Cadastro.vue";
import Brindes from "../pages/Brindes.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Cadastro,
    },
    {
      path: "/cadastro",
      name: "Cadastro",
      component: Cadastro,
    },
    {
      path: "/brindes",
      name: "Brindes",
      component: Brindes,
    }
  ],
});

export default router;