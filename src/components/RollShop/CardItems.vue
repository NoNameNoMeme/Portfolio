<template>
  <div class="cards">
    <div class="cards__wrapper">
      <card-item
        v-for="roll in rolls"
        v-bind:key="roll.id"
        v-bind:roll="roll"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import CardItem from "@/components/RollShop/CardItem.vue";

export default {
  components: {
    CardItem,
  },
  props: {
    rolls: {
      type: Array,
      required: true,
    },
  },
  methods: {
    addToCart(cartRoll) {
      this.$emit("addToCart", cartRoll);
    },
  },
};
</script>

<style scoped>
.cards {
  width: 70%;
}

.cards__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
