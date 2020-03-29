import React, { useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import portfolio_data from "../../data.json";
import "./style.css";

function Portfolios() {

    const [portfolioData, setPortfolioData] = useState(portfolio_data);

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3 mr-md-auto ml-md-auto mt-3 text-center portfolio-card" id="addPortfolioCard">
                            <a href="/new-portfolio" className="addPortfolioBtn" name="addPortfolioBtn">+</a>
                            <h5>Add New Portolio</h5>
                        </div>
                        {portfolioData.map((portfolio, index) => {
                            return (
                                <div className="col-md-3 mr-md-auto ml-md-auto mt-3 portfolio-card">
                                    <h5><strong>{portfolio.name}</strong></h5>
                                    <p>{portfolio.total_capital && "$" + portfolio.total_capital.toFixed(2)}</p>
                                    <p><span className="openPortfolioBtn"><strong>Open</strong></span></p>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Portfolios;