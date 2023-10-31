<template>
  <section
    class="flex items-center justify-center"
    v-if="!storeCharacters.loading"
  >
    <div class="container rounded-lg">
      <div class="flex">
        <img
          class="rounded-lg"
          :src="storeCharacters.character.image"
          :alt="storeCharacters.character.name"
        />
        <div class="p-8">
          <h3>{{ storeCharacters.character.name }}</h3>
          <p>Species: {{ storeCharacters.character.species }}</p>
          <p>Status: {{ storeCharacters.character.status }}</p>
          <p>Gender: {{ storeCharacters.character.gender }}</p>
          <p>Location: {{ storeCharacters.character.origin?.name }}</p>
          <p>Origin: {{ storeCharacters.character.location?.name }}</p>
        </div>
      </div>
      <div class="flex items-center flex-wrap gap-4 p-4">
        <h3>Appears on episode:</h3>
        <div v-for="episode in episodes">
          <h3>{{ episode }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import useStoreCharacters from "@/stores/storeCharacters";

export default {
  name: "ViewCharacterDetail",
  setup() {
    const storeCharacters = useStoreCharacters();
    return {
      storeCharacters,
    };
  },
  methods: {
    async getCharacter() {
      const charId = this.$route.params.id;
      await this.storeCharacters.getCharacterById(charId);
    },
  },
  computed: {
    episodes() {
      let episodes = [];
      this.storeCharacters.character.episode?.forEach((ep) => {
        episodes.push(ep.split("/").pop());
      });
      episodes.sort((a, b) => a - b);
      return episodes;
    },
  },
  mounted() {
    this.getCharacter();
    console.log(this.storeCharacters.character);
  },
};
</script>
<style scoped>
.container {
  width: 960px;
  height: 520px;
  background-color: gray;
}
</style>

<style scoped>
h3 {
  color: #87f54e;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: IBM Plex Mono;
  font-size: 24px;
}
</style>
