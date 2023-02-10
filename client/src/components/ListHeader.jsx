import React from "react";

const ListHeader = ({ listName }) => {
  return (
    <div className="list-header">
      <h1>{listName}</h1>
    </div>
  );
};

export default ListHeader;
