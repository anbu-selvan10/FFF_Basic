import React from 'react'; // Make sure to import React if not already done
import './styles/homefff.css';
import logo from './img/logofff2.jpg'
import budget from './img/moneyfff.png'
import rmbot from './img/fffrmbot.png'
import spend from './img/spend.png'
import coins from './img/rm coins.png'
import insta from './img/insta4.png'


function App() {
    

    return(
        <>
        
            <div className="blue animated-bg">
                <section>
                    <div className="container">
                        <nav className="navbar navbar-expand-lg">
                            <img className="logo" id="ffflogo" src={logo} alt="Logo" />
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><b>ABOUT US</b></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><b>FAQ</b></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><b>CONTACT US</b></a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </section>

                <div className="title p-4">
                    <h1 style={{fontFamily:'Arial,sans-serif',fontWeight:'bold'}}>FFF</h1>
                    <h5 className="fade-in-once" style={{fontFamily:'sans-serif',fontWeight:'bold'}}>Full-Fledged Financial Assistant</h5>
                    <div className="container">
                        <button className="button shadowed-border">
                            <h5>Get Started</h5>
                        </button>
                    </div>
                </div>
            </div>

            <div className="white float-bg">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="slide-in-text">
                                <h1 className="features" style={{fontFamily:'sans-serif',fontWeight:'bold'}}>FEATURES</h1>
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-4">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <img className="logo" src={budget} id="logo-1" title="budgetting" alt="Budgetting" />
                                            <div className="budgetting">
                                                <h2 className="card-title fade-in-once">Budgetting</h2>
                                                <p className="card-text">Give your source of income and get your weekly/monthly expense report. You can categorize your expenses and plan accordingly for your future!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-4">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <img className="logo" src={rmbot} id="logo-2" title="rmbot" alt="RM Bot" />
                                            <div className="rmbot">
                                                <h2 className="card-title fade-in-once" title="rmbot"><b>RM Bot</b></h2>
                                                <p className="card-text">Get personalized recommendations from our RM Bot! Start your journey with our Financial Assistant.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-4">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <img src={coins} className="logo" id="logo-3" title="rm coins" alt="Earn RM Points" />
                                            <div className="rmcoins">
                                                <h2 className="card-title fade-in-once" title="earn">Earn RM Coins</h2>
                                                <p className="card-text">Submit your daily spendings and generate more weekly reports to earn RM Coins! Use RM Coins to buy from our store.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-10 col-lg-4 offset-lg-4">
                                    <div className="card custom-card" id="card4">
                                        <div className="card-body">
                                            <img src={spend} className="logo" id="logo-3" title="rm coins" alt="Spending Analysis" />
                                            <div className="rmcoins" id="card4">
                                                <h2 className="card-title fade-in-once" title="earn">Spending Analysis</h2>
                                                <p className="card-text">Get your spending analysis report visually. Check out where and when you have missed!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <p className="footertext" id="ftr"><i>&copy; 2023 FFF. Yet to be certified.</i></p>
                <a href="https://www.instagram.com/_.v1vekanand._/" id="insta-link">
                    <img src={insta} className="logo" id="insta" alt="Instagram" />
                </a>
            </footer>
        </>
    );
}

export default App;
