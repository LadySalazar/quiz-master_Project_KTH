import React from "react";

export default
    function Show(props) {
    const [nameOfClass, setNameOfClass] = React.useState(window.location.hash !== props.hash? "hidden":"");

    function hashListenerACB() {
        if (window.location.hash !== props.hash) {
            setNameOfClass("hidden");
        } else {
            setNameOfClass("");
        }
    }

    function showWasCreatedACB() {
        window.addEventListener("hashchange", hashListenerACB);
        function isTakenDownACB() {
            window.removeEventListener("hashchange", hashListenerACB);
        }
        return isTakenDownACB;
    }
    React.useEffect(showWasCreatedACB, []);
    return <div className={nameOfClass}>{props.children}</div>
}
