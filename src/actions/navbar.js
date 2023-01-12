import constants from "../constants"

const toggleNavbarPanel = (navbarPanelOpen) => ({
    type: constants.TOGGLE_NAVBAR_PANEL,
    payload: {
        navbarPanelOpen
    }
})

export default {
    toggleNavbarPanel
}