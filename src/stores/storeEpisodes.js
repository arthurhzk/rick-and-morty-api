import { defineStore } from "pinia";
import axios from "axios";
const useStoreEpisodes = defineStore("storeEpisodes", {
  state: () => ({
    episodes: [],
    episode: {},
    loading: false,
  }),
  actions: {
    async getEpisodeById(id) {
      this.loading = true;
      const episodeUrl = `https://rickandmortyapi.com/api/episode/${id}`;
      await axios.get(episodeUrl).then((response) => {
        this.episode = response.data;
        this.loading = false;
      });
    },
  },
});

export default useStoreEpisodes;
