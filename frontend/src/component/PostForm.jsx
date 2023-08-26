import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "../style/form.css";
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
    axios.post(`http://localhost:3059/posts`, data).then((data) => {
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
    <div className="container">
      <div>
        <h1 className="heading">create post</h1>
        <form onSubmit={handlesubmit}>
          <label htmlFor="">content</label>
          <input
            type="text"
            name="content"
            maxlength="300"
            onChange={handlechange}
            required
          />
          <input className="button-4" type="submit" value="post" />
        </form>
      </div>
    </div>
  );
}
