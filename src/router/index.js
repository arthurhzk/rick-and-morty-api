import { createRouter, createWebHistory } from "vue-router";
import ViewCharacters from "@/views/ViewCharacters/ViewCharacters.vue";
import ViewCharacterDetail from "@/views/ViewCharacters/ViewCharacterDetail.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "characters",
      component: ViewCharacters,
    },
    {
      path: "/characterDetail/:id",
      name: "characterDetail",
      component: ViewCharacterDetail,
    },
  ],
});

export default router;
