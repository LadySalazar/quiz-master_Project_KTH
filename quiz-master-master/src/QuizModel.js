import {
  getQuizCategories,
  getQuizDetails,
  getDefaultQuizDetails,
} from "./quizSource.js";
import resolvePromise from "./PromiseResolve/resolvePromise.js";
import {
  getUserData,
  getScoreboradDataFB
} from "./firebase/firebaseDatabase";

class QuizModel {
  constructor() {
    this.observers = [];
    this.quizPromiseState = {};
    this.categoriesPromiseState = {};
    this.username = null;
    this.totalScore = 0;
    this.highScore = 0;
    this.userID = null;
    this.usersData = [];
    this.scoreboardData = [];
  }

  setCurrQuiz(amount, category, difficulty) {
    if (!amount || !category || !difficulty) {
      resolvePromise(
        getDefaultQuizDetails(),
        this.quizPromiseState,
        this.notifyObservers.bind(this)
      );
    } else {
      resolvePromise(
        getQuizDetails({
          amount: amount,
          type: "multiple",
          category: category,
          difficulty: difficulty,
        }),
        this.quizPromiseState,
        this.notifyObservers.bind(this)
      );
    }
  }

  setScore(score) {
    if (this.username !== null) {
      this.totalScore += score;
      if (this.highScore < score) {
        this.highScore = score;
        this.notifyObservers({ highScore: score, score: score });
      } else {
        this.notifyObservers({ score: score });
      }
    } else {
      console.log("username is null for some reason");
    }
  }

  resetQuiz(){
    this.quizPromiseState = {}
    this.notifyObservers({quizPromiseState: null})
  }

  resetScores() {
    this.highScore = 0;
    this.totalScore = 0;
  }

  setScoreboardData() {
    getScoreboradDataFB().then(data => {
      this.scoreboardData = data
      this.notifyObservers({ scoreboardData: this.scoreboardData })
    })
  }

  setQuizCategories() {
    resolvePromise(
      getQuizCategories(),
      this.categoriesPromiseState,
      this.notifyObservers.bind(this)
    )
  }

  saveUserId(uid) {
    this.userID = uid;
    // console.log("in model id: ", this.userID);
    this.setScoreboardData()
  }

  saveUsername(username) {
    this.username = username;
    // console.log("in model username: ", this.username);
  }

  updateScores(uid) {
    getUserData(uid).then(userData => {
      // console.log("userData in model: ", userData);
      if (userData != false) {
        this.highScore = userData.highScore;
        this.totalScore = userData.totalScore;
      } else {
        this.highScore = 0;
        this.totalScore = 0;
      }
    })
  }

  addObserver(observer) {
    this.observers = [...this.observers, observer];
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(function removeObserverCB(obs) {
      return obs !== observer;
    });
  }

  notifyObservers(payload) {
    function invokeObserverCB(obs) {
      obs(payload);
    }

    try {
      this.observers.forEach(invokeObserverCB);
    } catch (err) {
      console.error(err);
    }
  }
}

export default QuizModel;
