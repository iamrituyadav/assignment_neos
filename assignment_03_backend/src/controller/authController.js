const fs = require("fs");
const data = require("../../db.json");

function register(req, res) {
  try {
    let mobile = data.user.filter((e) => {
      console.log(typeof e.mobile, typeof req.body.mobile);
      return JSON.parse(e.mobile) === JSON.parse(req.body.mobile);
    });

    if (mobile.length === 0) {
      let newUser = [...data.user, req.body];
      data.user = newUser;
      fileWriter(data);
      res.send("Registered Successfully");
    } else {
      res.send("Mobile already in use");
    }
  } catch (err) {
    return res.send(err);
  }
}

function login(req, res) {
  let user = data.user.filter((e) => {
    return JSON.parse(e.mobile) === JSON.parse(req.body.mobile);
  });

  if (user.length === 0) {
    return res.send("User is not registered");
  } else {
    return res.send(user);
  }
}

function fileWriter(data) {
  const jsonString = JSON.stringify(data);
  fs.writeFileSync("./db.json", jsonString, (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log("Successfully wrote file");
    }
    data = JSON.parse(data);
  });
}

module.exports = { register, login };
