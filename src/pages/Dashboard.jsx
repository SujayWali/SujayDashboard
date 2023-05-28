import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import DashboardCard01 from "../components/dashboard/DashboardCard01";
import DashboardCard02 from "../components/dashboard/DashboardCard02";
import DashboardCard03 from "../components/dashboard/DashboardCard03";
import DashboardCard04 from "../components/dashboard/DashboardCard04";
import DashboardCard05 from "../components/dashboard/DashboardCard05";

function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <WelcomeBanner />

            <div className="sm:flex sm:justify-between sm:items-center mb-8"></div>

            <div className="grid grid-cols-12 gap-6">
              <DashboardCard01 />

              <DashboardCard02 />

              <DashboardCard03 />

              <DashboardCard04 />

              <DashboardCard05 />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
