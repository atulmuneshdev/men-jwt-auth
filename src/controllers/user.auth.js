const UserModels = require("../models/user");
const Jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  if (!userName || !email || !password)
    return res.status(400).json({ messages: "All fielda are required" });

  try {
    const user = await UserModels.findOne({ email });

    if (user)
      return res.status(401).json({ messages: "User all ready excites" });

    const hashPassword = await bcrypt.hashSync(password, 10);

    const usercreate = await UserModels.create({
      userName,
      password: hashPassword,
      email,
    });

    const token = Jwt.sign({ id: usercreate._id }, process.env.JWT_TOKEN);

    res.cookie("token", token);

    res.status(200).json({ messages: "user is created", usercreate });
  } catch (error) {
    res.status(404).json({ messages: "user is not created", error });
  }
};




exports.LoginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Find user
    const user = await UserModels.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // 2. Compare password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // 3. Generate JWT
    const token = Jwt.sign({ id: user._id }, process.env.JWT_TOKEN, {
      expiresIn: "7d",
    });

    // 4. Save token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // true in production (HTTPS)
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // 5. Response
    res.status(200).json({
      message: "User login successful",
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Login error",
      error: error.message,
    });
  }
};
