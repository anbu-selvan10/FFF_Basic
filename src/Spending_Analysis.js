import React, { useState } from 'react';
import './styles/spendinganal.css';
import axios from 'axios';
import { useEffect } from 'react';

const GraphComponent = () => {
  const [val, setVal] = useState({});


  useEffect(() => {
    axios.get('http://localhost:4000/get-values')
          .then(response => {
              console.log(response.data.values);
          })
          .catch(error => {
              console.error(error);
          });
  }, []);

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
        <div className="bar" style={{ height: `${val[0].numericmov}px`, background: 'linear-gradient(to top, #3498db, #2980b9)' }}>
          <span>Movies</span>
        </div>
        <div className="bar" style={{ height: `${val[0].numericstr}px`, background: 'linear-gradient(to top, #2ecc71, #27ae60)' }}>
          <span>Streaming Subscriptions</span>
        </div>
        <div className="bar" style={{ height: `${val[0].numericot1}px`, background: 'linear-gradient(to top, #e74c3c, #c0392b)' }}>
          <span>Others</span>
        </div>
      </div>
    </div>
  
  );
};

export default GraphComponent;




