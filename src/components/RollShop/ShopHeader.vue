<template>
  <header class="header">
    <div class="wrapper">
      <img class="header__logo" src="@/assets/logo/logo.svg" alt="logo" />
      <div class="header__title">Доставка роллов</div>
      <p class="header__subtitle">Оперативно и вкусно</p>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  padding: 50px 0;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header__logo {
  width: 92px;
}

.header__title {
  font-size: 56px;
  font-weight: 300;
}

.header__subtitle {
  font-size: 20px;
}
</style>
