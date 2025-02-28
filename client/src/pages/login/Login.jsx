import "./login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <form className="login-form">
          <h1>Login</h1>

          <div className="input-box">
            <input type="text" placeholder="Username" />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" />
          </div>

          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Dont have an account? <a href="/register">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
