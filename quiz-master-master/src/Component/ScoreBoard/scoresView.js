import React from "react";
import "./scoresDecoration.css";

function ScoresView(props) {
  function highScoresRows(data) {
    return (
      <tr key={data.username}>
        <td>{data.username}</td>
        <td></td>
        <td></td>
        <td>{data.highScore}</td>
      </tr>
    );
  }

  return (
    <div>
      <h1>
        User: {props.userName}! <br></br>High score: {props.highScore} <br></br>
        Total score for all your quizzes: {props.totalScore}{" "}
      </h1>
      <button
        className="buttonMainPage"
        onClick={() => (window.location.hash = "#mainPageDisplay")}
      >
        MainPage
      </button>
      <div className="flexParent">
        <div className="modelScores">
          <h1>Scoreboard</h1>
          <table className="table">
            <tbody>
              <tr>
                <th scope="col">Username</th>
                <td></td>
                <td></td>
                <th scope="col">High Score</th>
              </tr>
              {props.scoreboardData.map(highScoresRows)}
            </tbody>
          </table>
        </div>
        <div>
          <img
            src="https://raw.githubusercontent.com/LadySalazar/prueba/main/icons8-christmas-tree-100.png"
            alt="chrismas tree"
            className="tree"
          />
        </div>
      </div>
    </div>
  );
}

export default ScoresView;
