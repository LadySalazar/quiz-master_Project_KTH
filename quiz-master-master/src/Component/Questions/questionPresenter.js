import React from 'react';
import promiseNoData from '../../PromiseResolve/promiseNoData';
import QuestionView from './questionView';
import LogoutPresenter from '../Button/logoutButton/logoutPresenter';

function QuestionPresenter(props) {
    const [quiz, setQuiz] = React.useState({});
    const [question, setQuestion] = React.useState({});
    const [counter, setCounter] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [nameClase, setnameClase] = React.useState("levelFour");

    function decorationScore() {
        if (props.model.totalScore < 10) {
            setnameClase("levelZero")
        } else if (props.model.totalScore >= 10 && props.model.totalScore < 21) {
            setnameClase("levelFour")
        } else if (props.model.totalScore >= 21 && props.model.totalScore < 41) {
            setnameClase("levelThree")
        } else if (props.model.totalScore >= 41 && props.model.totalScore < 61) {
            setnameClase("levelTwo")
        } else {
            setnameClase("levelOne")
        }
    }

    function currentQuizObsACB(payload) {
        if (props.model.quizPromiseState.promise != null &&
            props.model.quizPromiseState.data != null) {
            if (props.model.quizPromiseState.data.response_code !== 0) {
                props.model.resetQuiz()
                alert("This quiz does not exits. Please pick another combination");
                window.location.hash = "#mainPageDisplay";
            } else if (props.model.quizPromiseState.data.results) {
                setQuiz(props.model.quizPromiseState.data.results)
                decorationScore()
                setCounter(0)
                setScore(0)
            }
        } else if (payload && payload.quizPromiseState === null) {
            setQuiz({})
        }
    }

    React.useEffect(() => {
        props.model.addObserver(currentQuizObsACB)
        return () => props.model.removeObserver(currentQuizObsACB)
    }, []);

    React.useEffect(() => {
        setQuestion(quiz[counter])
    }, [quiz, counter]);
    
    return (
        promiseNoData(props.model.quizPromiseState) ||
        <div>
            <LogoutPresenter class="LogoutComponent" model={props.model}></LogoutPresenter>
            <QuestionView
                theQuestion={question}
                numQuestion={quiz.length}
                addScore={() => {
                    setScore(prevScore => prevScore + 1)
                }}
                counter={counter}
                nameClase={nameClase}
                nextQuestion={() => {
                    if (counter < quiz.length - 1) {
                        setCounter(prevCounter => prevCounter + 1)
                    } else {
                        props.model.setScore(score)
                        props.model.resetQuiz()
                        window.location.hash = "#endQuestion"
                    }
                }}
            />
        </div>

    );
}

export default QuestionPresenter;