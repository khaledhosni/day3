import React, { useEffect, useState } from "react";

const Demo = () => {
  const [user, setuser] = useState({});
  const [count, setcount] = useState(0);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => {
        return res.json();
      })
      .then((user) => {
        setuser(user);
      });

    console.log("data has been fetched");
  }, [count]);

  function handleButton() {
    setcount(count + 1);
  }

  return (
    <div>
      <h1>User Data</h1>
      <h2>{count}</h2>
      <h3>{user.username}</h3>

      <button onClick={handleButton}>update Count</button>
    </div>
  );
};

export default Demo;
