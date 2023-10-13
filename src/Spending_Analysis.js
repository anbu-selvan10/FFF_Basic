import React, { useState } from 'react';
import './styles/spendinganal.css';
import axios from 'axios';
import PieChart from './Piechart';
import Linechart from './Linechart';
import PairBarChart from './Bar';
import { useNavigate } from 'react-router-dom';
import PairedBarGraph from './Barchart';
import logofff from './img/logofff2.jpg'

const GraphComponent = () => {
  let navigate = useNavigate();
  const week = "Week 1";
  
  const [numericmov, setNumericMov] = useState(0);
  const [numericstr, setNumericStr] = useState(0);
  const [numericot1, setNumericOt1] = useState(0);
  const [numericrest, setNumericRest] = useState(0);
  const [numericgro, setNumericGro] = useState(0);
  const [numericot2, setNumericOt2] = useState(0);
  const [numericbill, setNumericBill] = useState(0);
  const [numericins, setNumericIns] = useState(0);
  const [numericot3, setNumericOt3] = useState(0);
  const [numericcl, setNumericCl] = useState(0);
  const [numericpcp, setNumericPcp] = useState(0);
  const [numericot4, setNumericOt4] = useState(0);
  const [numericfue, setNumericFue] = useState(0);
  const [numericveh, setNumericVeh] = useState(0);
  const [numericot5, setNumericOt5] = useState(0);
  const [numericfee, setNumericFee] = useState(0);
  const [numericbook, setNumericBook] = useState(0);
  const [numericot6, setNumericOt6] = useState(0);
  const [numericinv, setNumericInv] = useState(0);
  const [numericret, setNumericRet] = useState(0);
  const [numericot7, setNumericOt7] = useState(0);
  const [numericegw, setNumericEgw] = useState(0);
  const [numericrent, setNumericRent] = useState(0);
  const [numericot8, setNumericOt8] = useState(0);

  const [numericEnter1, setNumericEnter1] = useState(0);
  const [numericMed1, setNumericMed1] = useState(0);
  const [numericFood1, setNumericFood1] = useState(0);
  const [numericClothes1, setNumericClothes1] = useState(0);
  const [numericTrans1, setNumericTrans1] = useState(0);
  const [numericEdu1, setNumericEdu1] = useState(0);
  const [numericSave1, setNumericSave1] = useState(0);
  const [numericHouse1, setNumericHouse1] = useState(0);
  
  const [numericEnter2, setNumericEnter2] = useState(0);
  const [numericMed2, setNumericMed2] = useState(0);
  const [numericFood2, setNumericFood2] = useState(0);
  const [numericClothes2, setNumericClothes2] = useState(0);
  const [numericTrans2, setNumericTrans2] = useState(0);
  const [numericEdu2, setNumericEdu2] = useState(0);
  const [numericSave2, setNumericSave2] = useState(0);
  const [numericHouse2, setNumericHouse2] = useState(0);

  const [numericEnter3, setNumericEnter3] = useState(0);
  const [numericMed3, setNumericMed3] = useState(0);
  const [numericFood3, setNumericFood3] = useState(0);
  const [numericClothes3, setNumericClothes3] = useState(0);
  const [numericTrans3, setNumericTrans3] = useState(0);
  const [numericEdu3, setNumericEdu3] = useState(0);
  const [numericSave3, setNumericSave3] = useState(0);
  const [numericHouse3, setNumericHouse3] = useState(0);

const [numericEnter4, setNumericEnter4] = useState(0);
const [numericMed4, setNumericMed4] = useState(0);
const [numericFood4, setNumericFood4] = useState(0);
const [numericClothes4, setNumericClothes4] = useState(0);
const [numericTrans4, setNumericTrans4] = useState(0);
const [numericEdu4, setNumericEdu4] = useState(0);
const [numericSave4, setNumericSave4] = useState(0);
const [numericHouse4, setNumericHouse4] = useState(0);

const [numericEnter5, setNumericEnter5] = useState(0);
const [numericMed5, setNumericMed5] = useState(0);
const [numericFood5, setNumericFood5] = useState(0);
const [numericClothes5, setNumericClothes5] = useState(0);
const [numericTrans5, setNumericTrans5] = useState(0);
const [numericEdu5, setNumericEdu5] = useState(0);
const [numericSave5, setNumericSave5] = useState(0);
const [numericHouse5, setNumericHouse5] = useState(0);

const [numericEnter6, setNumericEnter6] = useState(0);
const [numericMed6, setNumericMed6] = useState(0);
const [numericFood6, setNumericFood6] = useState(0);
const [numericClothes6, setNumericClothes6] = useState(0);
const [numericTrans6, setNumericTrans6] = useState(0);
const [numericEdu6, setNumericEdu6] = useState(0);
const [numericSave6, setNumericSave6] = useState(0);
const [numericHouse6, setNumericHouse6] = useState(0);

const [numericEnter7, setNumericEnter7] = useState(0);
const [numericMed7, setNumericMed7] = useState(0);
const [numericFood7, setNumericFood7] = useState(0);
const [numericClothes7, setNumericClothes7] = useState(0);
const [numericTrans7, setNumericTrans7] = useState(0);
const [numericEdu7, setNumericEdu7] = useState(0);
const [numericSave7, setNumericSave7] = useState(0);
const [numericHouse7, setNumericHouse7] = useState(0);
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

  const gett = () => {axios.post('http://localhost:4000/get-values', { week })
        .then(response => {
            console.log(response.data.values);
            setNumericEnter1(response.data.values[0].numericEnter);
            setNumericMed1(response.data.values[0].numericMed);
            setNumericFood1(response.data.values[0].numericFood);
            setNumericClothes1(response.data.values[0].numericClothes);
            setNumericTrans1(response.data.values[0].numericTrans);
            setNumericEdu1(response.data.values[0].numericEdu);
            setNumericSave1(response.data.values[0].numericSave);
            setNumericHouse1(response.data.values[0].numericHouse);

            setNumericEnter2(response.data.values[1].numericEnter);
            setNumericMed2(response.data.values[1].numericMed);
            setNumericFood2(response.data.values[1].numericFood);
            setNumericClothes2(response.data.values[1].numericClothes);
            setNumericTrans2(response.data.values[1].numericTrans);
            setNumericEdu2(response.data.values[1].numericEdu);
            setNumericSave2(response.data.values[1].numericSave);
            setNumericHouse2(response.data.values[1].numericHouse);

            setNumericEnter3(response.data.values[2].numericEnter);
            setNumericMed3(response.data.values[2].numericMed);
            setNumericFood3(response.data.values[2].numericFood);
            setNumericClothes3(response.data.values[2].numericClothes);
            setNumericTrans3(response.data.values[2].numericTrans);
            setNumericEdu3(response.data.values[2].numericEdu);
            setNumericSave3(response.data.values[2].numericSave);
            setNumericHouse3(response.data.values[2].numericHouse);

            setNumericEnter4(response.data.values[3].numericEnter);
            setNumericMed4(response.data.values[3].numericMed);
            setNumericFood4(response.data.values[3].numericFood);
            setNumericClothes4(response.data.values[3].numericClothes);
            setNumericTrans4(response.data.values[3].numericTrans);
            setNumericEdu4(response.data.values[3].numericEdu);
            setNumericSave4(response.data.values[3].numericSave);
            setNumericHouse4(response.data.values[3].numericHouse);

            setNumericEnter5(response.data.values[4].numericEnter);
            setNumericMed5(response.data.values[4].numericMed);
            setNumericFood5(response.data.values[4].numericFood);
            setNumericClothes5(response.data.values[4].numericClothes);
            setNumericTrans5(response.data.values[4].numericTrans);
            setNumericEdu5(response.data.values[4].numericEdu);
            setNumericSave5(response.data.values[4].numericSave);
            setNumericHouse5(response.data.values[4].numericHouse);

            setNumericEnter6(response.data.values[5].numericEnter);
            setNumericMed6(response.data.values[5].numericMed);
            setNumericFood6(response.data.values[5].numericFood);
            setNumericClothes6(response.data.values[5].numericClothes);
            setNumericTrans6(response.data.values[5].numericTrans);
            setNumericEdu6(response.data.values[5].numericEdu);
            setNumericSave6(response.data.values[5].numericSave);
            setNumericHouse6(response.data.values[5].numericHouse);

            setNumericEnter7(response.data.values[6].numericEnter);
            setNumericMed7(response.data.values[6].numericMed);
            setNumericFood7(response.data.values[6].numericFood);
            setNumericClothes7(response.data.values[6].numericClothes);
            setNumericTrans7(response.data.values[6].numericTrans);
            setNumericEdu7(response.data.values[6].numericEdu);
            setNumericSave7(response.data.values[6].numericSave);
            setNumericHouse7(response.data.values[6].numericHouse);
        })
        .catch(error => {
            console.error("Registration error:", error);
        });
      }

  const gett1 = () => {axios.post('http://localhost:4000/get-values-week', { week })
  .then(response => {
      setNumericMov(response.data.values[0].numericmov);
      setNumericStr(response.data.values[0].numericstr);
      setNumericOt1(response.data.values[0].numericot1);
      setNumericRest(response.data.values[0].numericrest);
      setNumericGro(response.data.values[0].numericgro);
      setNumericOt2(response.data.values[0].numericot2);
      setNumericBill(response.data.values[0].numericbill);
      setNumericIns(response.data.values[0].numericins);
      setNumericOt3(response.data.values[0].numericot3);
      setNumericCl(response.data.values[0].numericcl);
      setNumericPcp(response.data.values[0].numericpcp);
      setNumericOt4(response.data.values[0].numericot4);
      setNumericFue(response.data.values[0].numericfue);
      setNumericVeh(response.data.values[0].numericveh);
      setNumericOt5(response.data.values[0].numericot5);
      setNumericFee(response.data.values[0].numericfee);
      setNumericBook(response.data.values[0].numericbook);
      setNumericOt6(response.data.values[0].numericot6);
      setNumericInv(response.data.values[0].numericinv);
      setNumericRet(response.data.values[0].numericret);
      setNumericOt7(response.data.values[0].numericot7);
      setNumericEgw(response.data.values[0].numericegw);
      setNumericRent(response.data.values[0].numericrent);
      setNumericOt8(response.data.values[0].numericot8);
  })
  .catch(error => {
      console.error("Registration error:", error);
  });
}

function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;
  for(let i=0; i<arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

function abs(val){
  if(val < 0){
    return -val;
  }else{
    return val;
  }
}

  const enter = numericmov+numericstr+numericot1;
  const food = numericrest+numericgro+numericot2;
  const med= numericbill+numericins+numericot3;
  const clothes = numericcl+numericpcp+numericot4;
  const travel = numericfue+numericveh+numericot5;
  const edu = numericfee+numericbook+numericot6;
  const savings = numericinv+numericret+numericot7;
  const house = numericrent+numericegw+numericot8;

  const dailyEnter = numericEnter1 + numericEnter2 + numericEnter3 + numericEnter4 + numericEnter5 + numericEnter6 + numericEnter7;
  const dailyMed = numericMed1 + numericMed2 + numericMed3 + numericMed4 + numericMed5 + numericMed6 + numericMed7;
  const dailyFood = numericFood1 + numericFood2 + numericFood3 + numericFood4 + numericFood5 + numericFood6 + numericFood7;  ;
  const dailyClothes = numericClothes1 + numericClothes2 + numericClothes3 + numericClothes4 + numericClothes5 + numericClothes6 + numericClothes7;;
  const dailyTrans = numericTrans1 + numericTrans2 + numericTrans3 + numericTrans4 + numericTrans5 + numericTrans6 + numericTrans7;
  const dailyEdu = numericEdu1 + numericEdu2 + numericEdu3 + numericEdu4 + numericEdu5 + numericEdu6 + numericEdu7;
  const dailySave = numericSave1 + numericSave2 + numericSave3 + numericSave4 + numericSave5 + numericSave6 + numericSave7;
  const dailyHouse = numericHouse1 + numericHouse2 + numericHouse3 + numericHouse4 + numericHouse5 + numericHouse6 + numericHouse7;

  const day1 = numericEnter1 + numericMed1 + numericFood1 + numericClothes1 + numericTrans1 + numericEdu1 + numericSave1 + numericHouse1;
  const day2 = numericEnter2 + numericMed2 + numericFood2 + numericClothes2 + numericTrans2 + numericEdu2 + numericSave2 + numericHouse2;
  const day3 = numericEnter3 + numericMed3 + numericFood3 + numericClothes3 + numericTrans3 + numericEdu3 + numericSave3 + numericHouse3;
  const day4 = numericEnter4 + numericMed4 + numericFood4 + numericClothes4 + numericTrans4 + numericEdu4 + numericSave4 + numericHouse4;
  const day5 = numericEnter5 + numericMed5 + numericFood5 + numericClothes5 + numericTrans5 + numericEdu5 + numericSave5 + numericHouse5;
  const day6 = numericEnter6 + numericMed6 + numericFood6 + numericClothes6 + numericTrans6 + numericEdu6 + numericSave6 + numericHouse6;
  const day7 = numericEnter7 + numericMed7 + numericFood7 + numericClothes7 + numericTrans7 + numericEdu7 + numericSave7 + numericHouse7;

  const data = [enter, food, med, clothes, travel, edu, savings, house];
  const labels = ['Entertainment', 'Food', 'Medical', 'Clothes', 'Transportation', 'Education', 'Savings', 'Household'];
  const backgroundColor = [
    'rgb(255, 87, 145)',
    'rgb(255, 255, 87)',
    'rgb(145, 87, 255)',
    'rgb(255, 145, 87)',
    'rgb(87, 145, 255)',
    'rgb(145, 255, 87)',
    'rgb(255, 87, 255)',
    'rgb(87, 255, 255)',
  ];

  const dailyData = [day1, day2, day3, day4, day5, day6, day7];
  const dailyLabels = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];

  const bar = [dailyEnter, dailyFood, dailyMed, dailyClothes, dailyTrans, dailyEdu, dailySave, dailyHouse];

  const forBar = [data, bar];

  console.log(sumArray(bar), sumArray(data));

  return(
    <div>
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
              <a className="nav-link" href="#"><b>RM Coins:</b></a>
            </li>
          </ul>
        </div>
      </nav>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="buttonsspend">
      <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12">
            <div className="card spend-card budget-card-center">
              <div className="card-body">
              
                <input type="string" id="dreport">
                </input><br/> <button onClick={gett} id="spendbut">Generate Daily Report</button>
                <br/><br/><br/>
                <input type="string" id="wreport"></input><button onClick={gett1} id="spendbut">Generate Weekly Report</button>
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
        <h1 className="pietext"><b>Budgeted Categories</b></h1>
        <br/>
        <div className="piechart">
          <br/>
          <PieChart data={data} labels={labels} backgroundColor={backgroundColor} />
        </div>

      <br/>
      <br/>
      <br/>
     
      <br/>
        <h1 className="dtrackrep"><b>Daily Tracker Report</b></h1>
        <br/>
        <div className="linechart">
          <Linechart data={dailyData} labels={dailyLabels}/>
      </div>


      <br/>
      <br/>
      <br/>
      <br/>

      
      <br/>
         <h1 className="analysis"><b>Analysis</b></h1>
         <br/>
         <div className="pairbar">
        
           <PairBarChart data={forBar}/>
         </div>

      <br/>
      <br/>
      <br/>
      <br/>

      
      <br/>
        <h1 className="alertp"><b>Alert Analysis</b></h1>
        <br/>
        <div className="alerts">
             <PairedBarGraph data={forBar}/>

         

      <br/>
      <br/>
      <br/>
      <br/>

    <div className="alert">
      {(sumArray(data)-sumArray(bar)<0) ? (
        <div><p className="mline">Sorry! You have lost amount <b>{abs(sumArray(data)-sumArray(bar))} </b> !</p></div>
      ) : (
        <div><p className="mline">Congratulations! You have saved amount <b>{abs(sumArray(data)-sumArray(bar)) } </b> !</p></div>
      )}    

      <div className="subdivtext">
          {(data[0]-bar[0]<0) ? (
            <div><p>Entertainment: You have lose amount {abs(data[0]-bar[0])}</p></div>
          ) : (
            <div><p>Entertainment: You have saved amount {abs(data[0]-bar[0])}</p></div>
          )}
          {(data[1]-bar[1]<0) ? (
            <div><p>Food: You have lose amount {abs(data[1]-bar[1])}</p></div>
          ) : (
            <div><p>Food: You have saved amount {abs(data[1]-bar[1])}</p></div>
          )}
          {(data[2]-bar[2]<0) ? (
            <div><p>Medical: You have lose amount {abs(data[2]-bar[2])}</p></div>
          ) : (
            <div><p>Medical: You have saved amount {abs(data[2]-bar[2])}</p></div>
          )}
          {(data[3]-bar[3]<0) ? (
            <div><p>Clothing: You have lose amount {abs(data[3]-bar[3])}</p></div>
          ) : (
            <div><p>Clothing: You have saved amount {abs(data[3]-bar[3])}</p></div>
          )}
          {(data[4]-bar[4]<0) ? (
            <div><p>Transportation: You have lose amount {abs(data[4]-bar[4])}</p></div>
          ) : (
            <div><p>Transportation: You have saved amount {abs(data[4]-bar[4])}</p></div>
          )}
          {(data[5]-bar[5]<0) ? (
            <div><p>Education: You have lose amount {abs(data[5]-bar[5])}</p></div>
          ) : (
            <div><p>Education: You have saved amount {abs(data[5]-bar[5])}</p></div>
          )}
          {(data[6]-bar[6]<0) ? (
            <div><p>Savings & Investments: You have lose amount {abs(data[6]-bar[6])}</p></div>
          ) : (
            <div><p>Savings & Investments: You have saved amount {abs(data[6]-bar[6])}</p></div>
          )}
          {(data[7]-bar[7]<0) ? (
            <div><p>Household & Groceries: You have lose amount {abs(data[7]-bar[7])}</p></div>
          ) : (
            <div><p>Household & Groceries: You have saved amount {abs(data[7]-bar[7])}</p></div>
          )}
       </div>

      </div>
    </div>
    </div>
  );
};

export default GraphComponent;
