import React from 'react';
import "../css/Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import NavbarPanel from './NavbarPanel';

const Navbar = (props) => {
    const { navbarPanelOpen, toggleNavbarPanel } = props

    const displayPanel = {
        transform: "rotate(45deg)",
        color: "white"
    }

    return (
        <div id='navbar' className='container-fluid d-lg-none'>
            <NavbarPanel navbarPanelOpen={navbarPanelOpen} toggleNavbarPanel={toggleNavbarPanel} />
            <div className='row'>
                <div className='col-12 d-flex justify-content-between align-items-center'>
                    <h3>
                        Evelyn Hong
                    </h3>
                    <div id="navbar-plus-icon" onClick={() => toggleNavbarPanel(!navbarPanelOpen)} style={navbarPanelOpen ? displayPanel : {}}>
                        <FontAwesomeIcon icon={faPlus} size="xl" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;