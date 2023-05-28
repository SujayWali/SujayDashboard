import React from "react";
import BarChart from "../../charts/BarChart01";

import { tailwindConfig } from "../../utils/Utils";

function DashboardCard04() {
  // const [revenueData, setRevenueData] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://assignment-1-fc7lwmf3uq-el.a.run.app/revenue"
  //     );
  //     const data = await response.json();
  //     setRevenueData(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  const chartData = {
    labels: [
      "03-01-2022",
      "04-01-2022",
      "05-01-2022",
      "06-01-2022",
      "07-01-2022",
      "08-01-2022",
    ],
    datasets: [
      {
        label: "Direct",
        data: [4.56, 5.34, 6.78, 8.98, 8.67, 6.34],
        backgroundColor: tailwindConfig().theme.colors.blue[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.blue[500],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },

      {
        label: "Indirect",
        data: [3.45, 4.89, 3.33, 7.89, 6.34, 4.34],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Direct VS Indirect</h2>
      </header>

      <BarChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard04;
