<template>
  <div class="todo__app">
    <div class="app__container">
      <section class="app__header">
        <h1 class="header__title">ToDo App</h1>
        <h2 class="header__subtitle">
          Привет,
          <input
            class="header__input"
            v-model="name"
            type="text"
            placeholder="[введите имя]"
          />
        </h2>
        <todo-form @addToList="addToList" />
        <todo-list
          :todoList="todoList"
          @markDone="markDone"
          @deleteTask="deleteTask"
        />
      </section>
    </div>
  </div>
</template>

<script>
import TodoForm from "@/components/TodoForm.vue";
import TodoList from "@/components/TodoList.vue";
export default {
  components: {
    TodoForm,
    TodoList,
  },
  data() {
    return {
      name: "",
      todoList: [],
    };
  },
  watch: {
    name(newVal) {
      localStorage.setItem("name", newVal);
    },
    todoList: {
      handler() {
        localStorage.setItem("localTodoList", JSON.stringify(this.todoList));
      },
      deep: true,
    },
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.localTodoList) {
      this.todoList = JSON.parse(localStorage.localTodoList);
    }
  },
  methods: {
    addToList(todoItem) {
      this.todoList.push(todoItem);
    },
    markDone(listItem) {
      listItem.isDone = !listItem.isDone;
    },
    deleteTask(listItem) {
      this.todoList = this.todoList.filter((item) => {
        return item.id != listItem.id;
      });
    },
  },
};
</script>

<style scoped>
.todo__app {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
}

.app__container {
  width: 600px;
  min-height: 800px;
  border: 1px solid rgb(130, 130, 130);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  padding: 15px;

  background: #fff;
  border-radius: 15px;
}

.header__title {
  text-align: center;
  font-size: 36px;
  font-weight: 700;

  border-bottom: 1px solid #eee;

  padding: 10px 0;
  margin-bottom: 10px;
}

.header__subtitle {
  font-size: 28px;
  font-weight: 400;

  padding: 10px 20px;
}

.header__input {
  font-family: inherit;
  border: none;
  outline: none;
  font-size: 28px;
  font-weight: 400;

  padding: 0 5px;
  width: 230px;
}
</style>
