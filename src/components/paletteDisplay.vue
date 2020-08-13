<template>
  <section>
    <h2>Your Colors</h2>
    <div id="savedColors">
      <div
        class="savedColor"
        v-for="color in savedColors"
        :key="color.id"
        :style="color.colorCss"
        @click="deleteColor(color.id)"
      ></div>
    </div>
  </section>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  name: "paletteDisplay",
  props: ["savedColors"],
  methods: {
    deleteColor(colorId) {
      eventBus.$emit("deleteColor", colorId);
    },
  },
};
</script>

<style>
#savedColors {
  margin-top: 2rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, 5rem);
}
.savedColor {
  height: 5rem;
  width: 5rem;
  border: 2px solid black;
  border-radius: 1rem;
}
</style>
