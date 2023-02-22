import React from 'react';
import { decodeHtml, shuffleArray } from '../../Utils/CommonFunctions';
import './questionDecoretion.css'
import './questions.css';



function QuestionView(props) {
    const [buttonActiveNext, setButtonActiveNext] = React.useState(true);
    const [buttonActiveSubmit, setButtonActiveSubmit] = React.useState(true);
    const [buttonAnswer, setButtonAnswer] = React.useState(false);
    const [resultHidden, setResultHidden] = React.useState(true);
    const [answers, setAnswers] = React.useState([" ", " ", " ", " "]);
    const [answer, setAnswer] = React.useState(" ");
    const buttonID = ["answer0", "answer1", "answer2", "answer3"];
    const [result, setResult] = React.useState(" ");


    function selectAnswer(event) {
        setAnswer(event.target.value);
        setButtonActiveSubmit(false);
        buttonID.forEach(resetButtonColor);
        document.getElementById(event.target.id).style.backgroundColor = "rgb(250, 188, 2)";
    }

    function resetButtonColor(buttonID) {
        document.getElementById(buttonID).style.backgroundColor = "white"
    }

    function IdCorrectAns() {
        for (let index = 0; index < answers.length; index++) {
            if (document.getElementById(buttonID[index]).value === props.theQuestion.correct_answer) {
                document.getElementById(buttonID[index]).style.backgroundColor = "green";
            }
        }
    }

    function selectSubmitAnswer() {
        setButtonActiveNext(false);
        setButtonActiveSubmit(true);
        setButtonAnswer(true);
        setResultHidden(false);

        IdCorrectAns();
        if (answer === props.theQuestion.correct_answer) {
            setResult(<div className="question">CORRECT!!</div>);
            props.addScore();
        } else {
            setResult(<div className="question">WRONG!!</div>);
        }
    }

    React.useEffect(() => {
        if (props.theQuestion !== undefined) {
            setAnswers([...props.theQuestion.incorrect_answers, props.theQuestion.correct_answer].sort(shuffleArray));
            buttonID.forEach(resetButtonColor);
            setButtonActiveNext(true);
            setButtonActiveSubmit(true);
            setButtonAnswer(false);
            setResultHidden(true);
        }
    }, [props.theQuestion])

    if (props.theQuestion !== undefined) {
        return (
            <div>
                <div className={props.nameClase}>
                    <link rel="stylesheet" href="questions.css"></link>
                        <div className="question">{decodeHtml(props.theQuestion.question)}</div>
                    <button className="centerButton" id="answer0" onClick={selectAnswer} value={decodeHtml(answers[0])} disabled={buttonAnswer}>{decodeHtml(answers[0])}</button>
                    <button className="centerButton" id="answer1" onClick={selectAnswer} value={decodeHtml(answers[1])} disabled={buttonAnswer}>{decodeHtml(answers[1])}</button>
                    <button className="centerButton" id="answer2" onClick={selectAnswer} value={decodeHtml(answers[2])} disabled={buttonAnswer}>{decodeHtml(answers[2])}</button>
                    <button className="centerButton" id="answer3" onClick={selectAnswer} value={decodeHtml(answers[3])} disabled={buttonAnswer}>{decodeHtml(answers[3])}</button>
                    <button className="handleSubmit" id="submitAnswer" onClick={selectSubmitAnswer} disabled={buttonActiveSubmit}>submit answer</button>
                    <button className="handleSubmit" id="nextQuestion" onClick={() => props.nextQuestion()} disabled={buttonActiveNext}>Next Question</button>
                    <span hidden={resultHidden}>{result}</span>
                    <span className="questionNum">{props.counter + 1}/{props.numQuestion}</span>
                </div>
                <div className="gift">
                    <div className="boxCover">
                        <span></span>
                    </div>
                    <div className="promo">
                        <h4>Happy Christmas</h4>
                    </div>
                    <div className="box">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionView;