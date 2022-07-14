import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userdata } from "../Redux/action";

export default function Register() {
  const [formData, setFormData] = useState({
    userId: uuidv4(),
    name: "",
    mobile: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/register", formData).then(() => {
        console.log("registered successfully");
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <form>
        <h1>Register</h1>
        <input
          type="text"
          id="name"
          placeholder="Enter Name"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="text"
          id="mobile"
          placeholder="Enter Mobile Number"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input type="submit" value="Register" onClick={(e) => handleClick(e)} />
      </form>
    </div>
  );
}
