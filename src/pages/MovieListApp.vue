<template>
  <div class="movie-list-app">
    <movie-list-nav />
    <div class="movie-list-header"></div>
  </div>
</template>

<script>
import MovieListNav from "@/components/MovieListComponents/MovieListNav.vue";
export default {
  components: {
    MovieListNav,
  },
};
</script>

<style scoped>
.movie-list-header {
  min-height: 800px;
  background-color: rgb(97, 87, 87);
}
</style>
