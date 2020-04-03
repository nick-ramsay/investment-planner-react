import React, { useState } from 'react';
import LoginNavbar from "../../components/LoginNavbar/LoginNavbar";
import Footer from "../../components/Footer/Footer";
//import portfolio_data from "../../data.json";
import "./style.css";

function Home() {

    //const [portfolioData, setPortfolioData] = useState(portfolio_data);

    return (
        <div>
            <LoginNavbar />
            <Footer />
        </div>
    )
}

export default Home;