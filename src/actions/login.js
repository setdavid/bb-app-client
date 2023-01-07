import constants from "../constants"

const logIn = (username, password) => ({
    type: constants.LOG_IN,
    payload: {
        username,
        password
    }
})

const setLoggedIn = (loggedIn) => ({
    type: constants.SET_LOGGED_IN,
    payload: {
        loggedIn
    }
})

const refreshAccessToken = () => ({
    type: constants.REFRESH_ACCESS_TOKEN
})

const setLogInMessage = (logInMessage) => ({
    type: constants.SET_LOG_IN_MESSAGE,
    payload: {
        logInMessage
    }
})

export default {
    logIn,
    setLoggedIn,
    refreshAccessToken,
    setLogInMessage
}