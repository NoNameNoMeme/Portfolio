<template>
  <div class="todoList" v-if="todoList.length">
    <p class="todoList__title">Список задач:</p>
    <list-item
      v-for="listItem in todoList"
      :key="listItem.id"
      :listItem="listItem"
      @markDone="markDone"
      @deleteTask="deleteTask"
    />
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
export default {
  components: {
    ListItem,
  },
  props: {
    todoList: {
      type: Array,
    },
  },
  methods: {
    markDone(listItem) {
      this.$emit("markDone", listItem);
    },
    deleteTask(listItem) {
      this.$emit("deleteTask", listItem);
    },
  },
};
</script>

<style scoped>
.todoList {
  padding: 10px 20px;
}

.todoList__title {
  font-size: 28px;
  margin-bottom: 10px;
}
</style>
