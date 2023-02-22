import React from "react";
import { getUserData, updateHighScore, createUserScores, updateTotalScore } from "./firebaseDatabase";


function FirebaseModel(props) {
    function firebaseOBS(payload) {
        if (payload && ((payload.score !== null) && (payload.score !== undefined))) {
            if (props.model.userID && props.model.username) {
                getUserData(props.model.userID).then(async data => {
                    if (data) {
                        if (payload.highScore) {
                            await updateHighScore(props.model.userID, data.totalScore, payload.score);
                        } else {
                            await updateTotalScore(props.model.userID, data.totalScore, payload.score)
                        }
                    } else {
                        await createUserScores(props.model.userID, props.model.username, payload.score)
                    }
                    props.model.setScoreboardData()
                })
            }
        }
    }


    React.useEffect(() => {
        props.model.addObserver(firebaseOBS);
        return () => props.model.removeObserver(firebaseOBS);
    }, [])
}

export default FirebaseModel;