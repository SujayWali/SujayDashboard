import React, { useState, useEffect } from "react";
import LineChart from "../../charts/LineChart01";
import Icon from "../../images/icon-03.svg";
import { tailwindConfig, hexToRGB } from "../../utils/Utils";

function DashboardCard03() {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://assignment-1-fc7lwmf3uq-el.a.run.app/sales"
      );
      const data = await response.json();
      setSalesData(data);
      console.log("APIDATA", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const chartData = {
    labels: [
      "07-01-2022",
      "08-01-2022",
      "09-01-2022",
      "10-01-2022",
      "11-01-2022",
      "12-01-2022",
      "01-01-2023",
    ],
    datasets: [
      {
        data: [7.95, 8.19, 6.92, 1.13, 1.53, 4.22, 6.91],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(
          tailwindConfig().theme.colors.blue[500]
        )}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20,
      },

      {
        data: [4.05, 4.3, 9.6, 5.57, 8.83, 8.13, 2.53],
        borderColor: tailwindConfig().theme.colors.slate[300],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.slate[300],
        clip: 20,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        {Object.keys(salesData).map((sale) => {
          const currentvalues = salesData[sale];
          return (
            <div key={sale.id}>
              <header className="flex justify-between items-start mb-2">
                <img src={Icon} width="32" height="32" alt="Icon 03" />
              </header>
              <h2 className="text-lg font-semibold text-slate-800 mb-2">
                {currentvalues.key_accounts.title}
              </h2>
              <div className="text-xs font-semibold text-slate-400 uppercase mb-1">
                SALES
              </div>
              <div className="flex items-start">
                <div className="text-3xl font-bold text-slate-800 mr-2">
                  {currentvalues.key_accounts.currentWeekTotal}
                </div>
                <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">
                  +29%
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grow">
        <LineChart data={chartData} width={389} height={128} />
      </div>
    </div>
  );
}

export default DashboardCard03;
