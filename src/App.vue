<template>
  <div>
    <main-navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import MainNavbar from "@/components/UI/MainNavbar.vue";
export default {
  components: {
    MainNavbar,
  },
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  padding: 0;
  margin: 0;
  font-family: "Rubik", sans-serif;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
