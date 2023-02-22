import "./App.css";
import WelcomeDisplayPresenter from '../Component/WelcomePage/welcomeDisplayPresenter';
import DecorationPresenter from '../Component/Decorations/decorationPresenter';
import MainPagePresenter from "../Component/MainPage/mainPagePresenter";
import QuestionPresenter from "../Component/Questions/questionPresenter";
import Show from "../show.js";
import EndQuestionPresenter from "../Component/EndQuestion/endQuestionPresenter";
import ScoresPresenter from "../Component/ScoreBoard/scoresPresenter"
import RegisterUserPresenter from '../Component/User/registerUserPresenter';
import LoginUserPresenter from '../Component/User/loginUserPresenter';

function App(props) {
  return (
    <div>
      {props.model.saveUserId()}
      {props.model.setQuizCategories()}


      <Show hash="#mainPageDisplay">
        <MainPagePresenter class="mainPage" model={props.model} />
      </Show>
      <Show hash="#question">
        <QuestionPresenter class="QuestionPage" model={props.model} />
      </Show>
      <Show hash="#firstPage"><LoginUserPresenter class="LoginPage" model={props.model} /></Show>
      <Show hash="#firstPage"><RegisterUserPresenter class="RegisterPage" model={props.model} /></Show>
      <Show hash="#welcomePage"><WelcomeDisplayPresenter class="welcomePage" /></Show>
      <Show hash="#testPage"><DecorationPresenter /></Show>
      <Show hash="#endQuestion">
        <EndQuestionPresenter class="EndQuestionPage" model={props.model} />
      </Show>
      <Show hash="#scoreBoard">
        <ScoresPresenter class="ScoresPage" model={props.model} />
      </Show>
    </div>
  );
}

export default App;
