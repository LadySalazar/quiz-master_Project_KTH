import RegisterUserView from "./registerUserView"
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import React from "react";
import { auth } from "../../Config/firebaseConfig";


function RegisterUserPresenter(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [username, setUsername] = React.useState('');

    React.useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // save user info to model
                props.model.saveUserId(user.uid);
            }
            // User logged in already or has just logged in.
            console.log('user status changed:', user)
        })
    }, [])


    const onSubmit = async () => {
        async function updateUsername(cred, username) {
            await updateProfile(cred.user, {
                displayName: username
            })
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(cred => {
                updateUsername(cred, username)
                props.model.saveUsername(username)
                window.location.hash = "#mainPageDisplay";
            })
            .catch(err => {
                console.log(err.message)
                alert("Something went wrong! Make sure that you have entered a valid email, the password is at least 6 characters and that the email is not already registered.")
            })
    }
    return (
        <RegisterUserView
            onSubmit={onSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            username={username}
            setUsername={setUsername} />
    );
}

export default RegisterUserPresenter;