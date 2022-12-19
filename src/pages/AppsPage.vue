<template>
  <div class="appsPage">
    <div class="container">
      <h2 class="appsPage__title">All my Apps</h2>
      <div class="boxes">
        <div class="boxes__wrapper">
          <router-link class="item__text" to="apps/todo/">
            <div class="box">
              <img class="todo-logo" src="@/assets/IconApps/Todo.jpg" alt="" />
            </div>
          </router-link>
          <router-link class="item__text" to="apps/quiz/">
            <div class="box">
              <div class="box__wrapper">
                <p class="box__text">'Quiz App' (почти готово)</p>
                <p class="box__text">Здесь потом должна быть фотка</p>
              </div>
            </div>
          </router-link>
          <router-link class="item__text" to="apps/dice/">
            <div class="box">
              <img class="dice-logo" src="@/assets/IconApps/Dice.jpg" alt="" />
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.appsPage {
  padding: 20px 0;
  /* background: #3e5151;
  background: -webkit-linear-gradient(to right, #decba4, #3e5151);
  background: linear-gradient(to right, #decba4, #3e5151); */
  background-color: #faaca8;
  background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);

  height: 100vh;
}

.container {
  width: 90%;
  margin: 0 auto;
}

.appsPage__title {
  margin-bottom: 20px;
  text-align: center;
  font-size: 40px;
  color: #363636;
}

.boxes__wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.item__text {
  text-decoration: none;
}

.todo-logo {
  width: 100%;
}

.dice-logo {
  width: 100%;
}

.box {
  border: 3px solid rgb(49, 49, 49);
  width: 300px;
  height: 300px;

  cursor: pointer;
  transition: all 0.4s ease-in-out;

  background: #fff;
}

.box:hover {
  transform: scale(1.05);
}

.box__text {
  color: #000;
}

.box__wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
