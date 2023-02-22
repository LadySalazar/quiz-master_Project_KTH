import './user.css'

function LoginUserView({ onSubmit, email, setEmail, password, setPassword, signOut }) {
    return (
        <div className="designMainPage">
            <h2 className="titleMainPage"> Sign In or Sign Up and Get Quizzing!</h2>
            <br></br>
            <h2>Already have an account?</h2>
            <br></br>
            <form className="login">
                <label htmlFor="email">email:</label>
                <input type="email" className="email"
                    value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label htmlFor="password">password:</label>
                <input type="password" className="password" autoComplete="on"
                    value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button onClick={(e) => {
                    e.preventDefault()
                    onSubmit();
                }}>login</button>
            </form>
            <br></br>
        </div>
    )
}
export default LoginUserView;


