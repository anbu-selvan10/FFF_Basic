import React from 'react'; 
import './styles/dailyspendings.css';
import dlogo from './img/logofff2.jpg';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function DTracker(){

  let navigate = useNavigate();
    
  const [rmCoins, setRmCoins] = useState(() => {
    const storedCoins = localStorage.getItem('coins');
    return parseInt(storedCoins) ? parseInt(storedCoins) : 0;
  });

  const [enter, setEnter] = useState(0);
  const [med, setMed] = useState(0);
  const [food, setFood] = useState(0);
  const [clothes, setClothes] = useState(0);
  const [trans, setTrans] = useState(0);
  const [edu, setEdu] = useState(0);
  const [save, setSave] = useState(0);
  const [house,setHouse] = useState(0);

  const [dayNo, setDayNo] = useState(() => {
    const storedDayNo = localStorage.getItem('dayNo');
    return storedDayNo !== null ? parseInt(storedDayNo) : 1;
  });

  const [weekNo, setWeekNo] = useState(() => {
    const storedWeekNo = localStorage.getItem('weekNo');
    return storedWeekNo !== null ? parseInt(storedWeekNo) : 1;
  });

  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem('count');
    return storedCount !== null ? parseInt(storedCount) : 0;
  });

  const username = "Anbu";

  const numericEnter = parseInt(enter);
  const numericMed = parseInt(med);
  const numericFood = parseInt(food);
  const numericClothes = parseInt(clothes);
  const numericTrans = parseInt(trans);
  const numericEdu = parseInt(edu);
  const numericSave = parseInt(save);
  const numericHouse  = parseInt(house);

  useEffect(() => {
    localStorage.setItem('dayNo', dayNo);
    localStorage.setItem('weekNo', weekNo);
    localStorage.setItem('count', count);
  }, [dayNo, weekNo, count]);

  const send = () => {
    
    setRmCoins(prevRmCoins => prevRmCoins + 1);
    localStorage.setItem('coins', rmCoins+1);
    setCount(prev => prev+1);
    localStorage.setItem('count', count);
    // console.log(count);
    if (count >= 6) {
      setWeekNo(prevWeekNo => prevWeekNo+1);
      setDayNo(1);
      setCount(0);
      localStorage.setItem('count', count);
    } else{
      setDayNo(prevDayNo => prevDayNo + 1);
    }

    localStorage.setItem('dayNo', dayNo);
    localStorage.setItem('weekNo', weekNo);
    console.log(count, dayNo, weekNo);

    axios.post('http://localhost:4000/register', { numericEnter, numericMed, numericFood, numericClothes, numericTrans, numericEdu, numericSave, numericHouse, username, dayNo, weekNo })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error("Registration error:", error);
        });

        
    alert("Congratulations! You have earned a RM Coin");
};

  const coins = localStorage.getItem('coins');
  const day = `Day ${dayNo}`;
  const week = `Week ${weekNo}`;

  // localStorage.removeItem('coins');
  // localStorage.removeItem('dayNo');
  // localStorage.removeItem('weekNo');
  // localStorage.removeItem('count');

  const onB = () => {
    navigate("/budget");
  }

  const onS = () => {
    navigate("/spend");
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
            <a onClick={onS} className="nav-link" href="#"><b>Spending Analysis</b></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#"><b>Daily Tracker</b></a>
            </li>
            <li className="nav-item">
            <a onClick={onR} className="nav-link" href="#"><b>RM Bot</b></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#"><b>RM Coins:{coins}</b></a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="dtitle p-3" id="dspendings">
          <h1>
            <b>Daily Tracker</b>
            <br />
            <b>{week} {day}</b>
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
                <br />
               
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
                
                  <h5 id="food">Food expenses</h5>
                </label>
              </div>
              <input type="numeric" onChange={(e) => setFood(e.target.value)} id="food" className="form-control mb-3" />

              <div className="fade-in-once mb-3">
                <label> 
                <br />
             
                  <h5 id="clothing">Clothing</h5>
                </label>
              </div>
              <input type="numeric" onChange={(e) => setClothes(e.target.value)} id="clothing" className="form-control mb-3" />
            </form>
          </div>
        </div>

        

        {/* Third row */}
        <div className="row justify-content-center mt-2">
          <div className="col-lg-4 col-md-6">
            <form id="register" method="post" className="text-center">
              <div className="fade-in-once mb-3">
                <label>
                  <h5 id="transportation">Transportation Expenses</h5>
                </label>
              </div>
              <input type="numeric" onChange={(e) => setTrans(e.target.value)} id="transportation" className="form-control mb-3" />
            </form>
          </div>

          <div className="col-lg-4 col-md-6">
            <form id="register" method="post" className="text-center">
              <div className="fade-in-once mb-3">
                <label>
                  <h5 id="education">Education</h5>
                </label>
              </div>
              <input type="numeric" onChange={(e) => setEdu(e.target.value)} id="education" className="form-control mb-3" />
            </form>
          </div>
        </div>

        <div className="row justify-content-center mt-2">
          <div className="col-lg-4 col-md-6">
            <form id="register" method="post" className="text-center">
              <div className="fade-in-once mb-3">
                <label>
                  <h5 id="savings">Savings</h5>
                </label>
              </div>
              <input type="numeric" onChange={(e) => setSave(e.target.value)} id="savings" className="form-control mb-3" />
            </form>
          </div>

          <div className="col-lg-4 col-md-6">
            <form id="register" method="post" className="text-center">
              <div className="fade-in-once mb-3">
                <label>
                  <h5 id="household">Household</h5>
                </label>
              </div>
              <input type="numeric" onChange={(e) => setHouse(e.target.value)} id="household" className="form-control mb-3" />
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
      <br />
     <br />
                


       </div>
    );
}

export default DTracker;