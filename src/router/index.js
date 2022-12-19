import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage";
import AboutPage from "@/pages/AboutPage";
import AppsPage from "@/pages/AppsPage";
import TodoApp from "@/pages/TodoApp";
import QuizApp from "@/pages/QuizApp";
import DiceApp from "@/pages/DiceApp";
import RollShop from "@/pages/RollShop";
import MovieListApp from "@/pages/MovieListApp";

const routes = [
  {
    path: "/",
    name: "main-page",
    component: MainPage,
  },
  {
    path: "/apps",
    name: "apps-page",
    component: AppsPage,
  },
  {
    path: "/apps/todo",
    name: "todo-app",
    component: TodoApp,
  },
  {
    path: "/apps/quiz",
    name: "quiz-app",
    component: QuizApp,
  },
  {
    path: "/apps/dice",
    name: "dice-app",
    component: DiceApp,
  },
  {
    path: "/apps/movielist",
    name: "movie-list-app",
    component: MovieListApp,
  },
  {
    path: "/apps/rollshop",
    name: "roll-shop-app",
    component: RollShop,
  },
  {
    path: "/about",
    name: "about-page",
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
