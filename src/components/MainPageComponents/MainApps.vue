<template>
  <div class="main-apps">
    <main class="section">
      <div class="container">
        <h2 class="section__title">Apps</h2>
        <ul class="projects">
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
            <img
              class="project__img"
              src="@/assets/IconApps/sample_1.jpg"
              alt=""
            />
            <h3 class="project__title">Todo App</h3>
          </li>
          <li class="project">
            <img
              class="project__img"
              src="@/assets/IconApps/sample_2.jpg"
              alt=""
            />
            <h3 class="project__title">Todo App</h3>
          </li>
          <li class="project">
            <img
              class="project__img"
              src="@/assets/IconApps/sample_3.jpg"
              alt=""
            />
            <h3 class="project__title">Todo App</h3>
          </li>
          <li class="project">
            <img
              class="project__img"
              src="@/assets/IconApps/sample_4.jpg"
              alt=""
            />
            <h3 class="project__title">Todo App</h3>
          </li>
          <li class="project">
            <img
              class="project__img"
              src="@/assets/IconApps/sample_5.jpg"
              alt=""
            />
            <h3 class="project__title">Todo App</h3>
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
  background-color: #faaca8;
  background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
  padding: 70px 0;
}

.section__title {
  color: #000;
  font-size: 44px;
  text-align: center;

  margin-bottom: 60px;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 30px;
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
