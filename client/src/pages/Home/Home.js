import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./style.css";

class Home extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-3 mr-md-auto ml-md-auto mt-3 portfolio-card">
                                <p>Stock Name</p>
                                <p>SYMBOL</p>
                            </div>
                            <div className="col-md-3 mr-md-auto ml-md-auto mt-3 portfolio-card">
                                <p>Stock Name</p>
                                <p>SYMBOL</p>
                            </div>
                            <div className="col-md-3 mr-md-auto ml-md-auto mt-3 portfolio-card">
                                <p>Stock Name</p>
                                <p>SYMBOL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;