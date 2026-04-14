'use client'
import { useState } from "react";
import { createContext } from "react";

export const InstallAppsContext = createContext();


const InstalledAppsProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState([]);

  const data = {
    installedApps,
    setInstalledApps,
  };

  return (
    <InstallAppsContext.Provider value={data}>
      {children}
    </InstallAppsContext.Provider>
  );
};

export default InstalledAppsProvider;
