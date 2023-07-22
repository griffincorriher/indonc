import React, { useState } from 'react';

interface MapListSelectProps {
  onViewChange: (selectedView: "map" | "list") => void;
}

export function MapListSelect({ onViewChange }: MapListSelectProps) {
  const [selectedView, setSelectedView] = useState<"map" | "list">("map");

  const handleViewChange = (view: "map" | "list") => {
    setSelectedView(view);
    onViewChange(view);
  };

  return (
    <div className="inline-flex rounded-md shadow-sm">
      <a
        href="#"
        aria-current="page"
        className={`px-4 py-2 text-sm font-medium ${
          selectedView === "map" ? "text-red-700" : "text-slate-500"
        } bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-red-700 focus:z-10  dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-red-500`}
        onClick={() => handleViewChange("map")}
      >
        <span className="hidden lg:inline-block">Map View</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke={selectedView === "map" ? "rgb(185 28 28)" : "rgb(100 116 139)"}
          className="w-6 h-6 lg:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
          />
        </svg>
      </a>
      <a
        href="#"
        className={`px-4 py-2 text-sm font-medium ${
          selectedView === "list" ?  "text-red-700" : "text-slate-500"
        } bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-red-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-red-500`}
        onClick={() => handleViewChange("list")}
      >
        <span className="hidden lg:inline-block">List View</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke={selectedView === "list" ? "rgb(185 28 28)" : "rgb(100 116 139)"}
          className="w-6 h-6 lg:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </a>
    </div>
  );
}
