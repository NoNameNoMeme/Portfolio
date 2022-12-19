<template>
  <div class="dice-wrapper">
    <img
      class="dice__item"
      :src="require(`@/assets/Dice/${dices[first - 1]}`)"
      alt=""
    />
    <img
      class="dice__item"
      :src="require(`@/assets/Dice/${dices[second - 1]}`)"
      alt=""
    />
  </div>
</template>

<script>
export default {
  props: {
    dices: Array,
    first: [String, Number],
    second: [String, Number],
  },
};
</script>

<style scoped>
.dice-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.dice__item {
  width: 100px;
  margin: 0 10px;
  border-radius: 10px;
}
</style>
