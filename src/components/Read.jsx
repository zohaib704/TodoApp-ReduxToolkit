import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, showUser } from "../fetaures/useDetailSlice";
import CustomModel from "./CustomModel";

const Read = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState();

  const [showpopup, setShowPopup] = useState(false);

  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }
  return (
    <div className="border-2">
      {showpopup && (
        <CustomModel
          id={id}
          showpopup={showpopup}
          setShowPopup={setShowPopup}
        />
      )}
      <h2 className="font-bold text-3xl">All Data</h2>
      <div className="">
        {users &&
          users.map((ele) => (
            <div
              key={ele.id}
              className="border-2 py-2 font-semibold items-center"
            >
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                <p className="card-text">{ele.gender}</p>
                <div className="flex flex-row justify-center">
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => [setId(ele.id), setShowPopup(true)]}
                  >
                    View
                  </button>
                  <Link
                    to={`/edit/${ele.id}`}
                    className="text-blue-600 hover:underline ml-2"
                  >
                    Edit
                  </Link>
                  <Link
                    onClick={() => dispatch(deleteUser(ele.id))}
                    className="text-blue-600 hover:underline ml-2"
                  >
                    Delete
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Read;
