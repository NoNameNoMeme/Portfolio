<template>
  <div class="quizApp">
    <div class="quizApp__title">Quiz App</div>
    <div class="quizApp__container">
      <div class="quizApp__choose" v-if="!isSelect">
        <div class="choose__title">Выберите квиз</div>
        <div class="choose__selectQuiz" @click="loadQuiz">Фильмы</div>
        <div class="choose__selectQuiz">Сериалы</div>
        <div class="choose__selectQuiz">Игры</div>
      </div>
      <div class="quizApp__main" v-else>
        <div class="main__game" v-if="!quizCompleted">
          <quiz-list
            :questions="questions"
            :current="currentQuestion"
            v-model="questions[currentQuestion].selected"
          />
          <div class="btn__content">
            <button class="main__btn" @click="loadNext">Ответить</button>
          </div>
        </div>
        <div class="main__score" v-else>
          <h1 class="score__title">Игра закончена, ваш счет: {{ score }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuizList from "@/components/QuizList.vue";
export default {
  components: {
    QuizList,
  },
  data() {
    return {
      currentQuestion: 0,
      quizCompleted: false,
      score: 0,
      isSelect: false,
      questions: [
        {
          question: "Сколько Оскаров получил 'Титаник'?",
          answers: ["5", "1", "3", "11"],
          answer: "4",
          selected: null,
        },
        {
          question: "Кто является режиссером фильма 'Бешеные псы'?",
          answers: [
            "Джеймс Кэмерон",
            "Альфред Хичкок",
            "Квентин Тарантино",
            "Мартин Скорсезе",
          ],
          answer: "3",
          selected: null,
        },
        {
          question: "В каком году вышел первый фильм по Гарри Поттеру?",
          answers: ["1999", "2000", "2001", "2002"],
          answer: "3",
          selected: null,
        },
        {
          question: "Самый кассовый фильм в истории?",
          answers: [
            "Аватар",
            "Мстители: Финал",
            "Титаник",
            "Звёздные войны: Пробуждение силы",
          ],
          answer: 1,
          selected: null,
        },
      ],
    };
  },
  methods: {
    loadQuiz() {
      this.isSelect = true;
    },
    loadNext() {
      if (this.currentQuestion < this.questions.length - 1) {
        if (this.questions[this.currentQuestion].selected === null) {
          return;
        }
        this.checkAnswer();
        this.currentQuestion++;
        console.log(this.currentQuestion);
      } else {
        if (this.questions[this.currentQuestion].selected === null) {
          return;
        }
        this.checkAnswer();
        this.quizCompleted = true;
      }
    },
    checkAnswer() {
      if (
        this.questions[this.currentQuestion].selected ==
        this.questions[this.currentQuestion].answer - 1
      ) {
        this.score += 1;
      }
    },
  },
  watch: {},
};
</script>

<style scoped>
.quizApp {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
}

.quizApp__title {
  font-size: 36px;
  font-weight: 700;
}

.quizApp__container {
  width: 800px;
  height: 600px;
  border: 1px solid rgb(130, 130, 130);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  padding: 15px;

  background: #fff;
  border-radius: 15px;

  position: relative;
}

.choose__title {
  text-align: center;
  font-size: 36px;
  font-weight: 400;

  border-bottom: 1px solid #eee;

  padding: 10px 0;
  margin-bottom: 10px;
}

.choose__selectQuiz {
  text-align: center;
  font-size: 24px;
  font-weight: 300;

  padding: 10px 0;

  cursor: pointer;
}

.choose__selectQuiz:hover {
  color: rgb(224, 77, 77);
}

.btn__content {
  width: 100%;
}

.main__btn {
  width: 100%;
  font-family: inherit;
  padding: 10px 20px;
  cursor: pointer;

  background: #fff;
}

.quizApp__main {
  height: 100%;
}

.main__game {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.main__score {
}

.score__title {
  text-align: center;
}
</style>
