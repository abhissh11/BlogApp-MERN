import express from "express";
import {
  createBlog,
  deleteById,
  getAllBlogs,
  getById,
  updateBlog,
} from "../controllers/blog-controller.js";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/create", createBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getById);
blogRouter.delete("/:id", deleteById);

export default blogRouter;
