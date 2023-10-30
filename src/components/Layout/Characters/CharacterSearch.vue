<template>
  <div class="flex items-center justify-center">
    <input
      class="the-input"
      type="text"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Search a character..."
    />
  </div>
</template>

<script>
export default {
  name: "CharacterSearch",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.the-input {
  width: 395px;
  height: 64px;
  border-radius: 15px;
  background: #87f54e;
  color: #4d4d4d;
  font-family: IBM Plex Mono;
  font-size: 24px;
  font-weight: 700;
  line-height: 27px;
}
</style>
