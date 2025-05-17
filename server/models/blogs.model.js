import mongoose from "mongoose";
const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },

  image: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  
});
const Blogs = mongoose.model("Blog", BlogSchema);
export default Blogs;
