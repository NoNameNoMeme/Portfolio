<template>
  <div class="counter">
    <div class="counter__wrapper">
      <div class="counter__active" v-on:click="minusButton">-</div>
      <div class="counter__current">
        {{ counter }}
      </div>
      <div class="counter__active" v-on:click="plusButton">+</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    counter: {
      type: Number,
    },
  },
  methods: {
    plusButton() {
      this.$emit("plusButton");
    },
    minusButton() {
      this.$emit("minusButton");
    },
  },
};
</script>

<style scoped>
.counter__wrapper {
  display: flex;

  background: #fff;
  text-align: center;
  border-radius: 5px;
  align-items: center;
  overflow: hidden;
  border: 1px solid #000;
  justify-content: center;
  text-align: center;
}

.counter__active {
  width: 40px;
  height: 30px;
  cursor: pointer;
  user-select: none;
}

.counter__active:hover {
  background: #eb5a1e;
  color: #fff;
}

.counter__current {
  width: 40px;
  height: 30px;
}
</style>
