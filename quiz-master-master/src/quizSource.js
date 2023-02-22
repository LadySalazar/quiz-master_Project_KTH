import { BASE_URL } from "./Config/apiConfig.js";


function treatHTTPResponseACB(response) {
    if (!response.ok) throw new Error("API problem " + response.status);
    return response.json();
}

function getQuizDetails(params) {
    // example link: https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=multiple
    const endpoint = "api.php?";
    return fetch(BASE_URL + endpoint + new URLSearchParams({ amount: params.amount, category: params.category, difficulty: params.difficulty, type: params.type }),
        { method: 'GET' })
        .then(treatHTTPResponseACB);
}

//function that generates a semi random quiz if the user doesn't select any quiz details
function getDefaultQuizDetails(params) {
    const endpoint = "api.php?";
    //used this scource for random number https://futurestud.io/tutorials/generate-a-random-number-in-range-with-javascript-node-js
    return fetch(BASE_URL + endpoint + new URLSearchParams({ amount: 10, category: Math.floor(Math.random() * (32-9+1)+9), difficulty: "easy", type: "multiple" }),
        { method: 'GET' })
        .then(treatHTTPResponseACB);
}

function getQuizCategories() {
    const endpoint = "api_category.php";

    return fetch(BASE_URL + endpoint, {
        method: 'GET'
    }
    ).then(treatHTTPResponseACB);
}

export { getQuizDetails, getQuizCategories, getDefaultQuizDetails };