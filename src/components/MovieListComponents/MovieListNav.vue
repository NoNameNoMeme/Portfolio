<template>
  <div class="movie-list-nav">
    <nav class="nav">
      <div class="container">
        <div class="nav-wrapper">
          <h2 class="nav__title">MovieList</h2>
          <ul class="nav-list">
            <li class="nav-list__item">Главная</li>
            <li class="nav-list__item">Профиль</li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  color: #fff;
  background-color: rgb(54, 54, 54);

  padding: 10px 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;

  padding: 0 10px;
}

.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-list {
  display: flex;
  column-gap: 20px;
}
</style>
