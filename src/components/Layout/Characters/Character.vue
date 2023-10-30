<template>
  <section class="flex justify-center items-center flex-col text-white">
    <h3>{{ character.name }}</h3>
    <RouterLink :to="`/characterDetail/${character.id}`">
      <img class="rounded-lg w-64 h-60" :src="character.image" />
    </RouterLink>
    <h1
      :class="{
        'text-green-500': character.species === 'Alien',
        'text-blue-700': character.species === 'Human',
        'text-orange-500': character.species === 'Humanoid',
        'text-purple-500': character.species === 'Mythological Creature',
        'text-yellow-700': character.species === 'Poopybutthole',
        'text-yellow-500': character.species === 'Animal',
      }"
      class="text-lg text-gray-500 font-light leading-6 pt-2"
    >
      {{ character.species }}
    </h1>
    <h1
      class="text-lg font-light leading-6 pt-2"
      :class="{
        'text-green-500': character.status === 'Alive',
        'text-red-500': character.status === 'Dead',
        'text-blue-500': character.status === 'unknown',
      }"
    >
      {{ character.status }}
    </h1>
  </section>
</template>

<script>
export default {
  name: "CharactersCard",
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.container {
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

h3 {
  color: #87f54e;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: IBM Plex Mono;
  font-size: 24px;
}
</style>
