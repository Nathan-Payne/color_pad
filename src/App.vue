<template>
  <div class="container neu-1">
    <header>
      <h1>Color Pad</h1>
      <h4>Use the sliders to choose a color</h4>
    </header>
    <color-designer></color-designer>
    <palette-display :savedColors="savedColors"></palette-display>
  </div>
</template>

<script>
import colorDesigner from "./components/colorDesigner.vue";
import paletteDisplay from "./components/paletteDisplay";
import { eventBus } from "./main.js";

const app = {
  name: "App",
  data: function() {
    return {
      savedColors: [
        { id: 1, colorCss: "background-color: rgb(100, 200, 150)" },
        { id: 2, colorCss: "background-color: rgb(355, 0, 150)" },
      ],
    };
  },
  components: {
    "color-designer": colorDesigner,
    "palette-display": paletteDisplay,
  },
  created() {
    // eslint-disable-next-line prettier/prettier
    eventBus.$on("saveColor", (rgb) => {
      const idNum = this.savedColors.length + 1;
      this.savedColors.push({
        id: idNum,
        colorCss: `background-color: rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`,
      });
    });
    eventBus.$on("deleteColor", (colorId) => {
      this.savedColors = this.savedColors.filter(
        (colorObject) => colorObject.id !== colorId
      );
    });
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
  margin: 3rem auto;
  padding: 1.5rem;
  /* border: 2px solid #ddd; */
}

header {
  padding-bottom: 2rem;
}

section {
  width: 100%;
  height: 40%;
  padding-bottom: 0.5rem;
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
