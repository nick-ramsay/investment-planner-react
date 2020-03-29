import React, { useState, useCallback } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./style.css";

function NewPortfolio() {

    const [newInvestmentName, setNewInvestmentName] = useState("");
    const [newInvestmentSymbol, setNewInvestmentSymbol] = useState("");
    const [newInvestmentType, setNewInvestmentType] = useState("");
    const [newInvestmentAmount, setNewInvestmentAmount] = useState(0);
    const [newInvestmentPrice, setNewInvestmentPrice] = useState(0);
    const [newInvestmentList, setInvestmentList] = useState([
        {
            "symbol": "AAPL",
            "name": "Apple",
            "type": "Stock",
            "price": 219,
            "amount": 5000
        },
        {
            "symbol": "VTI",
            "name": "Vanguard Total Market ETF",
            "type": "ETF",
            "price": 108,
            "amount": 15000
        },
        {
            "symbol": "MSFT",
            "name": "Microsoft",
            "type": "Stock",
            "price": 110,
            "amount": 10000
        }
    ]);

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
                                <input type="text" className="form-control" onChange={e => setNewInvestmentName(e.target.value)} name="addInvestmentName" placeholder="Investment Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="addPortfolioSymbol">Investment Symbol</label>
                                <input type="text" className="form-control" onChange={e => setNewInvestmentSymbol(e.target.value)} name="addInvestmentSymbol" placeholder="Investment Symbol" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div class="form-group col-md-4">
                                <label for="addInvestmentType">Investment Type</label>
                                <select name="addInvestmentType" class="form-control" onChange={e => setNewInvestmentType(e.target.value)}>
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
                        <button
                            type="button"
                            className="btn btn-custom defaultBtn"
                            name="addNewInvestmentBtn"
                            onClick={e => setInvestmentList(
                                oldInvestmentList =>
                                    [
                                        ...oldInvestmentList,
                                        
                                            {
                                                "name": newInvestmentName,
                                                "symbol": newInvestmentSymbol,
                                                "type": newInvestmentType,
                                                "amount": newInvestmentAmount,
                                                "price": newInvestmentPrice
                                            }
                                        
                                    ]
                            )}
                        >Add New Investment</button>
                    </form>
                </div>
                <div className="col-md-12 mt-4">
                    <div className="row">
                        {newInvestmentList.map((newInvestment, index) => {
                            return (
                                <div className="col-md-3 mr-md-auto ml-md-auto mt-3 new-investment-card">
                                    <h5><strong>{newInvestment.name}</strong></h5>
                                    <p>{newInvestment.symbol + " (" + newInvestment.type + ")"}</p>
                                    <p>{"Amount: $" + newInvestment.amount}</p>
                                    <p>{"Price: $" + newInvestment.price}</p>
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

export default NewPortfolio;