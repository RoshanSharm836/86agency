import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
export default function PostForm() {
  useEffect(() => {
    let id = localStorage.getItem("userID");
    setData({
      ...data,
      user_id: id,
    });
  }, []);
  const [data, setData] = useState({});

  function handlesubmit(e) {
    e.preventDefault();
    axios.post(`http://localhost:3059/post`, data).then((data) => {
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
        <label htmlFor="">content</label>
        <input type="text" name="content" onChange={handlechange} required />
        <input type="submit" value="post" />
      </form>
    </div>
  );
}
