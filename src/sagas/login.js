import { call, delay, put, takeLatest } from "redux-saga/effects"
import actions from "../actions"
import constants from "../constants"
import { requestLogIn } from "./apiRequests"

function* delayRefreshAccessToken(expiresIn) {
    yield delay((expiresIn - 60) * 1000)
    yield put(actions.refreshAccessToken())
}

function* handleLogIn(action) {
    try {
        const response = yield call(requestLogIn, action.payload.username, action.payload.password)
        const data = response.data
        sessionStorage.setItem("access_token", data.access_token)
        sessionStorage.setItem("refresh_token", data.refresh_token)
        yield put(actions.setLogInMessage(""))
        yield put(actions.setLoggedIn(true))
    } catch (err) {
        const errorRes = err.response
        console.log(errorRes)

        if (errorRes.status == 401) {
            yield put(actions.setLogInMessage("Username or password does not match"))
        } else {
            yield put(actions.setLogInMessage(errorRes.statusText))
        }
    }
}

// function* handleGetAccessToken(action) {
//     try {
//         const refreshAccessTokenRes = yield call(requestRefreshAccessToken)
//         const refreshAccessTokenResData = refreshAccessTokenRes.data

//         if (refreshAccessTokenResData.status) {
//             localStorage.removeItem("access_token")
//             localStorage.removeItem("refresh_token")
//         } else {
//             localStorage.setItem("access_token", refreshAccessTokenResData.access_token)
//         }

//         const getAccountRes = yield call(requestGetAccount)
//         const getAccountResData = getAccountRes.data

//         if (getAccountResData.status) {
//             const response = yield call(requestGetAccessToken)
//             let data = response.data
//             console.log(data)

//             if (data.status) {
//                 yield put(actions.setLoggedIn(false))
//             } else {
//                 localStorage.setItem("access_token", data.access_token)
//                 localStorage.setItem("refresh_token", data.refresh_token)
//                 yield put(actions.setLoggedIn(true))
//                 yield put(actions.getAccount())
//                 window.history.pushState({}, null, REDIRECT_URI)
//                 yield delayRefreshAccessToken(data.expires_in)
//             }
//         } else {
//             yield put(actions.setLoggedIn(true))
//             yield put(actions.setAccountInfo(getAccountResData))
//             window.history.pushState({}, null, REDIRECT_URI)
//             yield delayRefreshAccessToken(refreshAccessTokenResData.expires_in)
//         }
//     } catch (err) {
//         console.log(err)
//     }
// }

function* handleRefreshAccessToken(action) {
    // try {
    //     const response = yield call(requestRefreshAccessToken)
    //     let data = response.data
    //     console.log(data)

    //     if (!data.status) {
    //         localStorage.setItem("access_token", data.access_token)
    //         yield delayRefreshAccessToken(data.expires_in)
    //     }
    // } catch (err) {
    //     console.log(err);
    // }
}

export function* logInWatcher() {
    yield takeLatest(constants.LOG_IN, handleLogIn)
}

export function* refreshAccessTokenWatcher() {
    yield takeLatest(constants.REFRESH_ACCESS_TOKEN, handleRefreshAccessToken)
}