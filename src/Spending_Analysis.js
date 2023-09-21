import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GraphComponent = () => {
  const [graphUrl, setGraphUrl] = useState(null);

    const labels = [
      'numericearn', 'numericmov', 'numericstr', 'numericot1', 'numericrest',
      'numericgro', 'numericot2', 'numericbill', 'numericins', 'numericot3',
      'numericcl', 'numericpcp', 'numericot4', 'numericfue', 'numericveh',
      'numericot5', 'numericfee', 'numericbook', 'numericot6', 'numericinv',
      'numericret', 'numericot7', 'numericegw', 'numericrent', 'numericot8'
    ];

    const values = [
      100, 150, 200, 50, 75, 120, 80, 40, 60, 90, 110, 130,
      40, 60, 80, 100, 120, 90, 110, 30, 20, 40, 60, 130, 110
    ]

  useEffect(() => {
    axios.post('http://localhost:4000/generate-graph', { labels, values })
      .then(response => {
        setGraphUrl(response.data);
      })
      .catch(error => {
        console.error('Error fetching graph:', error);
      });
  }, []);

  return (
    <div>
      <h2>Generated Graph</h2>
      {graphUrl ? (
        <img src={graphUrl} alt="Generated Graph" />
      ) : (
        <p>Loading graph...</p>
      )}
    </div>
  );
};

export default GraphComponent;
