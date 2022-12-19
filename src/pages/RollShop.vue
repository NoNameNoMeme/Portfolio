<template>
  <div class="container">
    <shop-header />
    <shop-main
      v-bind:rolls="rolls"
      v-bind:basketItems="basketItems"
      @addToCart="addToCart"
      @deleteFromCart="deleteFromCart"
      @plusButton="plusButton"
      @minusButton="minusButton"
    />
  </div>
</template>

<script>
import ShopHeader from "@/components/RollShop/ShopHeader.vue";
import ShopMain from "@/components/RollShop/ShopMain.vue";
export default {
  components: {
    ShopHeader,
    ShopMain,
  },
  data() {
    return {
      rolls: [
        {
          id: 1,
          name: "Филадельфия хит ролл",
          cost: 300,
          weight: 180,
          src: "philadelphia.jpg",
        },
        {
          id: 2,
          name: "Калифорния темпура",
          cost: 250,
          weight: 205,
          src: "california-tempura.jpg",
        },
        {
          id: 3,
          name: "Запеченный ролл 'Калифорния'",
          cost: 230,
          weight: 182,
          src: "zapech-california.jpg",
        },
        {
          id: 4,
          name: "Калифорния 'Хит'",
          cost: 250,
          weight: 230,
          src: "california-hit.jpg",
        },
      ],
      basketItems: [],
    };
  },
  methods: {
    addToCart(cartRoll) {
      if (this.basketItems.length) {
        let rollExists = false;
        this.basketItems.forEach((rollInBasket) => {
          if (rollInBasket.id === cartRoll.id) {
            rollExists = true;
          }
        });
        if (!rollExists) {
          this.basketItems.push(cartRoll);
        }
      } else {
        this.basketItems.push(cartRoll);
      }
      /* if (this.basketItems.length) {
        let isRollExists = false;
        this.basketItems.forEach((roll) => {
          if (roll.id === cartRoll.id) {
            isRollExists = true;
            roll.counter += cartRoll.counter;
          }
        });
        if (!isRollExists) {
          this.basketItems.push(cartRoll);
        }
      } else {
        this.basketItems.push(cartRoll);
      } */
    },
    deleteFromCart(cartId) {
      this.basketItems.filter((item) => item.id != cartId);
    },
    plusButton(basketItem) {
      basketItem.counter++;
    },
    minusButton(basketItem) {
      basketItem.counter--;

      if (basketItem.counter === 0) {
        console.log("Тут нужно удалить");
        const index = this.basketItems.findIndex(
          (item) => item.id === basketItem.id
        );
        if (index !== -1) {
          this.basketItems.splice(index, 1);
        }
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 1140px;
  margin: 0 auto;
}
</style>
