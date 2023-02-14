import { useState } from "react";
import { HiOutlineX } from "react-icons/hi";

const Modal = () => {
  const [data, setData] = useState({
    user_email: "",
    title: "",
    progress: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((data) => ({
      ...data,
      [name]: value,
    }));

    console.log(data);
  };

  const postData = () => {
    console.log("postData");
  };

  return (
    <div className="absolute left-0 top-0 w-full h-[100vh] bg-black bg-opacity-25 flex justify-center items-center">
      <div className="bg-white rounded-md py-4 px-8">
        <div className="flex justify-between items-center border-b">
          <h3 className="font-medium text-lg">Start a new system</h3>
          <button className="p-2">
            <HiOutlineX className="text-lg" />
          </button>
        </div>
        <form className="flex flex-col gap-4 mt-4">
          <input type="text" required maxLength={30} placeholder="What is your system's title" name="title" value={data.title} onChange={handleChange} className="w-[20rem] py-2 px-4 outline-none border-2 rounded-md" />
          <div className="flex flex-col">
            <label htmlFor="range" className="text-gray-400 text-sm">
              Drag to select current progress
            </label>
            <input type="range" id="range" required min="0" max="5" name="progress" value={data.progress} onChange={handleChange} className="cursor-pointer form-range" />
          </div>
          <input type="submit" className="py-1 px-3 cursor-pointer rounded-xl bg-transparent border-2 border-black" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
