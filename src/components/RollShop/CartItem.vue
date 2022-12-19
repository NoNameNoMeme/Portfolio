<template>
  <div>
    <div class="cartItem">
      <div class="cartItem__top">
        <div>
          <img
            class="cartItem__image"
            :src="require('@/assets/rolls/' + basketItem.src)"
            alt=""
          />
        </div>
        <div class="cartItem__info">
          <p>{{ basketItem.name }}</p>
          <p>6 шт. / {{ basketItem.weight }} г.</p>
          <div class="info__cost">
            <counter-wrapper
              class="counter-wrapper counter-wrapper--small"
              v-bind:counter="basketItem.counter"
              @plusButton="plusButton"
              @minusButton="minusButton"
            />
            <p>{{ basketItemCost() }} ₽</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CounterWrapper from "@/components/UI/CounterWrapper.vue";
export default {
  props: {
    basketItem: {
      type: Object,
    },
  },
  components: {
    CounterWrapper,
  },
  methods: {
    plusButton() {
      this.$emit("plusButton", this.basketItem);
    },
    minusButton() {
      this.$emit("minusButton", this.basketItem);
    },
    basketItemCost() {
      return this.basketItem.cost * this.basketItem.counter;
    },
  },
};
</script>

<style scoped>
.cartItem {
  border-bottom: 1px solid rgb(187, 184, 184);
  margin-bottom: 20px;
}

.cartItem__image {
  width: 100px;
}

.cartItem__top {
  display: flex;
  align-items: flex-start;
}

.cartItem__info {
  padding-top: 10px;
  padding-left: 10px;
}

.counter-wrapper--small {
  width: 90px;
  height: 25px;
}

.info__cost {
  display: flex;
  justify-content: space-between;
}
</style>
