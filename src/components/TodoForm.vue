<template>
  <div class="todoForm">
    <p class="todoForm__title">Какую задачу добавим?</p>
    <form @submit.prevent>
      <div class="todoForm__wrapper">
        <input
          class="todoForm__input"
          v-model="todoText"
          type="text"
          placeholder="Например, придумать стартап"
        />
        <button @click="addToList" class="todoForm__btn">+</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoText: "",
      todoItem: {},
    };
  },
  methods: {
    addToList() {
      this.todoItem = {
        id: Date.now(),
        text: this.todoText,
        isDone: false,
      };
      this.$emit("addToList", this.todoItem);
      this.todoText = "";
    },
  },
};
</script>

<style scoped>
.todoForm {
  padding: 10px 20px;
}

.todoForm__title {
  color: #727272;

  margin-bottom: 7px;
}

.todoForm__wrapper {
  display: flex;
  justify-content: space-between;
}

.todoForm__input {
  width: 90%;
  padding: 10px;
  font-family: inherit;
  border: 0.8px solid rgb(187, 186, 186);
  border-radius: 5px;
  outline: none;
  transition: border linear 0.2s;
}

.todoForm__input:hover {
  border: 1px solid #000;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.todoForm__input:focus {
  border: 1px solid #000;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.todoForm__btn {
  width: 37px;

  font-family: inherit;
  border: 0.8px solid rgb(187, 186, 186);
  border-radius: 5px;
  outline: none;

  cursor: pointer;
  transition: border linear 0.2s;
}

.todoForm__btn:hover {
  border: 1px solid #000;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}
</style>
