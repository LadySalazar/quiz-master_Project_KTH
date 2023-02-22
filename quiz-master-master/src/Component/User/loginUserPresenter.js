import LoginUserView from "./loginUserView"
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import React from "react";
import { auth } from "../../Config/firebaseConfig";


function LoginUserPresenter(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
      // save user info to model
        props.model.saveUserId(user.uid);
        props.model.saveUsername(user.auth.currentUser.displayName);
        props.model.updateScores(user.uid);
      }
      // User logged in already or has just logged in.
      console.log('user status changed:', user)
    })
  }, [])

  async function onSubmit() {
    await signInWithEmailAndPassword(auth, email, password)
    .then(() =>{
      window.location.hash = "#mainPageDisplay"
    })
    .catch(() => {
      alert("You entered invalid password and/or email");
    })
  }

  return (
    <LoginUserView
      onSubmit={onSubmit}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
    />
  );
}


export default LoginUserPresenter;