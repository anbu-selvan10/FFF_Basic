import React from 'react';
import './styles/rmbot.css';
import botlogofff from './img/logofff2.jpg';

import RmBot from './img/fffrmbot.png';

function RMBot(){

    return(
      <div className='rmbot2'>
      
      <nav className="navbar navbar-expand-lg" id="botnav">
        <img className="botlogo" src={botlogofff} id="fffbotnav" />
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
              <a className="nav-link" href="#"><b>RM Bot</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><b>RM COINS:</b></a>
            </li>
          </ul>
        </div>
      </nav>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      
      <div className="botcontainer-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12">
            <div className="botcard budget-card budget-card-center">
              <div className="card-body">
                <div className="fade-in-once">
                <img className="botimage" src={RmBot} id="rmbot2"/>
                
                <br/>
                <br/>
                <div className="botcardtext">
                  <h3><b>Your Queries</b></h3>
                </div>
                <br/>
                  <input type="text" id="chatbot" placeholder='Ask your queries'/>
                </div>
                <br/>

               
                  <button className="botbutton">
                    Ask
                  </button>
               
              
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
     
         
       



      </div>

    );
}

export default RMBot;