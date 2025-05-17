import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/db-connection.js";
import userRoutes from "./routes/userRoutes/user.routes.js";
import blogsRoutes from "./routes/blogsRoutes/blogs.routes.js";
import adminMiddleware from "./middlewares/adminMiddleware.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const SERVER = process.env.PORT;
console.log(process.env.PORT);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(cookieParser());

app.use("/api/v1/user", userRoutes);
app.use("/blogs", adminMiddleware, blogsRoutes);

app.get("/dashboard", adminMiddleware, async (req, res) => {
  try {
    // ✅ Ensure blogs is always an array
    res.render("dashboard");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/", (req, res) => {
  res.render("login.ejs");
});
app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.listen(SERVER, () => {
  dbConnection();

  console.log("listening on port ", SERVER);
});
