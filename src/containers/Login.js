import React, { useEffect } from 'react';
import "../css/Login.css"

const Login = (props) => {
    let { logIn, logInMessage, refreshAccessToken } = props

    // const dispatchGetAccessToken = () => {
    //     getAccessToken()
    // }

    // useEffect(dispatchGetAccessToken, [])

    return (
        <div id='login' className='container-fluid d-flex align-items-center justify-content-center'>
            <div className='row'>
                <div className='col-12'>
                    <div className='row text-center'>
                        <h1 className='col-12'
                            onClick={() => { logIn("setdavid", "setdavid0501") }}
                        // onClick={() => { refreshAccessToken() }}
                        >
                            Let's Go!
                        </h1>
                    </div>
                    <div className='row'>
                        <div className='col-12 d-flex justify-content-center'>
                            {logInMessage}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Login