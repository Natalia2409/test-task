import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { auth } from "../firebase";

function SignIn() {

    const [shown, setShown] = useState(false);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const signIn = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            alert(error)
        })
    };

    const togglePasswordVisibility = () => {
        setShown(!shown);
    }

    return (
        <div className="border">
            <div className="backArea">
                <div className="signUp__content">
                    <h1>Sign In</h1>
                    <div className="newForm">
                        <div className="newForm__inputs">
                            <p>Email</p>
                            <input
                                ref={emailRef}
                                type="email"
                                name="email"
                                placeholder="example@acme.com"
                                autoComplete="off" />
                        </div>
                        <div className="newForm__inputs">
                            <p>Password</p>
                            <input
                                ref={passwordRef}
                                className="password"
                                type={(shown) ? "text" : "password"}
                                name="password" />
                            <i onClick={togglePasswordVisibility} className={`fas ${!shown ? "fa-eye" : "fa-eye-slash"} newForm__password-eye`}></i>
                        </div>
                        <Link to="/main"><button onClick={signIn}>Sign In</button></Link>
                    </div>
                    <p className="newForm__text">Don’t have an account yet? <Link to="/signup"><span>Sign Up</span></Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignIn;