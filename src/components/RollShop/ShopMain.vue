<template>
  <div class="main">
    <div class="main__wrapper">
      <card-items v-bind:rolls="rolls" @addToCart="addToCart" />
      <shopping-cart
        v-bind:basketItems="basketItems"
        @deleteFromCart="deleteFromCart"
        @plusButton="plusButton"
        @minusButton="minusButton"
      />
    </div>
  </div>
</template>

<script>
import ShoppingCart from "@/components/RollShop/ShoppingCart.vue";
import CardItems from "@/components/RollShop/CardItems.vue";
export default {
  components: {
    ShoppingCart,
    CardItems,
  },
  props: {
    rolls: {
      type: Array,
      required: true,
    },
    basketItems: {
      type: Array,
    },
  },
  methods: {
    addToCart(cartRoll) {
      this.$emit("addToCart", cartRoll);
    },
    deleteFromCart(cartId) {
      this.$emit("deleteFromCart", cartId);
    },
    plusButton(basketItem) {
      this.$emit("plusButton", basketItem);
    },
    minusButton(basketItem) {
      this.$emit("minusButton", basketItem);
    },
  },
};
</script>

<style scoped>
.main__wrapper {
  display: flex;
}
</style>
