import React, { useState } from 'react';
import './styles/spendinganal.css';
import axios from 'axios';
import { useEffect } from 'react';

const GraphComponent = () => {
  const [val, setVal] = useState({});
  const [dataFetched, setDataFetched] = useState(false);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

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
          const num2 = await val[0].numericrest;
          setNum1(num1);
          setNum2(num2);
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
  
  return (
    <div className="spendcontainer">
      <div className="movies">
        <h5>Movies, Shows & Events</h5>
        <input type="numeric" id="movies" />
        
        <h5>Streaming Subscriptions</h5>
        <input type="numeric" id="subs" />
        
        <h5>Others</h5>
        <input type="numeric" id="others1" />
      </div>

      <div className="chart-container">
        <h2>Bar Chart</h2>
        <div className="bar" style={{ height: `${num1}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
          <span>Movies</span>
        </div>
        <div className="bar" style={{ height: `${num2}px`, background: 'linear-gradient(to top, #2ecc71, #27ae60)' }}>
          <span>Streaming Subscriptions</span>
        </div>
        <div className="bar" style={{ height: `14px`, background: 'linear-gradient(to top, #e74c3c, #c0392b)' }}>
          <span>Others</span>
        </div>
      </div>
    </div>
  
  );
};

export default GraphComponent;