<template>
  <section>
    <h2>Color Designer</h2>
    <slider></slider>
  </section>
</template>

<script>
import Slider from "./slider.vue";
export default {
  name: "colorDesigner",
  components: {
    slider: Slider,
  },
};
</script>

<style></style>
