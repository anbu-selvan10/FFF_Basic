import React from 'react'
import './styles/login.css'
import logo from './img/logofff2.jpg'
const SignUp = () => {
  return (
    <div class="animated-bg">
      <div class="container d-flex justify-content-center align-items-center vh-100">
        <div class="card custom-card">
          <div class="card-body">
            <img src={logo} id="logo" alt="Logo" />
            <div class="register">
              <div class="fade-in-once">
                <h1 class="signin">Sign In</h1>
              </div>
              <form id="register" method="post">
                <div class="slide-in-text">
                  <label>
                    <h5 id="email">Email ID</h5>
                  </label>
                  <input type="text" id="name" placeholder="@gmail.com" />

                  <label>
                    <h5 id="password">Password</h5>
                  </label>
                  <input type="password" id="lastname" placeholder="Your Password:" />
                </div>

                <div class="buttons">
                  <button class="button shadowed-border">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SignUp;
