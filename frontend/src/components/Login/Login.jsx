import React, { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assests.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext.jsx";
import axios from "axios";
import GoogleSignin from "../GoogleSignin/GoogleSignin.jsx";
import { toast } from "react-toastify";
import "./Login.css";

const Login = () => {
  const { url, setToken } = useContext(StoreContext);
  const [signUpMode, setSignUpMode] = useState(true);
  const navigate = useNavigate();

  const handleSignUpClick = () => setSignUpMode(true);
  const handleSignInClick = () => setSignUpMode(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      return "Password must be at least 8 characters long.";
    }
    if (!hasUpperCase) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!hasSpecialChar) {
      return "Password must contain at least one special character.";
    }
    return null; // Password is valid
  };

  const onLogin = async (event) => {
    event.preventDefault();

    // Validate password if user is trying to sign up or log in
    const passwordError = validatePassword(data.password);
    if (passwordError) {
      toast.error(passwordError);
      return; // Stop the form submission
    }

    let newurl = url;
    if (signUpMode === true) {
      //login condition h and we hit login api
      newurl += "/api/user/register";
    } else {
      //signup condition h and we hit register api
      newurl += "/api/user/login";
    }

    const response = await axios.post(newurl, data);
    // console.log(response);

    try {
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          navigate("/");
        } else {
          toast.error(response.data.message);
        }
    } catch (error) {
        toast.error("Error during authentication");
    }
  };

  useEffect(() => {
    // console.log(data);
    // console.log("Abhi kya Halchal", signUpMode);
  }, [data]);

  return (
    <div className={`screen ${signUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={onLogin} action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                name="email"
                onChange={onChangeHandler}
                value={data.email}
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                name="password"
                onChange={onChangeHandler}
                value={data.password}
                type="password"
                placeholder="Password"
              />
            </div>
            <button className="btn solid" type="submit">
              Login
            </button>
          </form>

          <form onSubmit={onLogin} action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                name="name"
                onChange={onChangeHandler}
                value={data.name}
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                name="email"
                onChange={onChangeHandler}
                value={data.email}
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                name="password"
                onChange={onChangeHandler}
                value={data.password}
                type="password"
                placeholder="Password"
              />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text text-black">
              Or Sign up with social platforms
            </p>
            <div className="social-media">
                <GoogleSignin />
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <Link to="/" className="inline-block mb-[1rem]">
              <img
                src={assets.logo}
                className="w-48 cursor-pointer"
                alt="Home"
              />
            </Link>
            <h3 className="text-[#9fa4a9]">One of us ?</h3>
            <p>
              Welcome back! Log in to access your account, and explore more great offers.
            </p>
            <button
              className="btn transparent"
              onClick={() => {
                handleSignUpClick();
                setData({ name: "", email: "", password: "" });
              }}
            >
              Sign up
            </button>
          </div>
          <img src={assets.log} className="image" alt="" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <Link to="/" className="inline-block mb-[1rem]">
              <img
                src={assets.logo}
                className="w-48 cursor-pointer"
                alt="Home"
              />
            </Link>
            <h3 className="text-[#9fa4a9]">New here ?</h3>
            <p>
              Discover our platform and explore amazing deals crafted just for you
            </p>
            <button
              className="btn transparent"
              onClick={() => {
                handleSignInClick();
                setData({ name: "", email: "", password: "" });
              }}
            >
              Sign in
            </button>
          </div>
          <img src={assets.register} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;