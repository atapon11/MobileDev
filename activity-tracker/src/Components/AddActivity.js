import React, { useState } from "react";
import {useDispatch} from "react-redux";

const AddActivity = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    duration: "",
  });
  const handleChange = (e) => {
    e.persist();
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const addActivity = ()=>{
    dispatch ({
      type:"CREATE_ACTIVITY",
      payload:{
        name:data.name,
        duration:data.duration
      }
    })
  }
  return (
    <div className="add">
      <div className="input-section">
        <p>Activity name : </p>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="name"
          placeholder="Activity name ..."
        />
      </div>
      <div className="input-section">
        <p>Duration : </p>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="duration"
          placeholder="Duration ..."
        />
      </div>
      <button onClick={addActivity}>Add Activity</button>
    </div>
  );
};

export default AddActivity;