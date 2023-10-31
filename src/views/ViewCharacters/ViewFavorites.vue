<template>
  <div class="flex items-center flex-col">
    <img src="@/assets/favorites.png" alt="" />
    <div class="grid grid-cols-4 gap-4">
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
