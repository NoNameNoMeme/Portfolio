import { createStore } from "vuex";
import todoModule from "@/store/todoModule.js";

export default createStore({
  modules: {
    todoModule,
  },
});
