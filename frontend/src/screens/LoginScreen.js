import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
// import { Form, Button, Row, Col } from "react-bootstrap";
// import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { login } from "../actions/userAction";
import "./LoginScreen.css";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const redirect = searchParams[1] ? searchParams[1].value : "/";

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <div className="signin">
        <div id="logincard">
          <div id="card-content">
            <div id="card-title">
              <h2>LOGIN</h2>
              <div className="underline-title"></div>
            </div>
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader>loading</Loader>}
            <form method="post" className="form" onSubmit={submitHandler}>
              <label>Email</label>
              <input
                className="form-content"
                type="email"
                // placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className={`form-border`} />
              <label>Password</label>
              <input
                className="form-content"
                type="password"
                // placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className={`form-border`} />

              {/* <input
                element="input"
                id="password"
                type="password"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                errorText="Enter a Valid Password atleast lenght 5"
              /> */}
              <button
                className="login-submit-btn"
                type="submit"
                name="submit"
                value="LOGIN"
              >
                LogIn
              </button>

              <div id="signup">
                New Customer?{" "}
                <Link
                  to={redirect ? `/register?redirect=${redirect}` : "/register"}
                >
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
