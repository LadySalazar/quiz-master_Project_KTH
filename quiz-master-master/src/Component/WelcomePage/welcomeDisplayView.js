import './welcomePage.css'
function WelcomeDisplayView() {
  return (
    //https://codingartistweb.com/2021/12/santa-animation-with-html-css/
    <div className="container">
      <div className="introText">Welcome To Quizmas!</div>
      <button className="christmasButton" onClick={() => window.location.hash = "firstPage"}>Ready To Get Into the Christmas Spirit? <br />Click Here!</button>
      <div className="santa">
        <div className="hand-l"></div>
        <div className="hand-r"></div>
        <div className="hat"></div>
        <div className="face">
          <div className="beard"></div>
          <div className="eyes"></div>
        </div>
        <div className="belt"></div>
        <div className="shoe"></div>
      </div>
    </div>
  )
}
export default WelcomeDisplayView;
