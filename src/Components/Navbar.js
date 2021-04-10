import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart ,faUser  } from '@fortawesome/free-solid-svg-icons'


function Navbar(){
    return(
        <div id='navbar'>

            <div id="navbar-top">
                <div id="logo">
                    C H A R S I N E 
                </div>

                <div id="navbar-icons">
                    <FontAwesomeIcon icon={faSearch} />
                    <FontAwesomeIcon icon={faShoppingCart} style={{"padding-right": "30", "padding-left": "30" }} />
                    <FontAwesomeIcon icon={faUser} />
                </div>

            </div>
            <br/>
            <br/>
            <div id="navbar-bottom">
                <div class="navbar-menu-item">Blog</div>
                <div id="navbar-menu-item">Boards</div>
                <div id="navbar-menu-item">Picnic Accessories</div>
            </div>

        </div>
    )
}

export default Navbar