import React from "react";
import ProgressBar from "./ProgressBar";
import TickIcon from "./TickIcon";

const ListItem = ({ system }) => {
  console.log(system);
  return (
    <li className="w-[100%] mt-3 rounded-xl shadow-md flex justify-between p-2 border border-gray-200">
      {/* Info Container */}
      <div className="flex items-center">
        <TickIcon />
        <p className="">{system.title}</p>
        <ProgressBar />
      </div>
      {/* Button Container */}
      <div className="flex items-center">
        <button className="mx-1 py-1 px-3 rounded-xl bg-transparent border-2 border-black">Edit</button>
        <button className="mx-1 py-1 px-3 rounded-xl bg-transparent border-2 border-black">Delete</button>
      </div>
    </li>
  );
};

export default ListItem;
