import React from 'react';
import Chart from "react-google-charts";
// import './AllPool.css'


function CandleChart() {
  const options = {
    chart: {},
    width: '100%',
    // height: 300,
    // backgroundColor: '#4A5568',
    // color:"white",
    hAxis: { title: '' },

  };


  const data = [
    [
      {
        type: "string",
        id: "Date"
      },
      {
        type: "number",
        label: ""
      },
      {
        type: "number",
        label: ""
      },
      {
        type: "number",
        label: ""
      },
      {
        type: "number",
        label: ""
      }
    ],
    ["Mon", 20, 28, 38, 45],
    ["Tue", 31, 38, 55, 66],
    ["Wed", 50, 55, 77, 80],
    ["Thu", 77, 77, 66, 50],
    ["Mon", 20, 28, 38, 45],
    ["Tue", 31, 38, 55, 66],
    ["Wed", 50, 55, 77, 80],
    ["Thu", 77, 77, 66, 50],
    ["Mon", 20, 28, 38, 45],
    ["Tue", 31, 38, 55, 66],
    ["Wed", 50, 55, 77, 80],
    ["Thu", 77, 77, 66, 50],
    ["Mon", 20, 28, 38, 45],
    ["Tue", 31, 38, 55, 66],
    ["Wed", 50, 55, 77, 80],
    ["Thu", 77, 77, 66, 50],
    ["Fri", 68, 66, 22, 15]
  ];
  return (
    <div className='bg-App'>
      <div className="bg-App">
        <Chart
          // id="reactgooglegraph-1 Chart_div"
          className='bg-App'
          chartType="CandlestickChart"
          height="450px"
          fill="#000000"
          data={data}
          options={options}
          
        />
      </div>
    </div>
  );
}

export default CandleChart