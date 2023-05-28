import React from "react";

function Sidebar() {
  return (
    <div className="sidebar-expanded">
      <div
        id="sidebar"
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out `}
      >
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          <svg width="32" height="32" viewBox="0 0 32 32">
            <rect fill="#6366F1" width="32" height="32" rx="16" />
            <path
              d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
              fill="#4F46E5"
            />
          </svg>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                Pages
              </span>
            </h3>
            <ul className="mt-3 text-white">
              <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                Dashboard
              </span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
