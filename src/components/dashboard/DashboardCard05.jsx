import React from "react";
import LineChart from "../../charts/LineChart02";
import { tailwindConfig } from "../../utils/Utils";

function DashboardCard05() {
  const chartData = {
    labels: [
      "10-01-2022",
      "11-01-2022",
      "12-01-2022",
      "01-01-2023",
      "02-01-2023",
      "03-01-2023",
      "04-01-2023",
    ],
    datasets: [
      {
        label: "Current",
        data: [3.56, 7.43, 6.43, 6.53, 5.67, 8.09, 7.43],
        borderColor: tailwindConfig().theme.colors.indigo[500],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
      },

      {
        label: "Previous",
        data: [8.45, 9.34, 7.45, 6.54, 6.66, 4.32, 4.56],
        borderColor: tailwindConfig().theme.colors.blue[400],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.blue[400],
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-semibold text-slate-800">AVG Order Value</h2>
      </header>
      <LineChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard05;
