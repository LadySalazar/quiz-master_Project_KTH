import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './MainApp/App';
import QuizModel from './QuizModel';
import Navigation from './navigation';
import FirebaseModel from './firebase/firebaseModel';

const root = ReactDOM.createRoot(document.getElementById('root'));
const model = new QuizModel();

root.render(
  <div>
    <FirebaseModel model={model} />
    <App model={model} />
  </div>
);

