import React, { useEffect, useState } from 'react';
import RoundedButton from '../components/RoundedButton';
import "../css/Login.css"

const Login = (props) => {
    let { logIn, logInMessage, refreshAccessToken } = props
    let [usernameInput, setUsernameInput] = useState("")
    let [passwordInput, setPasswordInput] = useState("")

    // const dispatchGetAccessToken = () => {
    //     getAccessToken()
    // }

    // useEffect(dispatchGetAccessToken, [])

    const handleSubmit = e => {
        e.preventDefault()
        logIn(usernameInput, passwordInput)
        setUsernameInput("")
        setPasswordInput("")
    }

    return (
        <div id='login' className='container-fluid d-flex align-items-center justify-content-center'>
            <div className='row'>
                <div className='col-12'>
                    <div className='row'>
                        <div id="login-message" className='col-12'>
                            <div>
                                {logInMessage}
                            </div>
                        </div>
                    </div>
                    <div id="login-card" className='row d-flex justify-content-center'>
                        <div className='col-auto'>
                            <div className='row text-center'>
                                <h1 className='col-12'>
                                    Let's go!
                                </h1>
                            </div>
                            <div className='row'>
                                <div id="login-username-input" className='col-12'>
                                    Username:
                                    <br />
                                    <form onSubmit={handleSubmit}>
                                        <input type="text" onChange={e => { setUsernameInput(e.target.value) }} value={usernameInput} />
                                    </form>
                                </div>
                            </div>
                            <div className='row'>
                                <div id="login-password-input" className='col-12'>
                                    Password:
                                    <br />
                                    <form onSubmit={handleSubmit}>
                                        <input type="text" onChange={e => { setPasswordInput(e.target.value) }} value={passwordInput} />
                                    </form>
                                </div>
                            </div>
                            <div className='row'>
                                <div id="login-button" className='col-auto'>
                                    <RoundedButton text="Login" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Login