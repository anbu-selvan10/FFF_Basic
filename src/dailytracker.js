import React from 'react'; 
import './styles/dailyspendings.css';
import logo from './img/logofff2.jpg';
import { useState } from 'react';
import { useEffect } from 'react';

function DTracker(){
    
  const [rmCoins, setRmCoins] = useState(0);

  const onRecord = () => {
    setRmCoins(prevRmCoins => prevRmCoins + 1);
  }

  useEffect(() => {
    console.log('rmCoins updated:', rmCoins);
  }, [rmCoins]);


    return(

        <>
        <nav className="navbar navbar-expand-lg">
        <img className="logo" src={logo} id="imgcoins" alt="Logo" />
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <a className="nav-link" href="#"><b>Home</b></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#"><b>Budgeting</b></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#"><b>RM Coins:{rmCoins}</b></a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="title p-3" id="dspendings">
          <h1>
            <b>Daily Tracker</b>
          </h1>
        </div>

        <div className="container" id="blabla">
          <h4>
            <i>Record your daily spendings here!</i>
          </h4>
        </div>

        <br />
        <br />
        <div className="row justify-content-center mt-4">
          {/* First row */}
          <div className="col-lg-4 col-md-6">
            <form id="register" method="post" className="text-center">
              <div className="fade-in-once mb-3">
                <label>
                  <h5 id="entertainment">Entertainment</h5>
                </label>
              </div>
              <input type="text" id="entertainment" className="form-control mb-3" />

              <div className="fade-in-once mb-3">
                <label>
                  <h5 id="medical">Medical Expenses</h5>
                </label>
              </div>
              <input type="text" id="medical" className="form-control mb-3" />
            </form>
          </div>

          {/* Second row */}
          <div className="col-lg-4 col-md-6">
            <form id="register" method="post" className="text-center">
              <div className="fade-in-once mb-3">
                <label>
                  <h5 id="household">Groceries & Household</h5>
                </label>
              </div>
              <input type="text" id="household" className="form-control mb-3" />

              <div className="fade-in-once mb-3">
                <label>
                  <h5 id="transportation">Transportation</h5>
                </label>
              </div>
              <input type="text" id="transportation" className="form-control mb-3" />
            </form>
          </div>
        </div>

        {/* Third row */}
        <div className="row justify-content-center mt-2">
          <div className="col-lg-4 col-md-6">
            <form id="register" method="post" className="text-center">
              <div className="fade-in-once mb-3">
                <label>
                  <h5 id="loan">Loan</h5>
                </label>
              </div>
              <input type="text" id="loan" className="form-control mb-3" />
            </form>
          </div>

          <div className="col-lg-4 col-md-6">
            <form id="register" method="post" className="text-center">
              <div className="fade-in-once mb-3">
                <label>
                  <h5 id="others">Others</h5>
                </label>
              </div>
              <input type="text" id="others" className="form-control mb-3" />
            </form>
          </div>
        </div>

        {/* Fourth row for the Record button */}
        <div className="row justify-content-center mt-2" id="record">
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <button onClick={onRecord} className="btn btn-primary mx-2">Record</button>
          </div>
        </div>
      </div>
    


       </>
    );
}

export default DTracker;
