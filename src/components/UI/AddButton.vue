<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.btn {
  font-family: inherit;
  color: #eb5a1e;
  background: #fff;
  cursor: pointer;
  padding: 10px 20px;
  width: 80%;
  border: 1px solid #eb5a1e;
  border-radius: 5px;
}

.btn:hover {
  background: #eb5a1e;
  color: #fff;
  outline: none;
}
</style>
