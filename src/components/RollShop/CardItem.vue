<template>
  <div class="roll">
    <div class="roll__wrapper">
      <img
        class="roll_image"
        :src="require(`@/assets/rolls/${roll.src}`)"
        alt=""
      />
      <h4 class="roll__title">{{ roll.name }}</h4>
      <p class="roll__count">6 шт.</p>
      <div class="roll__counter">
        <counter-wrapper
          class="counter-wrapper"
          v-bind:counter="fakeCounter"
          @plusButton="plusButton"
          @minusButton="minusButton"
        />
        <div>
          <p>{{ roll.weight }}г.</p>
          <p>{{ roll.cost }} ₽</p>
        </div>
      </div>
      <add-button v-on:click="addToCart">+ в корзину</add-button>
    </div>
  </div>
</template>

<script>
import CounterWrapper from "@/components/UI/CounterWrapper.vue";
import AddButton from "@/components/UI/AddButton.vue";

export default {
  components: { CounterWrapper, AddButton },
  props: {
    roll: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      cartRoll: {
        cost: this.roll.cost,
        id: this.roll.id,
        name: this.roll.name,
        src: this.roll.src,
        weight: this.roll.weight,
        counter: 0,
      },
      fakeCounter: 1,
    };
  },
  methods: {
    addToCart() {
      this.cartRoll.counter += this.fakeCounter;
      this.$emit("addToCart", this.cartRoll);
      console.log(this.cartRoll.counter);
      this.fakeCounter = 1;
    },
    plusButton() {
      this.fakeCounter++;
    },
    minusButton() {
      if (this.fakeCounter > 1) {
        this.fakeCounter--;
      }
    },
  },
};
</script>

<style scoped>
.roll {
  margin-bottom: 30px;
}

.roll__wrapper {
  width: 348px;
  max-height: 100%;
  height: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  border: 1px solid rgb(122, 122, 122);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border-radius: 10px;
}

.roll_image {
  width: 265px;
}

.roll__title {
  height: 70px;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 30px;
}

.roll__count {
  margin-bottom: 30px;
}

.roll__counter {
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin-bottom: 10px;
  border: 1px solid #000;
  padding: 10px 20px;
  align-items: center;
  border-radius: 5px;
}

.counter-wrapper {
  width: 120px;
}
</style>
