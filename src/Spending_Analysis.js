import React, { useState } from 'react';
import './styles/spendinganal.css';
import axios from 'axios';
import { useEffect } from 'react';
import logospend from './img/logofff2.jpg'




const GraphComponent = () => {
  const [val, setVal] = useState({});
  const [dataFetched, setDataFetched] = useState(false);
  const [val1, setVal1] = useState({});
  const [dataFetched1, setDataFetched1] = useState(false);

  const [dnum1, setdNum1] = useState(0);
  const [dnum2, setdNum2] = useState(0);
  const [dnum3, setdNum3] = useState(0);
  const [dnum4, setdNum4] = useState(0);
  const [dnum5, setdNum5] = useState(0);
  const [dnum6, setdNum6] = useState(0);


  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [num4, setNum4] = useState(0);
  const [num5, setNum5] = useState(0);
  const [num6, setNum6] = useState(0);
  const [num7, setNum7] = useState(0);
  const [num8, setNum8] = useState(0);
  const [num9, setNum9] = useState(0);
  const [num10, setNum10] = useState(0);
  const [num11, setNum11] = useState(0);
  const [num12, setNum12] = useState(0);
  const [num13, setNum13] = useState(0);
  const [num14, setNum14] = useState(0);
  const [num15, setNum15] = useState(0);
  const [num16, setNum16] = useState(0);
  const [num17, setNum17] = useState(0);
  const [num18, setNum18] = useState(0);
  const [num19, setNum19] = useState(0);
  const [num20, setNum20] = useState(0);
  const [num21, setNum21] = useState(0);
  const [num22, setNum22] = useState(0);
  const [num23, setNum23] = useState(0);
  const [num24, setNum24] = useState(0);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/get-values');
        setVal(response.data.values);
        setDataFetched(true);
      } catch (error) {
        console.error(error);
      }
    };

    const waitData = async () => {
      try {
        if (dataFetched) {
          const num1 = await val[0].numericmov;
          const num2 = await val[0].numericstr;
          const num3 = await val[0].numericot1;
          const num4 = await val[0].numericrest;
          const num5 = await val[0].numericgro;
          const num6 = await val[0].numericot2;
          const num7 = await val[0].numericbill;
          const num8 = await val[0].numericins;
          const num9 = await val[0].numericot3;
          const num10 = await val[0].numericcl;
          const num11 = await val[0].numericpcp;
          const num12 = await val[0].numericot4;
          const num13 = await val[0].numericfue;
          const num14 = await val[0].numericveh;
          const num15 = await val[0].numericot5;
          const num16 = await val[0].numericfee;
          const num17 = await val[0].numericbook;
          const num18 = await val[0].numericot6;
          const num19 = await val[0].numericinv;
          const num20 = await val[0].numericret;
          const num21 = await val[0].numericot7;
          const num22 = await val[0].numericegw;
          const num23 = await val[0].numericrent;
          const num24 = await val[0].numericot8;

          setNum1(num1);
          setNum2(num2);
          setNum3(num3);
          setNum4(num4);
          setNum5(num5);
          setNum6(num6);
          setNum7(num7);
          setNum8(num8);
          setNum9(num9);
          setNum10(num10);
          setNum11(num11);
          setNum12(num12);
          setNum13(num13);
          setNum14(num14);
          setNum15(num15);
          setNum16(num16);
          setNum17(num17);
          setNum18(num18);
          setNum19(num19);
          setNum20(num20);
          setNum21(num21);
          setNum22(num22);
          setNum23(num23);
          setNum24(num24);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (!dataFetched) {
      fetchData(); 
    }
  
    waitData();
  }, [val, dataFetched]); 

  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const response = await axios.get('http://localhost:4000/get-daily');
        setVal1(response.data.values);
        setDataFetched1(true);
      } catch (error) {
        console.error(error);
      }
    };

    const waitData1 = async () => {
      try {
        if (dataFetched1) {
          const dnum1 = await val1[0].numericEnter;
          const dnum2 = await val1[0].numericMed;
          const dnum3 = await val1[0].numericGroc;
          const dnum4 = await val1[0].numericTrans;
          const dnum5 = await val1[0].numericLo;
          const dnum6 = await val1[0].numericOth;
          
          setdNum1(dnum1);
          setdNum2(dnum2);
          setdNum3(dnum3);
          setdNum4(dnum4);
          setdNum5(dnum5);
          setdNum6(dnum6);
          
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (!dataFetched1) {
      fetchData1(); 
    }
  
    waitData1();
  }, [val1, dataFetched1]); 
  
  const maxHeight2= 100;

  const numArray2 = [];

  for(let i=1;i<=6;i++){
    numArray2.push(eval(`dnum${i}`));
  }

  let highestValue2=numArray2[0];

  for (let i = 1; i < numArray2.length; i++) {
    if (numArray2[i] > highestValue2) {
      highestValue2 = numArray2[i];
    }
  }
  const scalingFactor2 = maxHeight2 / highestValue2;

  const adjustedheight1 = dnum1 * scalingFactor2;
  const adjustedheight2 = dnum2 * scalingFactor2;
  const adjustedheight3 = dnum3 * scalingFactor2;
  const adjustedheight4 = dnum4 * scalingFactor2;
  const adjustedheight5 = dnum5 * scalingFactor2;
  const adjustedheight6 = dnum6 * scalingFactor2;


  const enter = num1+num2+num3;
  const food = num4+num5+num6;
  const med = num7+num8+num9;
  const clothes = num10+num11+num12;
  const trans = num13+num14+num15;
  const edu = num16+ num17+num18;
  const save = num19 + num20 + num21;
  const house = num22+ num23 +num24;
  

  const d = dnum5+dnum6;
  const v = clothes+edu+save+house;

  const maxHeight = 100;

  const numArray = [];

  for (let i = 1; i <= 24; i++) {
  numArray.push(eval(`num${i}`));
  }

  // Initialize highestValue with the first element
  let highestValue = numArray[0];

  // Loop through the array to find the highest value
  for (let i = 1; i < numArray.length; i++) {
      if (numArray[i] > highestValue) {
        highestValue = numArray[i];
      }
  }


  const scalingFactor = maxHeight / highestValue;

  const adjustedHeight1 = num1 * scalingFactor;
  const adjustedHeight2 = num2 * scalingFactor;
  const adjustedHeight3 = num3 * scalingFactor;
  const adjustedHeight4 = num4 * scalingFactor;
  const adjustedHeight5 = num5 * scalingFactor;
  const adjustedHeight6 = num6 * scalingFactor;
  const adjustedHeight7 = num7 * scalingFactor;
  const adjustedHeight8 = num8 * scalingFactor;
  const adjustedHeight9 = num9 * scalingFactor;
  const adjustedHeight10 = num10 * scalingFactor;
  const adjustedHeight11 = num11 * scalingFactor;
  const adjustedHeight12 = num12 * scalingFactor;
  const adjustedHeight13 = num13 * scalingFactor;
  const adjustedHeight14 = num14 * scalingFactor;
  const adjustedHeight15 = num15 * scalingFactor;
  const adjustedHeight16 = num16 * scalingFactor;
  const adjustedHeight17 = num17 * scalingFactor;
  const adjustedHeight18 = num18 * scalingFactor;
  const adjustedHeight19 = num19 * scalingFactor;
  const adjustedHeight20 = num20 * scalingFactor;
  const adjustedHeight21 = num21* scalingFactor;
  const adjustedHeight22 = num22 * scalingFactor;
  const adjustedHeight23 = num23 * scalingFactor;
  const adjustedHeight24 = num24 * scalingFactor;
  
  return (
    
    <div className="bgspend">
    

    <div className="spendcontainer">
     <nav class="navbar navbar-expand-lg">
        <img class="logospend" src={logospend} id="imgcoins2"/>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav ml-auto">

            
                

                
            </ul>
        </div>
    </nav>
    <br/>
    <br/>
    <h1><b>BUDGET REPORT</b></h1>

     

      
      <div className="chart-container">
       
        <div className="row justify-content-center">
        <h2 className="subtitle"><i>Entertainment</i></h2>
        <div className="col-lg-12 col-md-14">
          <div className="card spend-card spend-card-center">
            <div className="card-body">
              <div className="bars-container">

              <div className="bar-column">
                <span>Movies:</span>
                
                  {adjustedHeight1 > 0 && (
                    <div className="bar" style={{ height: `${adjustedHeight1}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                      <h4>₹{num1}</h4>
                    </div>
                  )}
                </div>

                <div className="bar-column">
                <span>Subscriptions:</span>
                  {adjustedHeight2 > 0 && (
                    <div className="bar" style={{ height: `${adjustedHeight2}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{num2}</h4>
                    </div>
                  )}
                </div>
                
                <div className="bar-column">
                <span>Others1:</span>
                  {adjustedHeight3 > 0 && (
                    <div className="bar" style={{ height: `${adjustedHeight3}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{num3}</h4>
                    </div>
                  )}
                </div>
                
              </div>
            </div>
          </div>
        </div>

     
       
       <h2 className="subtitle"><i>Food & Groceries</i></h2>
        <div className="col-lg-12 col-md-14">
          <div className="card spend-card spend-card-center">
            <div className="card-body">
              <div className="bars-container">
              <div className="bar-column">
                <span>Restaurants:</span>
                  {adjustedHeight4 > 0 && (
                    <div className="bar" style={{ height: `${adjustedHeight4}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{num4}</h4>
                    </div>
                  )}
                </div>

                <div className="bar-column">
                <span>Groceries:</span>
                  {adjustedHeight5 > 0 && (
                    <div className="bar" style={{ height: `${adjustedHeight5}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{num5}</h4>
                    </div>
                  )}
                </div>
                
                <div className="bar-column">
                <span>Others2:</span>
                  {adjustedHeight6 > 0 && (
                    <div className="bar" style={{ height: `${adjustedHeight6}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{num6}</h4>
                    </div>
                  )}
                </div>
            </div>
          </div>
          
        </div>
        </div>
        
       


      <div className="row justify-content-center">
      <h2 className="subtitle"><i>Medical Expenses</i></h2>
      <div className="col-lg-12 col-md-14">
          <div className="card spend-card spend-card-center">
            <div className="card-body">
              <div className="bars-container">
              <div className="bar-column">
                <span>Hospital Bills:</span>
                  {adjustedHeight7 > 0 && (
                    <div className="bar" style={{ height: `${adjustedHeight7}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{num7}</h4>
                    </div>
                  )}
                </div>
                <div className="bar-column">
                <span>Insurance:</span>
                  {adjustedHeight8 > 0 && (
                    <div className="bar" style={{ height: `${adjustedHeight8}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{num8}</h4>
                    </div>
                  )}
                </div>
                <div className="bar-column">
                <span>Others3:</span>
                  {adjustedHeight9 > 0 && (
                    <div className="bar" style={{ height: `${adjustedHeight9}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{num9}</h4>
                    </div>
                  )}
                </div>

                </div>
            
          
        </div>
        </div>
        </div>

        <div className="col-lg-12 col-md-14">
         <h2 className="subtitle"><i>Clothes & Beauty</i></h2>
          <div className="card spend-card spend-card-center">
            <div className="card-body">
              <div className="bars-container">
              <div className="bar-column">
                <span>Clothes:</span>
                  {adjustedHeight10 > 0 && (
                    <div className="bar" style={{ height: `${adjustedHeight10}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{num10}</h4>
                    </div>
                  )}
                </div>
                <div className="bar-column">
                <span>Beauty:</span>
                  {adjustedHeight11 > 0 && (
                    <div className="bar" style={{ height: `${adjustedHeight11}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{num11}</h4>
                    </div>
                  )}
                </div>
                <div className="bar-column">
                <span>Others4:</span>
                  {adjustedHeight12 > 0 && (
                    <div className="bar" style={{ height: `${adjustedHeight12}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{num12}</h4>
                    </div>
                  )}
                </div>                  
            </div>
           </div>
           </div>
        </div>
        </div>
        </div>
        

       <div className="row justify-content-center">
        <h2 className="subtitle"><i>Transportation</i></h2>
       <div className="col-lg-12 col-md-14">
          <div className="card spend-card spend-card-center">
            <div className="card-body">
              <div className="bars-container">
              <div className="bar-column">
                <span>Fuel:</span>
                  {adjustedHeight13 > 0 && (
                    <div className="bar" style={{ height: `${adjustedHeight13}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{num13}</h4>
                    </div>
                  )}
                </div> 
                <div className="bar-column">
                <span>Maintenance:</span>
                  {adjustedHeight14 > 0 && (
                    <div className="bar" style={{ height: `${adjustedHeight14}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{num14}</h4>
                    </div>
                  )}
                </div> 
                <div className="bar-column">
                <span>Others5:</span>
                  {adjustedHeight15 > 0 && (
                    <div className="bar" style={{ height: `${adjustedHeight15}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{num15}</h4>
                    </div>
                  )}
                </div> 
                
                </div>
              </div>
              </div>
              </div>

        <div className="col-lg-12 col-md-14">
        <h2 className="subtitle"><i>Education</i></h2>
          <div className="card spend-card spend-card-center">
            <div className="card-body">
              <div className="bars-container">
              <div className="bar-column">
                <span>Fee:</span>
                  {adjustedHeight16 > 0 && (
                    <div className="bar" style={{ height: `${adjustedHeight16}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{num16}</h4>
                    </div>
                  )}
                </div> 
                <div className="bar-column">
                <span>Books:</span>
                  {adjustedHeight17 > 0 && (
                    <div className="bar" style={{ height: `${adjustedHeight17}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{num17}</h4>
                    </div>
                  )}
                </div> 
                <div className="bar-column">
                <span>Others6:</span>
                  {adjustedHeight18 > 0 && (
                    <div className="bar" style={{ height: `${adjustedHeight18}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{num18}</h4>
                    </div>
                  )}
                </div> 

                
              </div>
              </div>
            </div>
            </div>
            
          </div>

            

      <div className="row justify-content-center">
      <h2 className="subtitle"><i>Savings</i></h2>

      <div className="col-lg-12 col-md-14">
          <div className="card spend-card spend-card-center">
            <div className="card-body">
              <div className="bars-container">
              <div className="bar-column">
                <span>Investments:</span>
                  {adjustedHeight19 > 0 && (
                    <div className="bar" style={{ height: `${adjustedHeight19}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{num19}</h4>
                    </div>
                  )}
                </div> 
                <div className="bar-column">
                <span>Retirement:</span>
                  {adjustedHeight20 > 0 && (
                    <div className="bar" style={{ height: `${adjustedHeight20}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{num20}</h4>
                    </div>
                  )}
                </div> 
                <div className="bar-column">
                <span>Others7:</span>
                  {adjustedHeight21 > 0 && (
                    <div className="bar" style={{ height: `${adjustedHeight21}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{num21}</h4>
                    </div>
                  )}
                </div> 

              </div>
              </div>
              </div>
              </div>
        <div className="col-lg-12 col-md-14">
        <h2 className="subtitle"><i>Household</i></h2>

          <div className="card spend-card spend-card-center">
            <div className="card-body">
              <div className="bars-container">
              <div className="bar-column">
                <span>Gas,water:</span>
                  {adjustedHeight22 > 0 && (
                    <div className="bar" style={{ height: `${adjustedHeight22}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{num22}</h4>
                    </div>
                  )}
                </div> 
                <div className="bar-column">
                <span>Rent:</span>
                  {adjustedHeight23 > 0 && (
                    <div className="bar" style={{ height: `${adjustedHeight23}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{num23}</h4>
                    </div>
                  )}
                </div> 
                <div className="bar-column">
                <span>Others8:</span>
                  {adjustedHeight24 > 0 && (
                    <div className="bar" style={{ height: `${adjustedHeight24}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{num24}</h4>
                    </div>
                  )}
                </div> 

                </div>

              </div>
              </div>
              </div>


              <br/>
              <br/>

              
              
              


      </div>
      
    </div>
    <h1 className="dtrackreport"><b>DAILY TRACKER REPORT</b></h1>
    <div className="row justify-content-center">
      <div className="col-lg-16 col-md-20">
      <div className="card dtrack-card dtrack-card-center">
            <div className="card-body">
              <div className="bars-container">

              <div className="bar-column">
              <span>Entertainment: </span>
                  {adjustedheight1 > 0 && (
                    <div className="bar" style={{ height: `${adjustedheight1}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{dnum1}</h4>
                    </div>
                  )}
                </div> 

                <div className="bar-column">
                <span>Medical:</span>
                  {adjustedheight2 > 0 && (
                    <div className="bar" style={{ height: `${adjustedheight2}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{dnum2}</h4>
                    </div>
                  )}
                </div> 

                <div className="bar-column">
                <span>Groceries:</span>
                  {adjustedheight3 > 0 && (
                    <div className="bar" style={{ height: `${adjustedheight3}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{dnum3}</h4>
                    </div>
                  )}
                </div> 

                <div className="bar-column">
                <span>Loan:</span>
                  {adjustedheight4 > 0 && (
                    <div className="bar" style={{ height: `${adjustedheight4}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{dnum4}</h4>
                    </div>
                  )}
                </div> 

                <div className="bar-column">
                <span>Transportation:</span>
                  {adjustedheight5 > 0 && (
                    <div className="bar" style={{ height: `${adjustedheight5}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{dnum5}</h4>
                    </div>
                  )}
                </div> 

                <div className="bar-column">
                <span>Others:</span>
                  {adjustedheight6 > 0 && (
                    <div className="bar" style={{ height: `${adjustedheight6}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
                      
                     
                      <h4>₹{dnum6}</h4>
                    </div>
                  )}
                </div> 

                </div>
             
                </div>

         
              </div>

            <div>
              {dnum1 > enter && <p> <b>Entertainment : </b>You have spent {dnum1-enter} more than you have budgeted</p>}
              {dnum1 <= enter && <p><b>Entertainment : </b>You have spent {enter-dnum1} less than the budget amount! Well done</p>}
              {dnum2 > med && <p><b>Medical: </b> You have spent {dnum2-food} more than you have budgeted</p>}
              {dnum2 <= med && <p><b>Medical : </b>You have spent {food-dnum1} less than the budget amount! Well done</p>}
              {dnum3 > food && <p><b>Food : </b> You have spent {dnum3-med} more than you have budgeted</p>}
              {dnum3 <= food && <p><b>Food:</b> You have spent {med-dnum3} less than the budget amount! Well done</p>}
              {dnum4 > trans && <p><b>Transportation: </b> You have spent {dnum4-trans} more than you have budgeted</p>}
              {dnum4 <= trans && <p><b>Transportation:</b> You have spent {trans-dnum4} less than the budget amount! Well done</p>}
              {d > v && <p><b>Others: </b> You have spent {d-v }more than you have budgeted</p>}
              {d <= v && <p><b>Others:</b> You have spent {v-d} less than the budget amount! Well done</p>}


             
            </div>
              
                   


     </div>
    </div>
    </div>
    </div>

    


  
  );
};

export default GraphComponent;
