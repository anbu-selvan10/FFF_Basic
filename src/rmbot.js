import React from 'react';
import './styles/rmbot.css';
import botlogo from './img/logofff2.jpg';
import text from './img/message.png';
import Rmbot from './img/fffrmbot.png';

function RMBot(){

    return(
      <div className='rmbot2'>
        <nav className="botnavbar botnavbar-expand-lg">
        <img className="logo" src={botlogo} id="imgcoins" />
        <div className="collapse botnavbar-collapse justify-content-end" id="botnavbarNav">
          <ul className="botnavbar-nav ml-auto">
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
            <div className="bot-card bot-card bot-card-center">
              <div className="card-body">
               <img src={Rmbot} id="rmbot2"/>
               <br/>
                <div className="bottitle">
                  <label><h2 id="yourearnings"><b>Your Queries</b></h2></label>
                  </div>
                  <br/>
               
                  <input type="text" id="chatbox" placeholder="Ask your queries"/>

                
                  <button className="botbutton shadowed-border">
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

export default RMBot;