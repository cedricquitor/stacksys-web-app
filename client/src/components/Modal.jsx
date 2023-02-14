import React from "react";

const Modal = () => {
  const handleChange = () => {
    console.log("handleChange");
  };

  return (
    <div>
      <div>
        <div>
          <button>X</button>
          <h3>Start a new system</h3>
        </div>
        <form>
          <input type="text" required maxLength={30} placeholder="What is your system's title" name="title" />
          <input type="text" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
