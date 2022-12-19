<template>
  <nav class="nav">
    <div class="container">
      <div class="nav-wrapper">
        <h2 class="nav__title">Valitov Khasan</h2>
        <ul class="nav-list">
          <li class="nav-list__item">
            <router-link class="nav-list__link" to="/">Home</router-link>
          </li>
          <li class="nav-list__item">
            <a class="nav-list__link" href="#main-apps">Apps</a>
          </li>
          <li class="nav-list__item">
            <a class="nav-list__link" href="#main-skills">Skills</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  padding: 14px 0;
  background-color: rgb(20 17 17);
  border-bottom: 1px solid #cea4e1;
}

.container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 15px;
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;
}

.nav__title {
  color: #fff;
}

.nav-list {
  display: flex;
  column-gap: 30px;
}

.nav-list__item {
  list-style-type: none;
}

.nav-list__link {
  color: #fff;
  text-decoration: none;
}

.nav-list__link:hover {
  color: #cea4e1;
}

.router-link-active {
  color: #cea4e1;
}

.router-link-active::after {
  content: "";

  display: block;
  height: 2px;
  width: 100%;
  background-color: #cea4e1;
}
</style>
