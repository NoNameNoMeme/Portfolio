<template>
  <div class="main-skills">
    <div class="skills">
      <div class="container">
        <h2 class="skills__title">Навыки</h2>
        <h2 class="skills__subtitle">Frontend</h2>
        <p class="skills__text">
          HTML, CSS, Sass, БЭМ, Bootstrap, JavaScript, Package Managers: npm,
          Vue.js, Vue Router, Vuex,
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  max-width: 1200px;
  padding: 0 15px;

  margin: 0 auto;
}

.skills {
  padding: 70px 0;
}

.skills__title {
  color: #000;
  font-size: 44px;
  text-align: center;

  margin-bottom: 60px;
}

.skills__subtitle {
  font-size: 36px;
  font-weight: 400;
  text-align: center;
}

.skills__text {
  text-align: center;
}
</style>
