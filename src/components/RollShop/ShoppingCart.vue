<template>
  <div class="shopCart">
    <div class="shopCart__inner">
      <h3 class="shopCart__title">Ваш заказ</h3>
      <div v-if="basketItems.length > 0">
        <cart-item
          v-for="basketItem in basketItems"
          v-bind:key="basketItem.id"
          v-bind:basketItem="basketItem"
          @deleteFromCart="deleteFromCart"
          @plusButton="plusButton"
          @minusButton="minusButton"
        />
        <h3 class="shopCart__fullCost">
          Итого: <span class="red">{{ fullCost() }}</span>
        </h3>
        <div class="shopCart__deliveryCost" v-if="fullCost() >= 1000">
          <p class="deliveryCost__title">
            Доставка: <span class="green">бесплатно</span>
          </p>
        </div>
        <div class="shopCart__deliveryCost" v-else>
          <p class="deliveryCost__title">
            Доставка: <span class="red">100 рублей</span>
          </p>
        </div>
        <div class="shopCart__form">
          <p class="form__title">Оформить заказ</p>
          <input
            class="shopCart__input"
            v-model="tel"
            type="tel"
            placeholder="Ваш номер телефона"
          />
        </div>
      </div>
      <div class="shopCart--empty" v-else>
        <p>Заказ пуст :(</p>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/RollShop/CartItem.vue";
export default {
  components: {
    CartItem,
  },
  props: {
    basketItems: {
      type: Array,
    },
  },
  data() {
    return {
      tel: "",
    };
  },
  methods: {
    deleteFromCart(cartId) {
      this.$emit("deleteFromCart", cartId);
    },
    plusButton(basketItem) {
      this.$emit("plusButton", basketItem);
    },
    minusButton(basketItem) {
      this.$emit("minusButton", basketItem);
    },
    fullCost() {
      let sum = 0;
      let mul;
      this.basketItems.forEach((element) => {
        mul = element.counter * element.cost;
        sum += mul;
      });
      return sum;
    },
  },
};
</script>

<style scoped>
.shopCart {
  flex: 1;
}

.shopCart__inner {
  padding: 20px;

  border-radius: 10px;
  border: 1px solid rgb(122, 122, 122);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.shopCart__title {
  margin-bottom: 15px;
}

.shopCart__fullCost {
  margin-bottom: 10px;
}

.shopCart__deliveryCost {
  border-bottom: 1px solid rgb(187, 184, 184);
  margin-bottom: 20px;
}

.deliveryCost__title {
  margin-bottom: 20px;
  font-weight: 600;
}

.red {
  color: rgb(255, 136, 0);
}

.green {
  color: green;
}

.shopCart__input {
  font-family: inherit;
  padding: 10px 20px;
  outline: none;
  border: 1px solid rgb(187, 184, 184);
}

.form__title {
  font-weight: 700;
  margin-bottom: 10px;
}

.shopCart--empty {
  padding: 10px 20px;
  margin-bottom: 10px;
  background: #e2e3e5;
}
</style>
