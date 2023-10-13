import React from 'react';
import './styles/budgetting.css';
import logofff from './img/logofff2.jpg'
import enter from './img/enter.png'
import car from './img/car.png'
import education from './img/education.png'
import food from './img/food.png'
import house from './img/house.png'
import savings from './img/savings.png'
import medical from './img/medical2.png'
import clothes from './img/clothes.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


function Budget(){
    let navigate = useNavigate();

    const [earn, setEarn] = useState(0);

    const [mov, setMov] = useState(0);
    const [str, setStr] = useState(0);
    const [ot1, setOt1] = useState(0);

    const [rest, setRes] = useState(0);
    const [gro, setGro] = useState(0);
    const [ot2, setOt2] = useState(0);

    const [bill, setBill] = useState(0);
    const [ins, setIns] = useState(0);
    const [ot3, setOt3] = useState(0);

    const [cl, setCl] = useState(0);
    const [pcp, setPcp] = useState(0);
    const [ot4, setOt4] = useState(0);

    const [fue, setFue] = useState(0);
    const [veh, setVeh] = useState(0);
    const [ot5, setOt5] = useState(0);

    const [fee, setFee] = useState(0);
    const [book, setBook] = useState(0);
    const [ot6, setOt6] = useState(0);

    const [inv, setInv] = useState(0);
    const [ret, setRet] = useState(0);
    const [ot7, setOt7] = useState(0);

    const [egw, setEgw] = useState(0);
    const [rent, setMort] = useState(0);
    const [ot8, setOt8] = useState(0);

    const numericearn = parseInt(earn);
    const numericmov = parseInt(mov);
    const numericstr = parseInt(str);
    const numericot1  = parseInt(ot1);
    const numericrest = parseInt(rest);
    const numericgro = parseInt(gro);
    const numericot2 = parseInt(ot2);
    const numericbill = parseInt(bill);
    const numericins = parseInt(ins);
    const numericot3 = parseInt(ot3);
    const numericcl = parseInt(cl);
    const numericpcp = parseInt(pcp);
    const numericot4 = parseInt(ot4);
    const numericfue = parseInt(fue);
    const numericveh = parseInt(veh);
    const numericot5 = parseInt(ot5);
    const numericfee = parseInt(fee);
    const numericbook = parseInt(book);
    const numericot6 = parseInt(ot6);
    const numericinv = parseInt(inv);
    const numericret = parseInt(ret);
    const numericot7 = parseInt(ot7);
    const numericegw = parseInt(egw);
    const numericrent = parseInt(rent);
    const numericot8 = parseInt(ot8);

    const onH = () => {
      navigate("/");
      
    }

    const onD = () => {
      navigate("/dtracker");
    }

    const onR = () => {
      navigate("/bot");
    }

    const onS = () => {
      navigate("/spend");
    }

    const onRs = () => {
      navigate("/rmstore")
    }

    const coins = localStorage.getItem('coins');

    const weekNo = localStorage.getItem('weekNo') == null ? 1 : localStorage.getItem('weekNo');

    const week = `Week ${weekNo}`;

    const ok = () => {
      if(numericearn == numericot8+numericrent+numericegw+numericot7+numericret+numericinv+numericot6+numericbook+numericfee+numericot5+numericveh+numericfue+numericot4+numericpcp+numericcl+numericot3+numericins+numericbill+numericot2+numericgro+numericrest+numericot1+numericstr+numericmov){
    
        axios.post('http://localhost:4000/submit', { week, numericearn, numericmov, numericstr, numericot1, numericrest, numericgro, numericot2, numericbill, numericins, numericot3, numericcl, numericpcp, numericot4, numericfue, numericveh, numericot5, numericfee, numericbook, numericot6, numericinv, numericret, numericot7, numericegw, numericrent, numericot8 })
          .then(response => {
              console.log(response.data);
          })
          .catch(error => {
              console.error(error);
    });

        navigate("/dtracker");
      }else{
        alert("All your earnings should be budgeted");
      }
};


    return(

        <div className='budget'>
        <nav className="navbar navbar-expand-lg">
        <img className="logo" src={logofff} id="budglogo" />
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" onClick={onH} href="#"><b>Home</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><b>Budgeting</b></a>
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
            <a onClick={onRs} className="nav-link" href="#"><b>RM Store</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><b>RM Coins: {coins}</b></a>
            </li>
          </ul>
        </div>
      </nav>
      <br />

      <div className="budgettitle">
        <h2><b>Weekly Budgeting: Week {weekNo}</b></h2>
      </div>
      <br/>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12">
            <div className="card budget-card budget-card-center">
              <div className="card-body">
                <div className="fade-in-once">
                  <label><h2 id="yourearnings"><b>Your Earnings</b></h2></label>
                  <input onChange={(e) => setEarn(e.target.value)} type="numeric" id="earnings" />
                </div>
                <p className="card-text fade-in-once"><i>Save your one week budgeting plan here. Record your spendings in the daily tracker to earn 1RM coin per day and generate a weekly report after 7 successive days and if you save money at the end of the week then you will earn 5 RM coins.</i></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br/>

      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-4 entertainment">
          <div className="card budget-card budget-card-center entertainment">
            <div className="card-body">
              <div className="fade-in-once">
                <img src={enter} className="cardlogo" id="enter" title="rm coins" />
                <div className="entertainment">
                  <h2><b>Entertainment</b></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      

      <div className="col-lg-3 col-md-4 entertainment">
        <div className="card budget-card budget-card-center">
          <div className="card-body">
            <div className="fade-in-once">
              <div className="movies">
                <h5>Movies & Shows</h5>
                <input onChange={(e) => setMov(e.target.value)} type="numeric" id="movies" />

                <h5>Streaming Subscriptions</h5>
                <input onChange={(e) => setStr(e.target.value)} type="numeric" id="subs" />

                <h5>Others</h5>
                <input onChange={(e) => setOt1(e.target.value)} type="numeric" id="others1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-4 food">
        <div className="card budget-card budget-card-center">
          <div className="card-body">
            <div className="fade-in-once">
              <img src={food} className="cardlogo" id="food" title="rm coins" />
              <div className="food">
                <label><h2 id="yourearnings"><b>Food</b></h2></label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-4 food">
        <div className="card budget-card budget-card-center">
          <div className="card-body">
            <div className="fade-in-once">
              <div className="food categories">
                <h5>Restaurants</h5>
                <input onChange={(e) => setRes(e.target.value)} type="numeric" id="restaurants" />

                <h5>Groceries</h5>
                <input onChange={(e) => setGro(e.target.value)} type="numeric" id="groceries" />

                <h5>Others</h5>
                <input onChange={(e) => setOt2(e.target.value)} type="numeric" id="others2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="row justify-content-center medical">
        <div className="col-lg-3 col-md-4">
          <div className="card budget-card budget-card-center">
            <div className="card-body">
              <div className="fade-in-once">
                <img src={medical} className="cardlogo" id="enter" title="rm coins" />
                <div className="Medical">
                  <h2><b>Medical</b></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      

      <div className="col-lg-3 col-md-4 medical">
        <div className="card budget-card budget-card-center">
          <div className="card-body">
            <div className="fade-in-once">
              <div className="medical">
                <h5>Hospital Bills</h5>
                <input onChange={(e) => setBill(e.target.value)} type="numeric" id="bills" />

                <h5>Insurance</h5>
                <input onChange={(e) => setIns(e.target.value)} type="numeric" id="insurance" />

                <h5>Others</h5>
                <input onChange={(e) => setOt3(e.target.value)} type="numeric" id="others3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-4 clothing">
        <div className="card budget-card budget-card-center">
          <div className="card-body">
            <div className="fade-in-once">
              <img src={clothes} className="cardlogo" id="enter" title="rm coins" />
              <div className="clothes">
                <label><h2 id="yourearnings"><b>Clothing</b></h2></label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-4 clothing">
        <div className="card budget-card budget-card-center">
          <div className="card-body">
            <div className="fade-in-once">
              <div className="clothes">
                <h5>Clothing purchases</h5>
                <input onChange={(e) => setCl(e.target.value)} type="numeric" id="restaurants" />

                <h5>Personal Care products</h5>
                <input onChange={(e) => setPcp(e.target.value)} type="numeric" id="coffee" />

                <h5>Others</h5>
                <input onChange={(e) => setOt4(e.target.value)} type="numeric" id="others4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-4 travel">
          <div className="card budget-card budget-card-center">
            <div className="card-body">
              <div className="fade-in-once">
                <img src={car} className="cardlogo" id="enter" title="rm coins" />
                <div className="Transportation">
                  <h2><b>Travelling</b></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      

      <div className="col-lg-3 col-md-4 travel">
        <div className="card budget-card budget-card-center">
          <div className="card-body">
            <div className="fade-in-once">
              <div className="travel">
                <h5>Fuel & Bookings</h5>
                <input onChange={(e) => setFue(e.target.value)} type="numeric" id="fuel" />

                <h5>Vehicle maintenance</h5>
                <input onChange={(e) => setVeh(e.target.value)} type="numeric" id="maintenance" />

                <h5>Others</h5>
                <input onChange={(e) => setOt5(e.target.value)} type="numeric" id="others5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-4 education">
        <div className="card budget-card budget-card-center">
          <div className="card-body">
            <div className="fade-in-once">
              <img src={education} className="cardlogo" id="enter" title="rm coins" />
              <div className="education">
                <label><h2 id="yourearnings"><b>Education</b></h2></label>
              </div>
            </div>
          </div>
        </div>
      </div>
                        
      <div className="col-lg-3 col-md-4 education">
        <div className="card budget-card budget-card-center">
          <div className="card-body">
            <div className="fade-in-once">
              <div className="education">
                <h5>Tuition fee</h5>
                <input onChange={(e) => setFee(e.target.value)} type="numeric" id="fees" />

                <h5>Books & Supplies</h5>
                <input onChange={(e) => setBook(e.target.value)} type="numeric" id="books" />

                <h5>Others</h5>
                <input onChange={(e) => setOt6(e.target.value)} type="numeric" id="others6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="row justify-content-center savings">
        <div className="col-lg-3 col-md-4">
          <div className="card budget-card budget-card-center">
            <div className="card-body">
              <div className="fade-in-once">
                <img src={savings} className="cardlogo" id="enter" title="rm coins"/>
                <div className="Savings">
                  <h2><b>Savings</b></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      

      <div className="col-lg-3 col-md-4 savings">
        <div className="card budget-card budget-card-center">
          <div className="card-body">
            <div className="fade-in-once">
              <div className="savings">
                <h5>Investments</h5>
                <input onChange={(e) => setInv(e.target.value)} type="numeric" id="investments" />

                <h5>Retirement Savings</h5>
                <input onChange={(e) => setRet(e.target.value)} type="numeric" id="retirement savings" />

                <h5>Others</h5>
                <input onChange={(e) => setOt7(e.target.value)} type="numeric" id="others7" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-4 house">
        <div className="card budget-card budget-card-center">
          <div className="card-body">
            <div className="fade-in-once">
              <img src={house} className="cardlogo" id="enter" title="rm coins"/>
              <div className="household">
                <label><h2 id="yourearnings"><b>Household</b></h2></label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-4 house">
        <div className="card budget-card budget-card-center">
          <div className="card-body">
            <div className="fade-in-once">
              <div className="household">
                <h5>Electricity,Gas,Water Bills</h5>
                <input onChange={(e) => setEgw(e.target.value)} type="numeric" id="bills2" />

                <h5>Rent or Mortgage</h5>
                <input onChange={(e) => setMort(e.target.value)} type="numeric" id="rent" />

                <h5>Others</h5>
                <input onChange={(e) => setOt8(e.target.value)} type="numeric" id="others8" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      
        <br />
        <button onClick={ok} className="budgetbutton shadowed-border">
          <h5>Submit</h5>
        </button>

        <br/>
        <br/>

        </div>
    );
  
}

export default Budget;




        

