import { defineStore } from "pinia";
import axios from "axios";

const useStoreCharacters = defineStore("storeCharacters", {
  state: () => {
    return {
      characters: [],
      name: "",
      loading: false,
      character: {},
      favorites: [],
    };
  },
  actions: {
    async getAllCharacters() {
      this.loading = true;
      let url = `https://rickandmortyapi.com/api/character/`;
      if (this.name) {
        url += `?name=${this.name}`;
      }
      try {
        await axios.get(url).then((response) => {
          this.characters = response.data.results;
          this.loading = false;
        });
      } catch (error) {
        this.loading = false;
        return error;
      }
    },
    async getCharacterById(id) {
      this.loading = true;
      let url = `https://rickandmortyapi.com/api/character/${id}`;
      try {
        await axios.get(url).then((response) => {
          this.character = response.data;
          this.loading = false;
        });
      } catch (error) {
        this.loading = false;
        return error;
      }
    },
    addFavorite(character) {
      const alreadyFavorite = this.favorites.find(
        (char) => char.id === character.id
      );
      if (!alreadyFavorite) {
        this.favorites.push(character);
      }
    },
    persist: true,
  },
});

export default useStoreCharacters;
