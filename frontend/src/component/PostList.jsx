import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import PostTable from "./PostTable";

export default function PostList() {
  const [data, setData] = useState([]);
  const [toggle, seettoggle] = useState(false);
  useEffect(() => {
    getlist();
    console.log("click");
  }, [toggle]);

  function getlist(e) {
    axios.get(`https://lime-worried-xerus.cyclic.cloud/posts`).then((data) => {
      setData(data.data);
    });
  }

  return (
    <div>
      {data.length > 0 ? (
        <PostTable Current={data} seettoggle={seettoggle} toggle={toggle} />
      ) : (
        <span class="loader"></span>
      )}
    </div>
  );
}
