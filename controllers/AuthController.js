const bcrypt = require("bcrypt");
const User = require("../models/UserModel.js");
const generateToken = require("../util/generateToken.js");

exports.registerController = async (req, res) => {
  const { name, email, password, phone, address, country, BVN } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(401).json({ message: "User already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  User.create(
    {
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      country,
      BVN,
    },
    (err, user) => {
      if (err) {
        return res.status(500).json({ message: `${err}` });
      }
      if (user) {
        const token = generateToken(user._id);
        return res.status(201).json({
          message: "Registration Success",
          token: token,
        });
      } else {
        return res.status(400).json({ message: "Invalid user data" });
      }
    }
  );
};
