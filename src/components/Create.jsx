import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../fetaures/useDetailSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [users, setUsers] = useState({});

  const navigate = useNavigate();
  // Create disptch is used for send our form data for backend like mockapi
  const dispatch = useDispatch();

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);
    dispatch(createUser(users));
    navigate("/read");
  };

  return (
    <div className="border-2">
      <h1 className="font-bold text-3xl my-2">Fill the Data</h1>
      <form className="py-3" onSubmit={handleSubmit}>
        <div className="w-full pb-6">
          <label className="mx-10" htmlFor="">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={getUserData}
          />
        </div>
        <div className="w-full pb-6">
          <label className="mx-10" htmlFor="">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={getUserData}
          />
        </div>
        <div className="w-full pb-6">
          <label className="mx-10" htmlFor="">
            Age
          </label>
          <input
            type="text"
            name="age"
            placeholder="Enter Age"
            onChange={getUserData}
          />
        </div>

        <fieldset className="flex justify-center items-center">
          <div className="flex items-center mb-4">
            <input
              type="radio"
              name="gender"
              value="male"
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              checked
              onChange={getUserData}
            />
            <label className="block ms-2 mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Male
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              type="radio"
              name="gender"
              value="female"
              className="w-4 mr-2 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              onChange={getUserData}
            />
            <label className="block  ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Female
            </label>
          </div>
        </fieldset>

        <button className="bg-blue-600 rounded-md p-1 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
