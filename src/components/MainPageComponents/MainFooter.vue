<template>
  <div class="main-footer">
    <footer class="footer">
      <div class="container">
        <div class="footer__wrapper">
          <ul class="social">
            <li class="social__item">
              <a href="#">
                <img
                  class="social__image"
                  src="@/assets/logo/telegram.svg"
                  alt=""
                />
              </a>
            </li>
            <li class="social__item">
              <a href="#">
                <img
                  class="social__image"
                  src="@/assets/logo/github.svg"
                  alt=""
                />
              </a>
            </li>
          </ul>
          <div class="copyright">
            <p class="copyrigth__text">copyright 2022</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  color: #fff;
  background-color: rgb(33, 33, 33);

  padding: 20px 0;
}

.footer__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.social {
  display: flex;
  column-gap: 10px;

  margin-bottom: 10px;
}

.social__image {
  width: 40px;
}

.copyrigth__text {
  font-weight: 300;
}
</style>
