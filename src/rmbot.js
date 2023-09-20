import React from 'react';
import './styles/rmbot.css';
import logo from './img/logofff2.jpg';
import text from './img/message.png';
import rmbot from './img/fffrmbot.png';

function App(){

    return(
      <div>
        <nav className="navbar navbar-expand-lg">
        <img className="logo" src={logo} id="imgcoins" />
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#"><b>Home</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><b>Budgeting</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><b>Daily Tracker</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><b>RM Coins:</b></a>
            </li>
          </ul>
        </div>
      </nav>

      
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12">
            <div className="card custom-card custom-card-center">
              <div className="card-body">
               <img src={rmbot} id="rmbot"/>
               <br/>
                <div className="title">
                  <label><h2 id="yourearnings"><b>Your Queries</b></h2></label>
                  </div>
                  <br/>
               
                  <input type="text" id="chatbox" placeholder="Ask your queries"/>

                
                  <button className="button shadowed-border">
                      <img src={text} className="logo" id="logo"/>
                  </button>
               
                
                   
              </div>
            </div>
          </div>
        </div>
      </div>

     
         
       




      </div>

    );
}

export default App;