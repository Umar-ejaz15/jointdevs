import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";


export const adminRegister = async ({ email, password }) => {
  try {
    let user = await userModel.findOne({ email });

    if (!user) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash("admin", salt);

      user = new userModel({
        email: "official.admin@gmail.com", // ← hardcoded email
        password: hashedPassword,
        isAdmin: true,
      });

      await user.save();
    } else {
      throw new Error("Admin already exists");
    }

    return { user };
  } catch (error) {
    throw error;
  }
};
export const adminLogin = async ({ email, password }, res) => {
  try {
    res.clearCookie("token");

    console.log("Login attempt with email:", email);

    const user = await userModel.findOne({ email, isAdmin: true });
    if (!user) {
      console.log("Admin not found for:", email);
      throw new Error("Admin not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Invalid password for:", email);
      throw new Error("Invalid password");
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );

    res.cookie("token", token, { httpOnly: true });
    return { message: "Login successful", user, token };
  } catch (error) {
    throw error;
  }
};
