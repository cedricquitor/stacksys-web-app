import React from "react";
import Modal from "./Modal";

const ListHeader = ({ listName }) => {
  const signOut = () => {
    console.log("signOut");
  };

  return (
    <div className="w-[100%] flex justify-between border-b py-6">
      <h1 className="text-3xl font-medium">{listName}</h1>
      <div className="flex items-center">
        <button className="mx-1 py-1 px-3 rounded-xl bg-transparent border-2 border-black">Add new</button>
        <button onClick={signOut} className="mx-1 py-1 px-3 rounded-xl bg-transparent border-2 border-black">
          Sign out
        </button>
      </div>
      <Modal />
    </div>
  );
};

export default ListHeader;
