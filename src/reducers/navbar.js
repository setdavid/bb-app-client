import constants from "../constants";

const initialState = {
    navbarPanelOpen: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.TOGGLE_NAVBAR_PANEL:
            return { ...state, navbarPanelOpen: action.payload.navbarPanelOpen };
        default:
            return state;
    };
}

export default reducer