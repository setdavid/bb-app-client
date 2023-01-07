import constants from "../constants";

const initialState = {
    loggedIn: false,
    logInMessage: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SET_LOGGED_IN:
            return { ...state, loggedIn: action.payload.loggedIn };
        case constants.SET_LOG_IN_MESSAGE:
            return { ...state, logInMessage: action.payload.logInMessage };
        default:
            return state;
    };
}

export default reducer