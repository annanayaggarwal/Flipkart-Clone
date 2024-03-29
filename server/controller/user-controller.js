import User from "../models/User-Schema.js";

export const usersignup = async (request, response) => {
  // console.log("fcvgbn");

  try {
    // console.log("fcvgbn");

    const existing = await User.findOne({ Username: request.body.Username });
    if (existing) {
      return response
        .status(401)
        .json({ message: "username already exsists try another" });
    }

    const user = request.body;
    const newuser = new User(user);
    await newuser.save();
    console.log("fcvgbn");

    response.status(200).json({ message: user });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const userlogin = async (request, response) => {
  try {
    const username = request.body.Username;
    const password = request.body.Password;

    let user = await User.findOne({ Username: username, Password: password });
    if (user) {
      response.status(200).json({data:user});
    } else {
      response.status(401).json("invalid login ");
    }
  } catch (error) {
    response.status(500).json("error", error.message);
  }
};
