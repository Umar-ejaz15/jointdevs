import { adminLogin, adminRegister } from "../services/user.service.js";
import userModel from "../models/user.model.js";
export const registerUser = async (req, res) => {
  try {
    const result = await adminRegister(req.body);
    res.status(201).json({ message: "Admin registered", user: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    res.clearCookie("token");
    const result = await adminLogin(req.body, res);
    const { email,password } = req.body
    const user = await userModel.findOne({ email, isAdmin: true });


    // Correct form submission check
    if (req.is("application/x-www-form-urlencoded")) {
      return res.redirect("/dashboard"); // for EJS form
    }

    // For API request (JSON)
    res.status(200).json(result);

  } catch (error) {
    // Log full request to debug
    console.log("Login Error:", error.message);
    console.log("Request body:", req.body);

    // If form submission (EJS)
    if (req.is("application/x-www-form-urlencoded")) {
      return res.render("login.ejs", { error: error.message });
    }
    console.log("Request body:", req.body);


    // For API error
    res.status(400).json({ error: error.message });
  }
};
