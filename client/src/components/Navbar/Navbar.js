import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-item nav-link" href="/"><strong>Logout</strong></a>
                        </li>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;