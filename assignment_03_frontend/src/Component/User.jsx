import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function User() {
  const [toggle, setToggle] = useState(false);
  const toggleHandle = () => {
    // setToggle(!toggle);
  };
  return (
    <div>
      <Register />
      <Login />
    </div>
  );
}
