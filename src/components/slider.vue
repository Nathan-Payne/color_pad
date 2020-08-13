<template>
  <div class="slider">
    <input type="range" name="Red" min="0" max="255" v-model="value" />
    <label for="Red">
      R: <span>{{ value }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "slider",
  data() {
    return {
      value: 0,
    };
  },
};
</script>

<style scoped>
.slider {
  position: relative;
  height: 12rem;
  width: 30%;
}

input[type="range"] {
  -webkit-appearance: none;
  position: absolute;
  bottom: 50%;
  left: 20%;
  cursor: pointer;
  transform: rotate(270deg);
  background-color: transparent;
}

input[type="range"]::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  cursor: pointer;
  height: 0.5rem;
  background-color: red;
  border-radius: 20px;
  border: 0.2px solid #010101;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: white;
  border: 1px solid black;
  margin-top: -7px;
}

label {
  position: absolute;
  bottom: 5%;
  left: 46%;
}
</style>
