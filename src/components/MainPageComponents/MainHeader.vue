<template>
  <div class="main-header">
    <header class="header">
      <div class="header__container">
        <h1 class="header__title">
          Всем привет, меня зовут Хасан.<br />
          Добро пожаловать на мое портфолио!
        </h1>
        <p class="header__subtitle">Frontend Developer (Junior)</p>
        <button class="btn">
          <span>GitHub</span>
        </button>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  min-height: 800px;
  padding: 40px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  color: #fff;

  background: #000000;
  background: -webkit-linear-gradient(to bottom, #000000, #434343);
  background: linear-gradient(to bottom, #000000, #434343);
}

.header__container {
  max-width: 1000px;
  padding: 0 15px;
}

.header__title {
  font-size: 44px;
  font-weight: 300;

  margin-bottom: 20px;
}

.header__subtitle {
  margin-bottom: 30px;
}

/* Button */

.btn {
  display: inline-block;
  min-width: 160px;

  color: #000;
  font-size: 16px;
  font-family: inherit;

  background-color: #b882d1;

  padding: 12px 24px;
  border: none;
  border-radius: 5px;

  cursor: pointer;
  transition: all linear 0.2s;
}

.btn span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.btn span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.btn:hover span {
  padding-right: 25px;
}

.btn:hover span:after {
  opacity: 1;
  right: 0;
}

.btn:active {
  position: relative;
  top: 2px;
}
</style>
