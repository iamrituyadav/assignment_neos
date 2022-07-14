import React, { useState } from "react";
import Register from "./Register";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleHandle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
        <button>Login</button>
      {/* <button onClick={toggleHandle}>
        {toggle ? Register : Login >}
      </button> */}
    </div>
  );
}
