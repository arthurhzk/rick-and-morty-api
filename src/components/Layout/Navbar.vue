<template>
  <nav class="flex justify-between items-center ml-11 mr-11">
    <router-link to="/">
      <img src="src/assets/main-title.png" alt="rick and morty logo"
    /></router-link>

    <div class="nav-color">
      <RouterLink to="/" class="mr-4">Characters</RouterLink>

      <RouterLink to="/favorites" class="mr-4">Favorites</RouterLink>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNav",
};
</script>

<style scoped>
.nav-color {
  color: #87f54e;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: IBM Plex Mono;
  font-size: 24px;
}
</style>
