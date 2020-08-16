<template>
  <section>
    <h2>Your Colors</h2>
    <h4>Click to delete</h4>
    <div id="savedColors">
      <transition-group name="slide" @before-leave="beforeLeave" appear>
        <div
          class="savedColor"
          v-for="color in savedColors"
          :key="color.id"
          :style="color.colorCss"
          @click="deleteColor(color.id)"
        >
          <span class="rgbFormat">{{ color.colorCss.split(":")[1] }}</span>
        </div>
      </transition-group>
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
    beforeLeave(el) {
      const { marginLeft, marginTop, width, height } = window.getComputedStyle(
        el
      );
      el.style.left = `${el.offsetLeft - parseFloat(marginLeft, 10)}px`;
      el.style.top = `${el.offsetTop - parseFloat(marginTop, 10)}px`;
      el.style.width = width;
      el.style.height = height;
    },
  },
};
</script>

<style>
#savedColors > span {
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
.savedColor:hover {
  border: 1px solid #333;
}
.rgbFormat {
  background-color: rgba(50, 50, 50, 0.5);
  border-radius: 20px;
  width: 6rem;
  text-align: center;
}

.slide-enter {
  transform: translateY(-25px);
  opacity: 0;
}
.slide-enter-active {
  transition: all 250ms ease-in-out;
}
.slide-leave-active {
  transition: all 250ms ease-in-out;
  position: absolute;
}
.slide-leave-to {
  transform: translateY(25px);
  opacity: 0;
}
.slide-move {
  transition: all 250ms ease-in-out;
}
</style>
