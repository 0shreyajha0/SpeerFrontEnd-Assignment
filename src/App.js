import React, { useEffect, useState } from "react";
import Card from "./Components/Card";
import ShimmerCard from "./Components/ShimmerCard";
import { IoMdArchive } from "react-icons/io";

const App = () => {
  const API = "https://cerulean-marlin-wig.cyclic.app/";
  const [calldata, setCalldata] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API + "activities");
    const json = await data.json();
    setCalldata(json);
  };

  console.log(calldata);
  if (!calldata) {
    <div>Loading</div>;
  }

  // Implement the Archieded but the API is not work properly

  return calldata.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div>
      <div className="w-[90%] text-lg text-gray-400 flex justify-center gap-2 mb-5 font-semibold  m-auto rounded-b-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] h-[50px]">
        <button 
         
          className="text-xl gap-2 flex">
          <p className="text-xl pt-1 flex">
            <IoMdArchive />
          </p>
          <p>Archieved All Calls</p>
        </button>
      </div>

      {calldata.map((call) => {
        return (
          <div key={call.id} className="">
            <Card call={call} />
          </div>
        );
      })}
    </div>
  );
};

export default App;
