import React,{useEffect, useRef} from "react";
import Chart from 'chart.js/auto'

export default function PieChart(){

    const chartRef= useRef(null);
    const chartInstance = useRef(null);

    useEffect(()=>{
        if (chartInstance.current) {
            chartInstance.current.destroy();
          }
          const myChartRef = chartRef.current.getContext('2d');
        
          chartInstance.current = new Chart(myChartRef, {
            type: "pie",
            data: {
              labels: ["Entertainment", "Food", "Medical"],
              datasets: [
                {
                  data: [300, 100, 200],
                  backgroundColor: [
                    'rgb(255,87,145)',
                    'rgb(255,87,145)',
                    'rgb(255,87,145)'
                  ],
                },
              ],
            },
          });
        
          return () => {
            if (chartInstance.current) {
              chartInstance.current.destroy();
            }
          };
        }, []);
        
        
    return(
        <div>
         <canvas ref={chartRef} style={{width:"200px",height:"300px"}}/>
        </div>
    )
}