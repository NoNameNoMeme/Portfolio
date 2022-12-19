<template>
  <div class="quiz-list">
    <div class="quiz-list__question">
      {{ questions[current].question }}
    </div>
    <div class="quiz-list__answers">
      <ul class="answers__list">
        <label
          class="list__item"
          id="a-text"
          v-for="(answer, index) in questions[current].answers"
          :key="answer"
        >
          <input
            type="radio"
            :id="index"
            :value="index"
            @change="updateInput"
            name="answer"
          />
          {{ answer }}
        </label>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: "",
    };
  },
  props: {
    current: {
      type: Number,
    },
    questions: {
      type: Array,
    },
    modelValue: {
      type: [String, null],
    },
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.quiz-list {
  width: 100%;
}

.quiz-list__question {
  font-size: 32px;
  margin-bottom: 30px;
  text-align: center;
}

.answers__list {
  list-style-type: none;
  display: flex;
  flex-direction: column;
}

.list__item {
  border: 1px solid #000;
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 7px;
}

.list__item:hover {
  background: rgb(238, 213, 243);
}
</style>
