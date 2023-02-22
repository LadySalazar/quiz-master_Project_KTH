import React from 'react';
import promiseNoData from '../../PromiseResolve/promiseNoData';
import MainPageView from './mainPageView';
import LogoutPresenter from '../Button/logoutButton/logoutPresenter';

function MainPagePresenter(props) {
    const [amount, setAmount] = React.useState();
    const [category, setCategory] = React.useState();
    const [difficulty, setDifficulty] = React.useState();
    const [, reRender] = React.useState();

    function createAmountsArr(maxAmount) {
        var amountArr = [1]
        for (let amount = 10; amount <= maxAmount; amount = amount + 10) {
            amountArr = [...amountArr, amount];
        }
        return amountArr;
    }

    function startQuizACB() {
        props.model.setCurrQuiz(amount, category, difficulty);
    }

    function resetSelection() {
        var selectors = document.getElementsByClassName("mainPageSelector");
        for (let index = 0; index < selectors.length; index++) {
            const selector = selectors[index];
            selector.options[0].selected = true;
        }
    }

    function mainPageObsACB() {
        if (props.model.categoriesPromiseState.promise != null &&
            props.model.categoriesPromiseState.data != null) {
            resetSelection();
            reRender(new Object());
        }
    }

    function mainpageWasCreatedACB() {
        props.model.addObserver(mainPageObsACB);
        function isTakenDownACB() {
            props.model.removeObserver(mainPageObsACB);
        }
        return isTakenDownACB;
    }

    React.useEffect(mainpageWasCreatedACB, []);

    return (
        promiseNoData(props.model.categoriesPromiseState) ||
        <div>
            <LogoutPresenter class="LogoutComponent" model={props.model}></LogoutPresenter>
            <MainPageView
                amounts={createAmountsArr(50)}
                setTheAmount={amounts => setAmount(amounts)}
                difficulties={["easy", "medium", "hard"]}
                setTheDifficulty={difficulty => setDifficulty(difficulty)}
                categories={props.model.categoriesPromiseState.data}
                setTheCategory={category => setCategory(category)}
                startQuiz={startQuizACB}
            />
        </div>
    );
}

export default MainPagePresenter;

