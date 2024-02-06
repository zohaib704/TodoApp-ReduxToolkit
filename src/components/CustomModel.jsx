import React from "react";
import { useSelector } from "react-redux";

const CustomModel = ({ id, showpopup, setShowPopup }) => {
  const allusers = useSelector((state) => state.app.users);

  const singleUser = allusers.filter((ele) => ele.id === id);
  return (
    <>
      <div className="fixed bg-gray-700 top-0 bottom-0 right-0 left-0 flex justify-center items-center z-index-[99] opacity-0.8">
        <div className="text-1xl font-bold rounded-md  bg-white shadow-md p-[10px] border-[10px] h-[300px] w-[300px]">
          <button
            className="bg-blue-500 rounded-md p-1 hover:bg-red-500"
            onClick={() => setShowPopup(false)}
          >
            Close
          </button>
          <h2>{singleUser[0].name}</h2>
          <h2 className="text-blue-500 ">{singleUser[0].email}</h2>
          <h2>{singleUser[0].age}</h2>
          <h2>{singleUser[0].gender}</h2>
        </div>
      </div>
    </>
  );
};

export default CustomModel;
