
import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";

import { HashLoader } from "react-spinners";
import AppCard from "../ui/AppCard";
import Link from "next/link";
// import useApps from "@/hooks/useApps";
// import { useLoaderData } from "react-router";

const appsPromise = async function(){
  const res = await fetch("http://localhost:3000/data.json")
  const data = await res.json();
  return data
}

const TrendingApps = async({from}) => {
  const apps = await appsPromise()
  //   const apps = use(appsPromise);
  //   console.log(apps, "apps");

  //   const data = useLoaderData();
  //   console.log(data, "data from homepage");

  // const { apps, loading } = useApps();
// console.log(from,'frommmmm');
  return (
    <div className="container mx-auto my-[60px]">
      {/* Section header */}
      <div className="mb-8 text-center">
        <h2 className="font-bold text-4xl">{from === 'homepage'? 'Trending apps' : 'All Apps'}</h2>
        <p className="text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          reiciendis eos  tempore quis hic quod cupiditate, consequuntur
        </p>
      </div>
      {
      // loading ? (
      //   <div className="flex justify-center items-center">
      //     {/* <HashLoader color="#ad46ff" /> */}
      //     <p>loading...</p>
      //   </div>
      // ) : 
      (
        <div className="grid grid-cols-3 gap-5">
          {apps.slice(0, from === 'homepage' ? 9 : apps.length).map((app, ind) => {
            return <AppCard app={app} key={ind} />;
          })}
        </div>
      )}

      <div className="text-center mt-4">
        <Link href={"/apps"}>
          <button className="btn bg-purple-500 text-white">View All</button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
