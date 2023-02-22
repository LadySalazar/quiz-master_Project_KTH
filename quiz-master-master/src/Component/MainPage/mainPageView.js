import React from 'react';
import './mainPage.css'

function MainPageView(props) {
    function createCategoryOptionsCB(category) {
        return <option key={category.name}>{category.name}</option>
    }

    function createDiffOptionsCB(difficulty) {
        return <option key={difficulty}>{difficulty}</option>
    }

    function createAmountOptionCB(amount) {
        return <option key={amount}>{amount}</option>
    }

    return (
        <div>
            <h2 className="question">Choose Your Quiz or Just Press "Start Quiz"</h2>
            <br></br>
            <h2 className="instructions"><li>When you answer a question correctly you will receive 1 point!</li><li>When you have collected enough point Christmas decorations will appear! Magic!</li></h2>
            <select className="main mainPageSelector" defaultValue={'DEFAULT'} name="category-select" onChange={e => {
                function getCategoryIDCB(category) {
                    if (category.name === e.target.value) {
                        return true;
                    }
                }
                props.setTheCategory(props.categories["trivia_categories"].find(getCategoryIDCB).id); //added trivia_categories
            }}>
                <option value="DEFAULT" disabled hidden>Select the Category You Want</option>
                {props.categories["trivia_categories"].map(createCategoryOptionsCB)}
            </select>
            <select className="main mainPageSelector" defaultValue={'DEFAULT'} name="amount-select" onChange={function (e) {
                props.setTheAmount(e.target.value);
            }}>
                <option value="DEFAULT" disabled hidden>Number of Questions</option>
                {props.amounts.map(createAmountOptionCB)}
            </select>
            <select className="main mainPageSelector" defaultValue={'DEFAULT'} name="difficulty-select" onChange={function (e) {
                props.setTheDifficulty(e.target.value);
            }}>
                <option value="DEFAULT" disabled hidden>Difficulty Level</option>
                {props.difficulties.map(createDiffOptionsCB)}
            </select>
            <button className="main" onClick={() => {
                props.startQuiz();
                window.location.hash = "#question";
            }}>Start Quiz</button>
            <button className="main" onClick={() => {
                window.location.hash = "#scoreBoard"
            }}>Score Board</button>
        </div>
    );
}

export default MainPageView;