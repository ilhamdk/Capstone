import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="section-login">
    <div className="color"></div>
    <div className="color"></div>
    <div className="color"></div>
    <div className="box">
      <div className="square" style={{ "--i":"0" }}></div>
      <div className="square" style={{ "--i":"1" }}></div>
      <div className="square" style={{ "--i":"2" }}></div>
      <div className="square" style={{ "--i":"3" }}></div>
       <div className="container-login">
        <div className="form-login">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="inputBox">
              <input type="email" placeholder="email"/>
            </div>
            <div className="inputBox">
              <input type="password" placeholder="password" name="" id=""/>
            </div>
            <div className="inputBox">
              <input type="submit" value="Sign in"/>
            </div>
            {err && <span>Something went wrong</span>}
            <p className="forget">Dont have an account? <Link to="/register">Sign Up</Link></p>
            <p className="forget">Go back to <Link to="/landing">Home?</Link></p>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;
