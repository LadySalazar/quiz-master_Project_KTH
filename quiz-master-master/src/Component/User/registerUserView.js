import './user.css'

function RegisterUserView({ onSubmit, username, setUsername, email, setEmail, password, setPassword }) {
    return (
        <form className="register" onSubmit={(e) => {
            e.preventDefault()
            onSubmit()
        }}>
            <div className="newUser">
                <h2> New User? Sign up here!</h2>
                <br></br>
                <label htmlFor="username">Username:</label>
                <input type="username" id="username"
                    value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <label htmlFor="email">email:</label>
                <input type="email" id="email"
                    value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label htmlFor="password">password:</label>
                <input type="password" id="password" autoComplete="on"
                    value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button>signup</button>
                <div className="registerDeco"></div>
            </div>
        </form>
    )
}

export default RegisterUserView;


