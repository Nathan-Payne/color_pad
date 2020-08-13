<template>
  <section>
    <h2>Your Colors</h2>
    <h4>Click to delete</h4>
    <div id="savedColors">
      <div
        class="savedColor"
        v-for="color in savedColors"
        :key="color.id"
        :style="color.colorCss"
        @click="deleteColor(color.id)"
      >
        <span class="rgbFormat">{{ color.colorCss.split(":")[1] }}</span>
      </div>
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
  margin-top: 1.1rem;
  padding-left: 1.5rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, 6rem);
}
.savedColor {
  height: 4.5rem;
  width: 6.5rem;
  border: 2px solid black;
  border-radius: 1rem;
  cursor: pointer;
  display: grid;
  place-items: center;
  text-shadow: 1px 1px black;
  font-size: 0.7rem;
}
.rgbFormat {
  background-color: rgba(50, 50, 50, 0.5);
  border-radius: 20px;
  width: 6rem;
  text-align: center;
}
</style>
