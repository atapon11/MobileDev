import React, { useState } from "react";

const AddActivity = () => {
  const [data, setData] = useState({
    name: "",
    duration: "",
  });
  const handleChange = (e) => {
    e.persist();
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="add">
      <div className="input-section">
        <p>Activity name : </p>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="name"
          placeholder="Activity name ..."
        ></input>
      </div>
      <div className="input-section">
        <p>Duration : </p>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="duration"
          placeholder="Duration ..."
        ></input>
      </div>
      <button>Add Activity</button>
    </div>
  );
};

export default AddActivity;
