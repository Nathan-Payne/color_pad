<template>
  <section>
    <h2>Color Designer</h2>
    <h4>Click to store color</h4>
    <div id="designer-main">
      <div class="color-show-group">
        <div class="color-show" :style="currentColor" @click="saveColor"></div>
      </div>
      <div class="slider-group">
        <color-slider
          :sliderColor="'red'"
          @colorVal="rgb.red = $event"
        ></color-slider>
        <color-slider
          :sliderColor="'green'"
          @colorVal="rgb.green = $event"
        ></color-slider>
        <color-slider
          :sliderColor="'blue'"
          @colorVal="rgb.blue = $event"
        ></color-slider>
      </div>
    </div>
  </section>
</template>

<script>
import Slider from "./slider.vue";
import { eventBus } from "../main.js";

export default {
  name: "colorDesigner",
  components: {
    "color-slider": Slider,
  },
  data() {
    return {
      sliderColor: "",
      rgb: { red: 0, green: 0, blue: 0 },
    };
  },
  computed: {
    currentColor: function() {
      let r = this.rgb.red;
      let g = this.rgb.green;
      let b = this.rgb.blue;
      return `background-color: rgb(${r}, ${g}, ${b})`;
    },
  },
  methods: {
    saveColor() {
      eventBus.$emit("saveColor", this.rgb);
    },
  },
};
</script>

<style>
#designer-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.color-show-group {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12rem;
}

.color-show {
  width: 7rem;
  height: 7rem;
  border: 2px solid black;
  border-radius: 1rem;
  cursor: pointer;
}

.slider-group {
  display: grid;
  grid-auto-flow: column;
  gap: 0.7rem;
  margin-left: 2rem;
}
</style>
