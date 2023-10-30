<template>
  <section v-if="!storeCharacters.loading">
    <div class="flex items-center">
      <img
        :src="storeCharacters.character.image"
        :alt="storeCharacters.character.name"
      />
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
  mounted() {
    this.getCharacter();
  },
};
</script>
