import React from 'react';
import LogoutPresenter from '../Button/logoutButton/logoutPresenter';
import ScoresView from './scoresView';

function ScoresPresenter(props) {
    const [scoreboardData, setScoreboardData] = React.useState([]);
    
    function sortHighScore(a, b) {
        if (a.highScore > b.highScore) {
            return -1;
        }
        if (a.highScore < b.highScore) {
            return 1;
        }
        return 0;
    }

    function scoreObs(payload) {
        if (payload && payload.scoreboardData){
            setScoreboardData([...payload.scoreboardData].sort(sortHighScore))
        }
    }
    
    React.useEffect(()=>{
        props.model.addObserver(scoreObs);
        return ()=> props.model.removeObserver(scoreObs);
    }, [])

    return (
        <div>
        <LogoutPresenter class="LogoutComponent" model={props.model}></LogoutPresenter>
        <ScoresView
        scoreboardData={scoreboardData}
        highScore = {props.model.highScore}
        totalScore = {props.model.totalScore}
        userName ={props.model.username}
        />
        </div>
    );

}

export default ScoresPresenter;