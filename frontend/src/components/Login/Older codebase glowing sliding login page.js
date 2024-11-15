import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assests.js';
import 'boxicons';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext.jsx';
import axios from "axios"
import GoogleSignin from '../GoogleSignin/GoogleSignin.jsx';

const Login = () => {
    const{ url,setToken } = useContext(StoreContext)
    const[currState, setCurrState] = useState("Sign Up")
    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data,[name]:value}))
    }

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
            alert(passwordError); // Notify the user about the error
            return; // Stop the form submission
        }

        let newurl = url;
        if(currState === "Login"){ //login condition h and we hit login api
            newurl += "/api/user/login";
        }
        else{ //signup condition h and we hit register api
            newurl += "/api/user/register";
        }

        const response = await axios.post(newurl, data);
        console.log(response);

        if(response.data.success){
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
            navigate('/');
        }
        else{
            alert(response.data.message)
        }
    }

    // useEffect(() => {
    //     console.log(data);
    // },[data])

    const isActive = currState === "Login" ? "" : "active";
    
  return (
    <div className='container'>
        <button onClick={()=>navigate('/')}><img src={assets.logo} alt="" className='absolute left-32 top-10 max-w-[100px] h-auto underline' /></button>

        <div className='flex p-10 justify-between items-center gap-3'>
            <h1 className='text-5xl text-yellow-600'>Hi, Welcome to</h1>
            <img src={assets.logo} alt="" className='h-12' />
        </div>
        <div className={`wrapper ${isActive}`}>
            <span className='bg-animate'></span>
            <span className='bg-animate2'></span>

            <div className='form-box login'>
                <h2 className='animation' style={{ '--i': 0,'--j': 21 }}>Login</h2>
                <form onSubmit={onLogin} action="">
                    <div className='input-box animation' style={{ '--i': 1,'--j': 22 }}>
                        <input name='email' onChange={onChangeHandler} value={data.email} type="text" required/>
                        <label>Email</label>
                        <i class='bx bxs-user'></i>
                    </div>
                    <div className='input-box animation' style={{ '--i': 2,'--j': 23 }}>
                        <input name='password' onChange={onChangeHandler} value={data.password} type="password" required/>
                        <label>Password</label>
                        <i class='bx bxs-lock-alt'></i>
                    </div>
                    <button className='btn animation' type='submit' style={{ '--i': 3,'--j': 24 }}>Login</button>

                    <div  className='logreg-link animation' style={{ '--i': 4,'--j': 25 }}>
                        <p>Don't have an account?
                            <span className='register-link' onClick={() => {
                                setCurrState("Sign Up");
                                setData({ name: "", email: "", password: "" }); // Reset data state
                            }}>Sign Up</span>
                        </p>
                    </div>
                </form>
            </div>
            <div className='info-text login'>
                <h2 className='font-extrabold animation' style={{ '--i': 0, '--j': 20 }}>Welcome Back!</h2>
                <p className='animation' style={{ '--i': 1, '--j': 21 }}>lorem ipsum dolor,sit amet consecutive asapasj</p>
            </div>

            <div className='form-box register'>
                <h2 className='animation' style={{ '--i': 17, '--j': 0 }}>Sign Up</h2>
                <form onSubmit={onLogin} action="">
                    <div className='input-box animation' style={{ '--i': 18, '--j': 1 }}>
                        <input name='name' onChange={onChangeHandler} value={data.name}  type="text" required/>
                        <label>Username</label>
                        <i class='bx bxs-user'></i>
                    </div>
                    <div className='input-box animation' style={{ '--i': 19, '--j': 2 }}>
                        <input name='email' onChange={onChangeHandler} value={data.email} type="text" required/>
                        <label>Email</label>
                        <i class='bx bxs-envelope'></i>
                    </div>
                    <div className='input-box animation' style={{ '--i': 20, '--j': 3 }}>
                        <input name='password' onChange={onChangeHandler} value={data.password} type="password" required/>
                        <label>Password</label>
                        <i class='bx bxs-lock-alt'></i>
                    </div>
                    <button className='btn animation' style={{ '--i': 21, '--j': 4 }} type='submit'>Sign Up</button>

                    <div  className='logreg-link animation' style={{ '--i': 22, '--j': 5 }}>
                        <span className='h-full'>
                            <GoogleSignin />
                        </span>
                        <p className='pt-2'>Already have an account?
                            <span className='login-link' onClick={() => {
                                setCurrState("Login");
                                setData({ name: "", email: "", password: "" }); // Reset data state
                            }} href="#">Login</span>
                        </p>
                    </div>
                </form>
            </div>
            <div className='info-text register'>
                <h2 className='font-extrabold animation' style={{ '--i': 17, '--j': 0 }}>Welcome Back!</h2>
                <p className='animation' style={{ '--i': 18, '--j': 1 }}>lorem ipsum dolor,sit amet consecutive asapasj</p>
            </div>
        </div>
    </div>
  )
}

export default Login