import { auth } from "../Config/firebaseConfig";

onAuthStateChanged(auth, (user) => {
    if (user) {
        // save user info to model
        props.model.saveUserId(user.uid);
        props.model.saveUsername(user.auth.currentUser.displayName);
    }
    // User logged in already or has just logged in.
    console.log('user status changed:', user)

})

export {}