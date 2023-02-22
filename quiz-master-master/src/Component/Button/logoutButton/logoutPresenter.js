import LogoutView from './logoutView';
import { auth } from '../../../Config/firebaseConfig';
import { signOut } from 'firebase/auth';
import React from 'react';
import './logoutButton.css'

function LogoutPresenter(props) {

    const signOutUser = async() => {
        await signOut(auth);
        console.log("entered sign out functions");
        console.log("user has signed out")
        props.model.saveUserId(null)
        props.model.saveUsername(null)
        props.model.resetScores()
        props.model.resetQuiz()
        window.location.hash = "firstPage";
    }
    return (
        <LogoutView
        signOut={signOutUser}
        />
    );
}

export default LogoutPresenter;