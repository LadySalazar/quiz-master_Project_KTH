import React from 'react';
import './endQuestion.css';


function EndQuestionView(props) {
    return (
        <div>
            <div className="model-container" id="modelContainer" >
                <div className="model">
                    <h1>Well done!!</h1>
                    <p>your score is {props.Score}</p>
                    <button onClick={() => {window.location.hash = "#scoreBoard";}}>Scoreboard</button>
                    <button onClick={() => window.location.hash = "#mainPageDisplay"}>MainPage</button>
                </div>
            </div>   
        </div>
    );
}


export default EndQuestionView;