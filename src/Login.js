import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import { auth, provider } from "./firabase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


function Login() {
    const [state, dispatch ] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result);
        })
        .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login_logo">
            <img 
                src="https://vtpkb4cbz742mpwjg43ich01-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Facebook-Logo.png"
                alt=""/>

            <img
                src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                alt=""
                />
            </div>
            <Button type="submit" onClick={signIn}>
            Sign in
            </Button>
        </div>
        
    ) 
}

export default Login 
