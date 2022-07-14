import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userdata } from "../Redux/action";

export default function Login() {
  const [userMobile, setUserMobile] = useState({
    mobile: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserMobile({ mobile: e.target.value });
  };

  const handleClick = async (e) => {
    try {
      await axios
        .post("http://localhost:8000/login", userMobile)
        .then((res) => {
          dispatch(userdata(res.data[0]));
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={userMobile.mobile}
        placeholder="Enter Mobile Number"
        onChange={(e) => handleChange(e)}
      />
      <input type="submit" value="Login" onClick={(e) => handleClick(e)} />
    </div>
  );
}
