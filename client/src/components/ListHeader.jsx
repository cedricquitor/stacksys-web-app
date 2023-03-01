import React from "react";
import Modal from "./Modal";

const ListHeader = ({ listName }) => {
  const logout = () => {
    console.log("signOut");
  };

  return (
    <div className="w-[100%] flex justify-between border-b py-6">
      <h1 className="text-3xl font-medium">{listName}</h1>
      <div className="flex items-center">
        <button className="mx-1 py-1 px-3 rounded-xl bg-transparent border-2 border-black">Add</button>
        <button onClick={logout} className="mx-1 py-1 px-3 rounded-xl bg-transparent border-2 border-black">
          Logout
        </button>
      </div>
      {/* Uncomment to show modal */}
      {/* <Modal /> */}
    </div>
  );
};

export default ListHeader;
