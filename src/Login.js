import { Button } from '@material-ui/core';
import React from 'react';
import {login} from "./features/userSlice";
import { useDispatch } from 'react-redux';
import {auth, provider} from "./firebase";
import "./Login.css";

const Login = () => {
    const dispatch = useDispatch();

    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(({user})=>{
            dispatch(
                login({
                displayName:user.displayName,
                email:user.email,
                photoUrl:user.photoURL,
            }))
        })
        .catch((error)=>alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="Gmail_image.webp" alt="" />
                <Button variant="contained" color="primary" onClick={signIn}>Login with Gmail</Button>
            </div>
        </div>
    )
}

export default Login;
