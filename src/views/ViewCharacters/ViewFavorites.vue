<template>
  <div class="flex items-center flex-col">
    <img src="@/assets/favorites.png" alt="" />
    <div
      v-if="storeCharacters.favorites.length > 0"
      class="grid grid-cols-4 gap-4"
    >
      <Character
        v-for="(character, index) in storeCharacters.favorites"
        :character="character"
        :key="character.id"
      >
        <template v-slot:default>
          <i
            @click="removeFromFavorites(index)"
            class="fas fa-trash items-center text-red-800 cursor-pointer"
          ></i>
        </template>
      </Character>
    </div>
    <h1 v-else class="empty-text">
      There doesn't seem to be anything to<br />
      show here currently, if you see a <br />
      character you want to add to <br />
      favorites, hit the white star so you <br />
      can see them here.
    </h1>
  </div>
</template>
<script>
import Character from "@/components/Layout/Characters/Character.vue";
import useStoreCharacters from "@/stores/storeCharacters";
export default {
  name: "ViewFavorites",
  components: {
    Character,
  },
  setup() {
    const storeCharacters = useStoreCharacters();
    return {
      storeCharacters,
    };
  },
  methods: {
    removeFromFavorites(index) {
      this.storeCharacters.favorites.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.empty-text {
  color: #fff;
  text-align: center;
  font-family: IBM Plex Mono;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
</style>
