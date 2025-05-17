import express from "express";
import multer from "multer";
import blogModel from "../../models/blogs.model.js";

const router = express.Router();

// ⚙️ Configure storage for Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads"); // Ensure this folder exists!
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// GET add blog page
router.get("/add", (req, res) => {
  res.render("addBlogs.ejs");
});
router.get("/edit/:id", async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params.id);
    if (!blog) {
      return res.status(404).send("Blog not found");
    }
    res.render("editBlogs.ejs", { blog });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});
router.post("/edit/:id", upload.single("image"), async (req, res) => {
  try {
    const { title, content } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const updatedBlog = await blogModel.findById(req.params.id);
    if (!updatedBlog) {
      return res.status(404).send("Blog not found");
    }

    updatedBlog.title = title;
    updatedBlog.content = content;
    if (image) updatedBlog.image = image;

    await updatedBlog.save();
    res.redirect("/blogs");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to update blog");
  }
});
// DELETE blog

// DELETE /delete/:id
router.get("/delete/:id", async (req, res) => {
  try {
    const blog = await blogModel.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// POST blog with file upload
router.post("/add", upload.single("image"), async (req, res) => {
  const { title, content } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : "";

  try {
    const newBlog = new blogModel({
      title,
      content,
      image,
    });

    await newBlog.save();
    res.redirect("/blogs");
  } catch (error) {
    console.error(error);
    res.status(500).render("addBlogs.ejs", { error: "Failed to save blog" });
  }
});

router.get("/", async (req, res) => {
  try {
    const blogs = await blogModel.find();
    res.render("blogs.ejs", { blogs });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

export default router;
