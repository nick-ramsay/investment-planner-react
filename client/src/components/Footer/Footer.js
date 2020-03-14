import React, { Component } from "react";
import GithubLogoWhite from "../../images/GitHub_Logo_White.png";
import "./style.css";

class Footer extends Component {
    render() {
        return (
            <footer className="fixed-bottom text-center">
                <a href="https://github.com/nick-ramsay/investment-planner-react" target="_blank" rel="noopener noreferrer"><img src={GithubLogoWhite} alt="Github Logo" width="60px" /></a>
            </footer>
        )
    }
}

export default Footer;