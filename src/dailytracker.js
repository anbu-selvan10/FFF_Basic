import React from 'react'; 
import './styles/dailyspendings.css';
import dlogo from './img/logofff2.jpg';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function DTracker(){

  let navigate = useNavigate();
    
  const [rmCoins, setRmCoins] = useState(0);

  const [enter, setEnter] = useState(0);
  const [med, setMed] = useState(0);
  const [groc, setGroc] = useState(0);
  const [trans, setTrans] = useState(0);
  const [lo, setLo] = useState(0);
  const [oth, setOth] = useState(0);

  const username = "Anbu";

  const numericEnter = parseInt(enter);
  const numericMed = parseInt(med);
  const numericGroc = parseInt(groc);
  const numericTrans = parseInt(trans);
  const numericLo = parseInt(lo);
  const numericOth = parseInt(oth);

  const send = () => {
    axios.post('http://localhost:4000/register', { numericEnter, numericMed, numericGroc, numericTrans, numericLo, numericOth, username })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error("Registration error:", error);
        });
    setRmCoins(prevRmCoins => prevRmCoins + 1);
    alert("Congratulations! You have earned a RM Coin");
};


  const onB = () => {
    navigate("/budget");
  }

  const onR = () => {
    navigate("/bot");
  }

  const onH = () => {
    navigate("/");
  }


    return(

        <div className='dailyspd'>
        <nav className="navbar navbar-expand-lg">
        <img className="dlogo" src={dlogo} id="imgcoins" alt="Logo" />
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <a className="nav-link" onClick={onH} href="#"><b>Home</b></a>
            </li>
            <li className="nav-item">
            <a onClick={onB} className="nav-link" href="#"><b>Budgeting</b></a>
            </li>
            <li className="nav-item">
            <a onClick={onB} className="nav-link" href="#"><b>Spending Analysis</b></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#"><b>Daily Tracker</b></a>
            </li>
            <li className="nav-item">
            <a onClick={onR} className="nav-link" href="#"><b>RM Bot</b></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#"><b>RM Coins:{rmCoins}</b></a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="dtitle p-3" id="dspendings">
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
        <br />
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
              <input type="numeric" onChange={(e) => setEnter(e.target.value)} id="entertainment" className="form-control mb-3" />

              <div className="fade-in-once mb-3">
                <label>
                  <h5 id="medical">Medical Expenses</h5>
                </label>
              </div>
              <input type="numeric" onChange={(e) => setMed(e.target.value)} id="medical" className="form-control mb-3" />
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
              <input type="numeric" onChange={(e) => setGroc(e.target.value)} id="household" className="form-control mb-3" />

              <div className="fade-in-once mb-3">
                <label>
                  <h5 id="transportation">Transportation</h5>
                </label>
              </div>
              <input type="numeric" onChange={(e) => setTrans(e.target.value)} id="transportation" className="form-control mb-3" />
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
              <input type="numeric" onChange={(e) => setLo(e.target.value)} id="loan" className="form-control mb-3" />
            </form>
          </div>

          <div className="col-lg-4 col-md-6">
            <form id="register" method="post" className="text-center">
              <div className="fade-in-once mb-3">
                <label>
                  <h5 id="others">Others</h5>
                </label>
              </div>
              <input type="numeric" onChange={(e) => setOth(e.target.value)} id="others" className="form-control mb-3" />
            </form>
          </div>
        </div>

        {/* Fourth row for the Record button */}

        <div className="row justify-content-center mt-2" id="record">
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
          <div className="dbutton">
            <button onClick={send} className="btn btn-primary mx-2">Record</button>
            </div>
          </div>
        </div>
      </div>
    


       </div>
    );
}

export default DTracker;
