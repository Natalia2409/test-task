import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import { auth } from "../firebase";

function SignUp() {

    const [shown, setShown] = useState(false);
    const [shownRepeat, setShownRepeat] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordRepeatDirty, setPasswordRepeatDirty] = useState(false);
    const [emailError, setEmailError] = useState("Enter valid email");
    const [passwordError, setPasswordError] = useState("Enter valid password");
    const [passwordRepeatError, setPasswordRepeatError] = useState("Enter valid password");
    const [formValid, setFormValid] = useState(false);
    const [nameOfUser, setNameOfUser] = useState("");

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const fullName = (e) => {
        setNameOfUser(e.target.value)
        console.log(nameOfUser)
    }

    const register = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            alert(error)
        })
    };

    const togglePasswordVisibility = () => {
        setShown(!shown)
    }

    const togglePasswordRepeatVisibility = () => {
        setShownRepeat(!shownRepeat)
    }

    const comparisonPassword = () => {
        if (password !== passwordRepeat) {
            alert("Passwords must be the same!")
            setFormValid(false)
        }
    }

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError]);

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError("Enter valid email");
        } else {
            setEmailError("");
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        const re = /^(?=.*[!@#$%^&*])(?=.*[A-Z]{2})(?=.[0-9a-zA-Z!@#$%^&*]).{9,}$/;
        if (!re.test(e.target.value)) {
            setPasswordError("Enter valid password")
            if (!e.target.value) {
                setPasswordError("Enter valid password")
            }
        } else {
            setPasswordError("");
        }
    }

    const passwordRepeatHandler = (e) => {
        setPasswordRepeat(e.target.value);
        const re = /^(?=.*[!@#$%^&*])(?=.*[A-Z]{2})(?=.[0-9a-zA-Z!@#$%^&*]).{9,}$/;
        if (!re.test(e.target.value)) {
            setPasswordRepeatError("Enter valid password")
            if (!e.target.value) {
                setPasswordRepeatError("Enter valid password")
            }
        } else {
            setPasswordRepeatError("");
        }
    }

    const blurHandler = (e) => {
        switch(e.target.name) {
            case "email":
                setEmailDirty(true);
                break;
            case "password":
                setPasswordDirty(true)
                break;
            case "passwordRepeat":
                setPasswordRepeatDirty(true)
                break;
        }
    }

    return (
        <div className="border">
            <div className="backArea">
                <div className="signUp__content">
                    <h1>Sign Up</h1>
                    <div className="newForm">
                        <div className="newForm__inputs">
                            <p>Full name</p>
                            <input
                                type="text"
                                name="fullName"
                                onChange={fullName}
                                placeholder="John Doe" />
                        </div>
                        <div className="newForm__inputs">
                            <p>Email</p>
                            <input
                                ref={emailRef}
                                type="email"
                                onBlur={e => blurHandler(e)}
                                onChange={e => emailHandler(e)} value={email}
                                name="email"
                                placeholder="example@acme.com"
                                autoComplete="off" />
                            {(emailDirty && emailError) && <div className="newForm__error">{emailError}</div>}
                        </div>
                        <div className="newForm__inputs">
                            <div className="newForm__hint">
                                <p>Password</p>
                                <i data-tip data-for="icon" className="fas fa-question-circle"></i>
                                <ReactTooltip
                                    id="icon"
                                    place="top"
                                    className="newForm__tooltip"
                                    effect="solid">
                                    Password must contain 8+ symbols, 1 special and 2 capital letters
                                </ReactTooltip>
                            </div>
                            <input
                                ref={passwordRef}
                                className="password"
                                type={(shown) ? "text" : "password"}
                                onBlur={e => blurHandler(e)}
                                onChange={e => passwordHandler(e)} value={password}
                                name="password" />
                            <i
                                onClick={togglePasswordVisibility}
                                className={`fas ${!shown ? "fa-eye" : "fa-eye-slash"} newForm__password-eye newForm__pass`}></i>
                            {(passwordDirty && passwordError) && <div className="newForm__error">{passwordError}</div>}
                        </div>
                        <div className="newForm__inputs">
                            <p>Repeat password</p>
                            <input
                                className="password"
                                type={(shownRepeat) ? "text" : "password"}
                                onBlur={e => blurHandler(e)}
                                onChange={e => passwordRepeatHandler(e)} value={passwordRepeat}
                                name="passwordRepeat"
                                placeholder="Passwords must be the same" />
                            <i onClick={togglePasswordRepeatVisibility} className={`fas ${!shownRepeat ? "fa-eye" : "fa-eye-slash"} newForm__password-eye`}></i>
                            {(passwordRepeatDirty && passwordRepeatError) && <div className="newForm__error">{passwordRepeatError}</div>}
                        </div>
                        <Link to={{
                            pathname: "/main",
                            name: nameOfUser
                        }}><button onClick={register} disabled={!formValid}>Sign Up</button></Link>
                    </div>
                    <p className="newForm__text">Already have an account? <Link to="/signin"><span>Sign In</span></Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
