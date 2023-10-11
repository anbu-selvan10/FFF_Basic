import React, { useState } from 'react';
import './styles/spendinganal.css';
import axios from 'axios';
import { useEffect } from 'react';
import logospend from './img/logofff2.jpg'

const GraphComponent = () => {
  const week = "Week 1";

  const gett = () => {axios.post('http://localhost:4000/get-values', { week })
        .then(response => {
            console.log(response.data.values);
        })
        .catch(error => {
            console.error("Registration error:", error);
        });
      }

  return(
    <div>
      <button onClick={gett}>Click Nigga</button>
    </div>
  );
};

export default GraphComponent;
