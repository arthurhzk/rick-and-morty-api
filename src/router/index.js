import { createRouter, createWebHistory } from "vue-router";
import ViewCharacters from "@/views/ViewCharacters/ViewCharacters.vue";
import ViewCharacterDetail from "@/views/ViewCharacters/ViewCharacterDetail.vue";
import ViewFavorites from "@/views/ViewCharacters/ViewFavorites.vue";
import ViewErrorPage from "@/views/ViewErrorPage.vue";
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
    {
      path: "/favorites",
      name: "favorites",
      component: ViewFavorites,
    },
    {
      path: "/:pathMatch(.*)*",
      component: ViewErrorPage,
    },
  ],
});

export default router;
