import style from "./login.module.css";
const Login = () => {
  return (
    <>
      <center>
        <div className={style.mainDiv}>
          <div className={style.paraDiv}>
            <h2>Login</h2>
            Username:
            <input
              type="text"
              name="username"
              required
              placeholder="Enter username"
            ></input>
            <br></br>
            <br></br>
            Password:
            <input
              type="password"
              name="pass"
              required
              placeholder="Enter password"
            ></input>
            <br></br>
            <br></br>
            <button type="submit">Log-In</button>
            <p>New user ? Register</p>
          </div>
        </div>
      </center>
    </>
  );
};
export default Login;
