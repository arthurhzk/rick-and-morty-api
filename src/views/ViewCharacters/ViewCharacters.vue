<template>
  <CharacterSearch
    v-model.trim="storeCharacters.name"
    @keyup.enter="storeCharacters.getAllCharacters(storeCharacters.name)"
  />
  <div v-if="!storeCharacters.loading">
    <div v-if="storeCharacters.characters && storeCharacters.characters.length">
      <div class="grid grid-cols-4 gap-4">
        <div
          v-for="character in storeCharacters.characters"
          :key="character.id"
          class="card"
        >
          <Character :character="character" />
        </div>
      </div>
    </div>
  </div>
  <Loading v-else />
</template>

<script>
import CharacterSearch from "@/components/Layout/Characters/CharacterSearch.vue";
import useStoreCharacters from "@/stores/storeCharacters";
import Character from "@/components/Layout/Characters/Character.vue";
import Loading from "@/components/Layout/Shared/Loading.vue";
export default {
  name: "ViewCharacters",
  components: {
    CharacterSearch,
    Character,
    Loading,
  },
  setup() {
    const storeCharacters = useStoreCharacters();
    return {
      storeCharacters,
    };
  },
  mounted: function () {
    this.storeCharacters.getAllCharacters();
  },
};
</script>
