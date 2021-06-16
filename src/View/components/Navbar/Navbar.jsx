import React, { Component } from 'react'
import "./Navbar.css";

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
        <div className = "navbar">
            <div className="navbar-icons">
                <i class="fa fa-square" aria-hidden="true"></i>
                <i class="fa fa-circle" aria-hidden="true"></i>
                <i class="fa fa-caret-down tri" aria-hidden="true"></i>
            </div>
        </div> 
        );
    }
}
 
export default Navbar;