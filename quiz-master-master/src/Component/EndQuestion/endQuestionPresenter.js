import React from 'react';
import { getScoreboradData } from '../../firebase/firebaseDatabase';
//import promiseNoData from '../../PromiseResolve/promiseNoData';
import EndQuestionView from './endQuestionView';

function EndQuestionPresenter(props) {
    const [score, setScore] = React.useState(0);

    function endQuestionObs(payload) {
        if (payload && (payload.score || payload.score === 0)) {
            setScore(payload.score)
        }
    }

    React.useEffect(()=>{
        props.model.addObserver(endQuestionObs);
        return ()=> props.model.removeObserver(endQuestionObs);
    }, [])

    return (
        <EndQuestionView
        Score={score}
        />
    );

}export default EndQuestionPresenter;