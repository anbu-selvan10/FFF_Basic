import React from 'react';
import './styles/rmstore.css';
import { useNavigate } from 'react-router-dom';

import netflix from './img/Netflix-Symbol.png';
import lens from './img/lens.png';

import headph from './img/hdphones.jpeg';
import logofff from './img/logofff2.jpg'

function RMstore(){
    let navigate = useNavigate();

    const onH = () => {
      navigate("/");
      
    }

    const onD = () => {
      navigate("/dtracker");
    }

    const onB = () => {
      navigate("/budget");
    }

    const onS = () => {
      navigate("/spend");
    }

    const onR = () => {
      navigate("/bot")
    }

    const coins = localStorage.getItem("coins");

    return(
    <div className="rmstore">
      <nav className="navbar navbar-expand-lg rmpnav">
        <img alt="Bot Logo" id="botstlogo" src={logofff} />
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a onClick={onH} className="nav-link" href="#"><b>Home</b></a>
            </li>
            <li className="nav-item">
              <a onClick={onB} className="nav-link" href="#"><b>Budgeting</b></a>
            </li>
            <li className="nav-item">
              <a onClick={onS} className="nav-link" href="#"><b>Spending Analysis</b></a>
            </li>
            <li className="nav-item">
              <a onClick={onD} className="nav-link" href="#"><b>Daily Tracker</b></a>
            </li>
            <li className="nav-item">
              <a onClick={onR} className="nav-link" href="#"><b>RM Bot</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><b>RM Store</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><b>RM Coins:{coins}</b></a>
            </li>
          </ul>
        </div>
      </nav>



      <br />
      <br />
      <h1 className="rmsttitle"><b>RM Store</b></h1>
      <br />
      <br />
      <br />
      <div className="botcontainer-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-3" style={{ marginRight: '80px' }}>
            <div className="botcard budget-card budget-card-center">
              <div className="card-body">
                <div className="fade-in-once">
                  <img className="netfl" src={netflix} id="netflix" alt="Netflix" />
                  <br />
                  <div className="botcardtext">
                    <br />
                    <h3><b>Netflix Subscription</b></h3>
                  </div>
                </div>
                <br />
                <button className="netbutton">
                  500
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="botcard budget-card budget-card-center">
              <div className="card-body">
                <div className="fade-in-once">
                  <img className="netfl"  id="hdphones" alt="Headphones" src={headph}/>
                  <br />
                  <div className="botcardtext">
                    <br />
                    <h3><b>SONY Headphones</b></h3>
                  </div>
                </div>
                <br />
                <button className="netbutton">
                  1000
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3" style={{ marginLeft: '40px' }}>
            <div className="botcard budget-card budget-card-center">
              <div className="card-body">
                <div className="fade-in-once">
                  <img className="netfl" src={lens} id="lens" alt="Lenskart Coupons" />
                  <br />
                  <div className="botcardtext">
                    <br />
                    <h3><b>Lenskart Coupons $</b></h3>
                  </div>
                </div>
                <br />
                <button className="netbutton">
                  1500
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>





    );

}

export default RMstore;