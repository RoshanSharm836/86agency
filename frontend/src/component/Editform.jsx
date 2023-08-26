import axios from "axios";
import React, { useState } from "react";

import "../style/form.css";
export default function Editform({ setEdituser, id, edituser }) {
  const [data, setData] = useState({});

  function handlesubmit(e) {
    e.preventDefault();
    axios.put(`http://localhost:3059/users/${id}`, data).then((data) => {
      setEdituser(!edituser);
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

        <label htmlFor="">bio</label>
        <input type="text" name="bio" onChange={handlechange} required />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
