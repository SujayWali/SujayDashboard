import React, { useState, useEffect } from "react";
import LineChart from "../../charts/LineChart01";
import Icon from "../../images/icon-02.svg";

import { tailwindConfig, hexToRGB } from "../../utils/Utils";

function DashboardCard02() {
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
        data: [6.8, 6.93, 6.66, 8.44, 6.58, 6.9, 6.09],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(
          tailwindConfig().theme.colors.blue[500]
        )}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 5,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20,
      },

      {
        data: [2.38, 4.24, 3.91, 4.94, 2.4, 3.72, 3.79],
        borderColor: tailwindConfig().theme.colors.slate[300],
        borderWidth: 5,
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
                <img src={Icon} width="32" height="32" alt="Icon 01" />
              </header>
              <h2 className="text-lg font-semibold text-slate-800 mb-2">
                {currentvalues.customers.title}
              </h2>
              <div className="text-xs font-semibold text-slate-400 uppercase mb-1">
                SALES
              </div>
              <div className="flex items-start">
                <div className="text-3xl font-bold text-slate-800 mr-2">
                  {currentvalues.customers.currentWeekTotal}
                </div>
                <div className="text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full">
                  -14%
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

export default DashboardCard02;
