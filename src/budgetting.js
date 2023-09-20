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


function Budget(){
    let navigate = useNavigate();

    const onH = () => {
      navigate("/");
      
    }

    const onD = () => {
      navigate("/dtracker");
    }

    const onR = () => {
      navigate("/bot");
    }
    return(

    
        <div className='budget'>
        <nav className="navbar navbar-expand-lg">
        <img className="logo" src={logofff} id="imgcoins" />
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" onClick={onH} href="#"><b>Home</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><b>Budgeting</b></a>
            </li>
            <li className="nav-item">
              <a onClick={onD} className="nav-link" href="#"><b>Daily Tracker</b></a>
            </li>
            <li className="nav-item">
              <a onClick={onR} className="nav-link" href="#"><b>RM Bot</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><b>RM Coins:</b></a>
            </li>
          </ul>
        </div>
      </nav>
      <br />

      <div className="budgettitle">
        <h2><b>Weekly Budgeting</b></h2>
      </div>
      <br/>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12">
            <div className="card budget-card budget-card-center">
              <div className="card-body">
                <div className="fade-in-once">
                  <label><h2 id="yourearnings"><b>Your Earnings</b></h2></label>
                  <input type="text" id="earnings" />
                </div>
                <p className="card-text fade-in-once"><i>Save your one week budgeting plan here and earn 5 RM coins for successfully saving the plan. Record your spendings in the daily tracker to earn 1RM coin per day and generate a weekly report after 7 successive days.</i></p>
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
                <h5>Movies,Shows & Events</h5>
                <input type="text" id="movies" />

                <h5>Mobile Recharge</h5>
                <input type="text" id="recharge" />

                <h5>Streaming Subscriptions</h5>
                <input type="text" id="subs" />

                <h5>Others</h5>
                <input type="text" id="others1" />
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
                <input type="text" id="restaurants" />

                <h5>Groceries</h5>
                <input type="text" id="groceries" />

                <h5>Snacks & Coffee</h5>
                <input type="text" id="coffee" />

                <h5>Others</h5>
                <input type="text" id="others2" />
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
                <input type="text" id="bills" />

                <h5>Insurance</h5>
                <input type="text" id="insurance" />

                <h5>Gym & Fitness</h5>
                <input type="text" id="gym" />

                <h5>Others</h5>
                <input type="text" id="others3" />
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
                <input type="text" id="restaurants" />

                <h5>Beauty Products</h5>
                <input type="text" id="groceries" />

                <h5>Personal Care products</h5>
                <input type="text" id="coffee" />

                <h5>Others</h5>
                <input type="text" id="others4" />
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
                <input type="text" id="fuel" />

                <h5>Vehicle maintenance</h5>
                <input type="text" id="maintenance" />

                <h5>Parking & Tolls</h5>
                <input type="text" id="parking" />

                <h5>Others</h5>
                <input type="text" id="others5" />
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
                <input type="text" id="fees" />

                <h5>Books & Supplies</h5>
                <input type="text" id="books" />

                <h5>Educational Loan</h5>
                <input type="text" id="loan" />

                <h5>Others</h5>
                <input type="text" id="others6" />
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
                <input type="text" id="investments" />

                <h5>Retirement Savings</h5>
                <input type="text" id="retirement savings" />

                <h5>Emergency Fund</h5>
                <input type="text" id="emergencyfund" />

                <h5>Others</h5>
                <input type="text" id="others7" />
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
                <input type="text" id="bills2" />

                <h5>Rent or Mortgage</h5>
                <input type="text" id="rent" />

                <h5>Internet & Cable</h5>
                <input type="text" id="cable" />

                <h5>Others</h5>
                <input type="text" id="others8" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      
        <br />
        <button className="budgetbutton shadowed-border">
          <h5>Submit</h5>
        </button>
        <br />
     
        </div>
    );
  
}

export default Budget;




        

