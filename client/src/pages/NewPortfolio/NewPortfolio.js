import React, { useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import portfolio_data from "../../data.json";
import "./style.css";

function NewPortfolio() {

    const [portfolioData, setPortfolioData] = useState(portfolio_data);
    const [newInvestmentAmount, setNewInvestmentAmount] = useState(0);
    const [newInvestmentPrice, setNewInvestmentPrice] = useState(0);

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="col-md-12 mt-4 p-2 form-container">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label for="newPortfolioName">Portfolio Name</label>
                                <input type="text" className="form-control" name="newPortfolioName" placeholder="Portfolio Name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="newPortfolioAmount">Total Capital</label>
                            <input type="number" min="0.00" defaultValue="0" step="0.01" className="form-control" name="newPortfolioAmount" placeholder="Total Capital" />
                        </div>
                        <button type="button" className="btn btn-custom defaultBtn" name="saveNewPortfolioBtn">Save</button>
                    </form>
                </div>
                <div className="col-md-12 mt-4 p-2 form-container">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="addPortfolioName">Investment Name</label>
                                <input type="text" className="form-control" name="addInvestmentName" placeholder="Investment Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="addPortfolioSymbol">Investment Symbol</label>
                                <input type="text" className="form-control" name="addInvestmentSymbol" placeholder="Investment Symbol" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div class="form-group col-md-4">
                                <label for="addInvestmentType">Investment Type</label>
                                <select name="addInvestmentType" class="form-control">
                                    <option selected>Choose investment type...</option>
                                    <option>Stock</option>
                                    <option>ETF</option>
                                    <option>Mutual Fund</option>
                                    <option>REIT</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label for="addInvestmentAmount">Investment Amount</label>
                                <input type="number" min="0.00" defaultValue="0" step="0.01" className="form-control" onChange={e => setNewInvestmentAmount(e.target.value)} name="addInvestmentAmount" placeholder="Investment Amount" />
                            </div>
                            <div className="form-group col-md-4">
                                <label for="addInvestmentPrice">Investment Price</label>
                                <input type="number" min="0.00" defaultValue="0" step="0.01" className="form-control" onChange={e => setNewInvestmentPrice(e.target.value)} name="addInvestmentPrice" placeholder="Investment Price" />
                            </div>
                            <p>{newInvestmentAmount > 0 && newInvestmentPrice > 0 && "You can buy " + Math.floor(newInvestmentAmount / newInvestmentPrice) + " shares of this investment."}</p>
                        </div>
                        <button type="button" className="btn btn-custom defaultBtn" name="addNewInvestmentBtn">Add New Investment</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NewPortfolio;