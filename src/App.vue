<template>
  <div class="container neu-1">
    <header>
      <h1 v-on:click="colorfulTitleAnimation">
        <span
          class="outline-title"
          v-for="(letter, i) in title"
          :key="i"
          :style="{ color: generatedArray[i] }"
          >{{ letter }}</span
        >
      </h1>
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
        { id: 1, colorCss: "background-color: rgb(255, 255, 255)" },
        { id: 2, colorCss: "background-color: rgb(255, 0, 150)" },
      ],
      title: "Color Pad",
      generatedArray: [],
    };
  },
  components: {
    "color-designer": colorDesigner,
    "palette-display": paletteDisplay,
  },
  created() {
    // eslint-disable-next-line prettier/prettier
    eventBus.$on("saveColor", (rgb) => {
      const idNum = Math.floor(Math.random() * 1000 + 1);
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
    this.colorfulTitleAnimation();
  },
  methods: {
    generateColor() {
      let randNum = () => {
        return Math.floor(100 + Math.random() * 155);
      };
      return `rgb(${randNum()}, ${randNum()}, ${randNum()})`;
    },
    colorfulTitleAnimation() {
      let clearBlink = setInterval(() => {
        for (let i = 0; i < this.title.length; i++) {
          this.generatedArray.push(this.generateColor());
          setTimeout(() => {
            this.generatedArray = [];
          }, 290);
        }
      }, 300);
      setTimeout(() => {
        clearInterval(clearBlink);
      }, 1200);
    },
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
  width: 70vw;
  margin: 2.1rem auto;
  padding: 1rem 3rem;
  /* border: 2px solid #ddd; */
}

header {
  padding-bottom: 1.5rem;
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
.outline-title {
  font-size: 2.4rem;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
</style>
