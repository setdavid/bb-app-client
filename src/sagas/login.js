import { call, delay, put, takeLatest } from "redux-saga/effects"
import actions from "../actions"
import constants from "../constants"
import { requestLogIn, requestRefreshAccessToken } from "./apiRequests"

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
        yield delayRefreshAccessToken(data.expires_in)
    } catch (err) {
        const errorRes = err.response
        console.log(errorRes)

        if (errorRes.status == 401) {
            yield put(actions.setLogInMessage("Username or password does not match"))
        } else {
            yield put(actions.setLogInMessage(errorRes.statusText))
        }

        yield put(actions.setLoggedIn(false))
    }
}

function* handleRefreshAccessToken(action) {
    try {
        const response = yield call(requestRefreshAccessToken)
        const data = response.data
        sessionStorage.setItem("access_token", data.access_token)
        yield delayRefreshAccessToken(data.expires_in)
    } catch (err) {
        const errorRes = err.response
        console.log(errorRes)
    }
}

export function* logInWatcher() {
    yield takeLatest(constants.LOG_IN, handleLogIn)
}

export function* refreshAccessTokenWatcher() {
    yield takeLatest(constants.REFRESH_ACCESS_TOKEN, handleRefreshAccessToken)
}