
"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);



const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const accountNames = accounts.map((a) => a.name);
  const balances = accounts.map((a) => a.currentBalance)

  const data = {
    datasets: [
      {
        label: 'Banks',
        // data: balances,
        data: [1250, 2500, 3750, 1100], 
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa','#2f77fa'] 
      }
    ],
    // labels: accountNames
    labels: ['Bank1', 'Bank2', 'Bank3', 'Bank4']
  }

  return <Doughnut 
    data={data} 
    options={{
      cutout: '60%',
      plugins: {
        legend: {
          display: false
        }
      }
    }}
  />
}

export default DoughnutChart
