"use client"
import { InstallAppsContext } from '@/context/install.context';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';


const InstallToggleButton = ({app}) => {

    const {installedApps, setInstalledApps} = useContext(InstallAppsContext);
    console.log(installedApps,'something');

    const handleInstallNow = () =>{
        console.log("handle installn now");
        setInstalledApps([...installedApps, app])
        toast.success(`${app.title} is successfully Installed`)
    }

    const isInstalled = installedApps.find(installedapp => installedapp.id === app.id)

    return (
        <div>
            <button disabled={isInstalled} onClick={handleInstallNow} className='btn bg-purple-500'>{`${isInstalled ? 'Installed' : 'Install Now'}`}</button>
        </div>
    );
};

export default InstallToggleButton;