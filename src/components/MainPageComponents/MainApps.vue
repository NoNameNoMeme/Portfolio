<template>
  <div class="main-apps" id="main-apps">
    <main class="section">
      <div class="container">
        <h2 class="section__title">Проекты и приложения</h2>
        <p class="section__subtitle">
          (Все проекты не позиционируются как серьезные, они были созданы в
          учебных целях, для подкрепления знаний по Vue)
        </p>
        <ul class="projects">
          <li class="project">
            <a
              class="project__link"
              href="https://fest.stepiveter.ru/"
              target="_blank"
            >
              <img
                class="project__img"
                src="@/assets/IconApps/steppeandwind.jpg"
                alt=""
              />
              <h3 class="project__title">Степь и ветер</h3>
            </a>
          </li>
          <li class="project">
            <router-link class="project__link" to="apps/rollshop/">
              <img
                class="project__img"
                src="@/assets/IconApps/rollshop.jpg"
                alt=""
              />
              <h3 class="project__title">Roll Shop</h3>
            </router-link>
          </li>
          <li class="project">
            <router-link class="project__link" to="apps/todo/">
              <img
                class="project__img"
                src="@/assets/IconApps/Todo.jpg"
                alt=""
              />
              <h3 class="project__title">Todo App</h3>
            </router-link>
          </li>
          <li class="project">
            <router-link class="project__link" to="apps/dice/">
              <img
                class="project__img"
                src="@/assets/IconApps/Dice.jpg"
                alt=""
              />
              <h3 class="project__title">Игра в кости</h3>
            </router-link>
          </li>
          <li class="project">
            <router-link class="project__link" to="apps/quiz/">
              <img
                class="project__img"
                src="@/assets/IconApps/quiz.jpg"
                alt=""
              />
              <h3 class="project__title">Квиз</h3>
            </router-link>
          </li>
        </ul>
      </div>
    </main>
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

.section {
  min-height: 100vh;
  background-color: #faaca8;
  background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
  padding: 70px 0;
}

.section__title {
  color: #000;
  font-size: 44px;
  text-align: center;
  font-weight: 400;

  margin-bottom: 20px;
}

.section__subtitle {
  color: #000;
  font-size: 18px;
  text-align: center;
  font-weight: 400;

  margin-bottom: 60px;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 30px;
  justify-content: center;
}

.project {
  max-width: 370px;
  overflow: hidden;
  border-radius: 10px;

  -webkit-box-shadow: 4px 4px 8px 0px rgba(104, 82, 114, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(104, 82, 114, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(104, 82, 114, 0.2);

  transition: all 0.4s ease-in-out;
}

.project:hover {
  transform: scale(1.05);
}

.project__img {
  width: 100%;
}

.project__title {
  text-align: center;
  font-weight: 300;
  padding: 12px;

  color: #000;
  text-decoration: none;
  background-color: #fff;

  border-top: 1px solid rgb(187, 186, 186);
}
</style>
