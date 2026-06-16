import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function IncomeExpenseChart() {
  const data = {
    labels: ["Income", "Expenses"],
    datasets: [
      {
        data: [24250, 8320],
        backgroundColor: ["#2f80ed", "#eb5757"],
        borderColor: "#ffffff",
        borderWidth: 2,
        hoverOffset: 8,
        cutout: "70%", // donut hole size
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 12,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let value = context.raw;
            return `${context.label}: $${value.toLocaleString()}`;
          },
        },
      },
    },
  };

  return (
    <div className="chartBoxSmall">
      <h3>Income vs Expenses</h3>
      <Doughnut data={data} options={options} />
    </div>
  );
}