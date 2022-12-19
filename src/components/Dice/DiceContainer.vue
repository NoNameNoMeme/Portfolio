<template>
  <div class="dice-container">
    <h2 class="dice__title">Игра в кости</h2>
    <dice-wrapper
      class="dice__dices"
      :dices="dices"
      v-bind:first="firstDice"
      v-bind:second="secondDice"
    />
    <p class="dice__score">Выпало: {{ score }}</p>
    <button class="btn btn-border-3" @click="roll">Крутить</button>
  </div>
</template>

<script>
import DiceWrapper from "@/components/Dice/DiceWrapper.vue";
export default {
  components: {
    DiceWrapper,
  },
  data() {
    return {
      dices: [
        "dice-one.svg",
        "dice-two.svg",
        "dice-three.svg",
        "dice-four.svg",
        "dice-five.svg",
        "dice-six.svg",
      ],
      firstDice: 1,
      secondDice: 1,
    };
  },
  methods: {
    roll() {
      this.firstDice = Math.ceil(Math.random() * 6);
      this.secondDice = Math.ceil(Math.random() * 6);
    },
  },
  computed: {
    score() {
      let value = 0;
      value = this.firstDice + this.secondDice;
      return value;
    },
  },
};
</script>

<style scoped>
.dice-container {
  width: 400px;
  border: 1px solid rgb(130, 130, 130);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  padding: 10px 30px;

  background: #fff;
  border-radius: 15px;

  display: flex;
  align-items: center;
  flex-direction: column;
}

.dice__title {
  text-align: center;
  font-size: 36px;
  font-weight: 700;

  border-bottom: 1px solid #eee;

  padding: 10px 0;
  margin-bottom: 30px;
}

.dice__dices {
  margin-bottom: 30px;
}

.dice__score {
  font-size: 24px;
  margin-bottom: 20px;
}

.dice__btn {
  font-family: inherit;
  cursor: pointer;
  background: #fff;
  width: 30%;
  padding: 10px 20px;
}

.btn {
  font-family: inherit;
  position: relative;
  display: inline-block;
  margin: 15px;
  padding: 12px 27px;
  text-align: center;
  font-size: 16px;
  letter-spacing: 1px;
  text-decoration: none;
  color: #999999;
  background: #ffffff;
  border: 3px solid #999999;
  cursor: pointer;
  transition: ease-out 0.5s;
  -webkit-transition: ease-out 0.5s;
  -moz-transition: ease-out 0.5s;
}

.btn.btn-border-3::after,
.btn.btn-border-3::before {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  transition: 0.5s;
}

.btn.btn-border-3::after {
  top: -9px;
  left: -9px;
  border-top: 3px solid transparent;
  border-left: 3px solid transparent;
}

.btn.btn-border-3::before {
  bottom: -9px;
  right: -9px;
  border-bottom: 3px solid transparent;
  border-right: 3px solid transparent;
}

.btn.btn-border-3:hover {
  color: #222222;
}

.btn.btn-border-3:hover::after,
.btn.btn-border-3:hover::before {
  width: 30px;
  height: 30px;
  border-color: #222222;
}
</style>
