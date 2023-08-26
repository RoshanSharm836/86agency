import axios from "axios";
import React, { useEffect, useState } from "react";

export default function PostTable({ Current, seettoggle, toggle }) {
  function like(id) {
    axios.post(`http://localhost:3059/posts/${id}/like`).then((data) => {
      console.log(data.data);
      seettoggle(!toggle);
    });
  }
  function unlike(id) {
    axios.post(`http://localhost:3059/posts/${id}/unlike`).then((data) => {
      seettoggle(!toggle);
    });
  }

  return (
    <table style={{ width: "70%" }}>
      <thead>
        <tr>
          <th>content</th>
          <th>Likes</th>
          <th>unlike</th>
          <th>like</th>
          <th>view</th>
          <th>update</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody id="body">
        {Current.map((el, i) => {
          return (
            <tr key={i}>
              <th>{el.content}</th>
              <th>{el.likes}</th>{" "}
              <th>
                <button
                  disabled={el.likes < 1}
                  className="button-4"
                  onClick={() => {
                    unlike(el._id);
                  }}
                >
                  👎
                </button>
              </th>
              <th>
                <button
                  className="button-4"
                  onClick={() => {
                    like(el._id);
                  }}
                >
                  👍
                </button>
              </th>
              <th>
                <button className="button-4">view</button>
              </th>
              <th>
                <button className="button-4">update</button>
              </th>
              <th>
                <button className="button-4">🗑️</button>
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
