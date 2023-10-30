<template>
  <the-nav></the-nav>
  <RouterView />
</template>

<script>
import TheNav from "./components/Layout/Navbar.vue";
export default {
  name: "App",
  components: {
    TheNav,
  },
};
</script>

<style></style>
