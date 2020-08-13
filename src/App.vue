<template>
  <div class="container neu-1">
    <header>
      <h1>Color Pad</h1>
      <h4>Use the sliders to choose a color</h4>
    </header>
    <color-designer></color-designer>
    <palette-display></palette-display>
  </div>
</template>

<script>
import colorDesigner from "./components/colorDesigner.vue";
import paletteDisplay from "./components/paletteDisplay";

const app = {
  name: "App",
  components: {
    "color-designer": colorDesigner,
    "palette-display": paletteDisplay,
  },
};
export default app;
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  background-color: #222;
  color: #ddd;
}

.container {
  width: 80vw;
  margin: 4rem auto;
  padding: 1.5rem;
  /* border: 2px solid #ddd; */
}

header {
  padding-bottom: 2rem;
}

section {
  width: 100%;
  height: 40%;
}

h2 {
  font-weight: 500;
}

h4 {
  font-weight: 400;
  font-size: 0.9rem;
}

.neu-1 {
  border-radius: 20px;
  background: #222222;
  box-shadow: 29px 29px 59px #1c1c1c, -29px -29px 59px #282828;
}
</style>
