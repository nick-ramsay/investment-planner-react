import React, { Component } from "react";
import "./style.css";

class LoginNavbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-custom">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link" href="/portfolios">Portfolios</a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default LoginNavbar;