<template>
  <div class="listItem">
    <div class="listItem__wrapper">
      <div>
        <p :class="`listItem__text ${listItem.isDone && 'done'}`">
          {{ listItem.text }}
        </p>
      </div>
      <div>
        <button class="btn doneBtn" @click="markDone">o</button>
        <button class="btn deleteBtn" @click="deleteTask">x</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listItem: {
      type: Object,
    },
  },
  methods: {
    markDone() {
      this.$emit("markDone", this.listItem);
    },
    deleteTask() {
      this.$emit("deleteTask", this.listItem);
    },
  },
};
</script>

<style scoped>
.listItem {
  border: 1px solid rgb(150, 150, 150);
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}

.listItem__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.listItem__text.done {
  text-decoration: line-through;
  color: #a19898;
}

.btn {
  width: 30px;
  height: 30px;
  font-family: inherit;
  border: 0.8px solid rgb(187, 186, 186);
  border-radius: 5px;
  outline: none;
  background: rgb(240, 240, 240);
  cursor: pointer;
}

.btn:hover {
  background: rgb(231, 227, 227);
}

.doneBtn {
  margin-right: 10px;
}
</style>
