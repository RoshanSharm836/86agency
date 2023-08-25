import React from "react";
import axios from "axios";
import { useState } from "react";
export default function UserForm() {
  const [data, setData] = useState({});

  function handlesubmit(e) {
    e.preventDefault();
    axios.post(`http://localhost:3059/users`, data).then((data) => {
      console.log(data.data._id);
      localStorage.setItem("userID", data.data._id);
    });
  }
  const handlechange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label htmlFor="">name</label>
        <input type="text" name="name" onChange={handlechange} required />
        <label htmlFor="">email</label>
        <input type="text" name="email" onChange={handlechange} required />
        <label htmlFor="">bio</label>
        <input type="text" name="bio" onChange={handlechange} required />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
