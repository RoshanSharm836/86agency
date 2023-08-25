import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Table({
  Current,
  edituser,
  settoggle,
  setEdituser,
  setID,
}) {
  function handleupdate(id) {
    setEdituser(!edituser);
    setID(id);
  }
  function handledelete(id) {
    axios.delete(`http://localhost:3059/users/${id}`).then((data) => {
      settoggle(true);
    });
  }
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>Email</th>
          <th>Bio</th>
          <th>view</th>
          <th>update</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody id="body">
        {Current.map((el, i) => {
          return (
            <tr key={i}>
              <th>{el._id}</th>
              <th>{el.name}</th>
              <th>{el.bio}</th>
              <th>{el.email}</th>
              <th>
                <button>view</button>
              </th>
              <th>
                <button
                  onClick={() => {
                    handleupdate(el._id);
                  }}
                >
                  update
                </button>
              </th>
              <th>
                <button
                  onClick={() => {
                    handledelete(el._id);
                  }}
                >
                  delete
                </button>
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
