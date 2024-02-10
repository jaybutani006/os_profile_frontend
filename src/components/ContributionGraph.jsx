import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip,
} from "chart.js";


const generateData = () => {
  // Replace this with your actual data
  const contributions = [0, 2, 0, 1, 3, 0, 0]; // Example data

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Contributions",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: contributions,
      },
    ],
  };

  return data;
};

const ContributionGraph = () => {
  const data = generateData();

  const options = {
    scales: {
      x: {
        type: "category",
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        stepSize: 1,
        grid: {
          display: true,
        },
      },
    },
  };


  return (
    <div>
      <h2>GitHub-like Contribution Graph</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default ContributionGraph;
