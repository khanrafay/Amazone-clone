import React, { useState } from 'react'
import './Login.css'
import LogoImage from './Images/logo2.png'
import {auth, db} from './firebase'
import {useHistory} from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    const signIn = e => {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
        
    }

    const register = e => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if(auth)
                 history.push('/');
        })
        .catch((error) => alert(error.message))
    }
    return (
        <div className="login">
            <img
            src={LogoImage}
            className="login__image"
            />
            <div className="login__container">
                <h1>Sign-in</h1>

                <form className="login__form">
                    <h5>Email</h5>
                    <input 
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input 
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />

                    <button type="submit" 
                    onClick={signIn}
                    className="login__signInButton">Sign In</button>
                </form>
                <p>By Signing-in you agree to Amazon's 
                Clone Conditions
                </p>

                <button 
                onClick={register}
                className="login__registerButton">
                    Create your Amazon Account
                    </button>
            </div>
        </div>
    )
}

export default Login
