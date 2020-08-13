<template>
  <section>
    <h2>Color Designer</h2>
    <div id="designer-main">
      <div class="color-show-group">
        <div class="color-show" :style="currentColor"></div>
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
      return `background-color: rgb(${r}, ${g}, ${b})`
    }
  }
};
</script>

<style>
#designer-main {
  display: flex;
  align-items: center;
  margin: 0rem 1rem;
}

.color-show-group {
  flex: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12rem;
}

.color-show {
  width: 9rem;
  height: 9rem;
  border: 1px solid black;
}

.slider-group {
  flex: 8;
  display: flex;
  justify-content: space-around;
  max-width: 50%;
  margin-right: 3rem;
}
</style>
