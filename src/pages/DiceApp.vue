<template>
  <div class="dice-app">
    <dice-container />
  </div>
</template>

<script>
import DiceContainer from "@/components/Dice/DiceContainer";
export default {
  components: {
    DiceContainer,
  },
};
</script>

<style scoped>
.dice-app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
}
</style>
