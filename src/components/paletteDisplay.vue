<template>
  <section>
    <h2>Your Colors</h2>
    <h4>Click the color to copy the rgb value</h4>
    <div id="savedColors">
      <transition-group name="slide" @before-leave="beforeLeave" appear>
        <div
          class="savedColor"
          v-for="color in savedColors"
          :key="color.id"
          :style="color.colorCss"
          @mouseover="showDelete = true"
          @mouseleave="showDelete = false"
          @click="copyText($event, true)"
        >
          <span class="rgbFormat">{{ color.colorCss.split(":")[1] }}</span>
          <button
            v-if="showDelete"
            @click="
              deleteColor(color.id);
              copyText($event, false);
            "
            class="btn-delete"
          >
            x
          </button>
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
  data: function() {
    return {
      showDelete: false,
    };
  },
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
    copyText(el, allow) {
      //copy to clipboard, can only do inside of textareas/inputs
      console.log(el, allow);
      if (allow) {
        let textArea = document.createElement("textarea");
        textArea.value = el.target.querySelector("span").innerHTML;
        textArea.setAttribute("readonly", "");
        textArea.style.position = "absolute";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
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
  position: relative;
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
.btn-delete {
  font-weight: 900;
  font-size: 1.5rem;
  color: #222222;
  background-color: red;
  padding: 0px 12px;
  padding-bottom: 4px;
  cursor: pointer;
  position: absolute;
  left: 28%;
  bottom: -20px;
  border: 1px solid black;
  border-radius: 5px;
  transition: transform 250ms ease-in-out;
}
.btn-delete:hover {
  transform: scale(1.2, 1.2);
  transition: transform 250ms ease-in-out;
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
