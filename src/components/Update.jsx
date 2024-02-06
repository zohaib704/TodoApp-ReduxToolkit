import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../fetaures/useDetailSlice";

const Update = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateData, setUpdateData] = useState();

  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    if (id) {
      const singleUser = users.filter((ele) => ele.id === id);
      setUpdateData(singleUser[0]);
    }
  }, []);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  console.log("updated data", updateData);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/read");
  };
  const postData = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://todo-app-4ece8-default-rtdb.firebaseio.com/.json",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      }
    );
  };

  return (
    <div>
      <h2 className="my-2 font-bold text-2xl">Edit Data</h2>
      <form className="w-50 mx-auto my-5" onSubmit={handleUpdate}>
        <div class="mb-3">
          <label class="form-label font-semibold mr-4">Name</label>
          <input
            type="text"
            name="name"
            class="form-control"
            value={updateData && updateData.name}
            onChange={newData}
          />
        </div>
        <div class="mb-3">
          <label class="form-label font-semibold mr-4">Email</label>
          <input
            type="email"
            name="email"
            class="form-control"
            value={updateData && updateData.email}
            onChange={newData}
          />
        </div>
        <div class="mb-3">
          <label class="form-label font-semibold mr-4">Age</label>
          <input
            type="text"
            name="age"
            class="form-control"
            value={updateData && updateData.age}
            onChange={newData}
          />
        </div>
        <div className="flex gap-2 justify-center font-semibold">
          <div class="mb-3">
            <input
              class="form-check-input"
              name="gender"
              value="Male"
              type="radio"
              checked={updateData && updateData.gender === "Male"}
              onChange={newData}
            />
            <label class="form-check-label">Male</label>
          </div>
          <div class="mb-3">
            <input
              class="form-check-input"
              name="gender"
              value="Female"
              type="radio"
              checked={updateData && updateData.gender === "Female"}
              onChange={newData}
            />
            <label class="form-check-label">Female</label>
          </div>
        </div>

        <button
          type="submit"
          class="bg-blue-600 rounded-md font-bold px-1 hover:bg-green-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
