<template>
  <div class="main-skills" id="main-skills">
    <div class="skills">
      <h2 class="skills__title">Навыки</h2>
      <div class="skills-container">
        <h2 class="skills__subtitle">Frontend</h2>
        <p class="skills__text">HTML5, CSS3, Sass, БЭМ, Bootstrap</p>
        <p class="skills__text">JavaScript, ES6, Axios</p>
        <p class="skills__text">Git, GitHub, Package Managers: npm, yarn</p>
        <p class="skills__text">Framework: Vue.js, Vue Router, Vuex</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-skills {
}

.skills-container {
  max-width: 1200px;
  padding: 0 15px;

  margin: 0 auto;
}

.skills {
  padding: 70px 0;
  min-height: 600px;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */

  background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
}

.skills__title {
  color: #000;
  font-size: 44px;
  font-weight: 700;
  text-align: center;

  margin-bottom: 100px;
}

.skills__subtitle {
  font-size: 36px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 30px;
}

.skills__text {
  font-size: 18px;
  text-align: center;

  margin-bottom: 10px;
}
</style>
