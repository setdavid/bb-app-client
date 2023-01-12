import React from 'react';
import "../css/NavbarPanel.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'


const NavbarPanel = (props) => {
    const { navbarPanelOpen, toggleNavbarPanel } = props

    const displayPanel = {
        // left: 0,
        // top: 0
        opacity: 1,
        maxHeight: "100vh"
    }

    return (
        <div id='navbar-panel' className='container-fluid' style={navbarPanelOpen ? displayPanel : {}}>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center align-items-center'>
                    <div id="navbar-panel-link-group">
                        <h3>
                            Evelyn Hong
                        </h3>
                        <h5>
                            Blog
                        </h5>
                        <h5>
                            Gallery
                        </h5>
                        <h5>
                            About Me
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarPanel;