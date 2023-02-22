# Quiz-master

## Description 

Quiz-master is a multiple choice quiz with a Christmas theme. The user can either play a randomly selected quiz or specify which category, amount of questions and the difficulty level they want. When the user has received enough points, additional Christmas decorations will appear on the app. 

The user has to create an account to be able to play. Their score will be saved and added to a total score which will decide how many of the additional Christmas decorations that will be showing. The user will be able to see their high score as well as other users' high scores in the scoreboard. 

If you would like to try the app you can use the deployed version: https://quizmaster-955bb.web.app
 

### Set Up

In order to edit the App you need to install npm by running the command **npm install**, **npm install react**  and **npm install firebase** in your terminal (make sure you also have **[node.js](https://nodejs.org/en/)** installed). Then you also need a firebase project with Authentication and firestore database enabled. Moreover, you will have to create a *firebaseConfig.js* file in *src/Config/firebaseConfig.js* which is in the following format (where you insert your firebase settings instead of the empty strings):

``` 
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "",
 authDomain: "",
 databaseURL: "",
 projectId: "",
 storageBucket: "",
 messagingSenderId: "",
 appId: ""
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;
```



Also, an *apiConfig.js* file should be created in *src/Config/apiConfig.js*, which contains the **[API](https://opentdb.com/api_config.php)** base URL to the Quiz API. It will be in the following format:

```
const BASE_URL = "https://opentdb.com/";
 
export {BASE_URL}

```

Finally, you will try to run the app by navigating to the correct path in your terminal and then writing **npm run start** and (hopefully) the app will open up in your browser.
 

