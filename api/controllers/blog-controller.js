import Blog from "../models/Blog.js";

export const getAllBlogs = async (req, res, next) => {
  let blogs;
  try {
    blogs = await Blog.find();
  } catch (error) {
    return console.log(error);
  }
  if (!blogs) {
    return res.status(404).json({ message: "No Blogs Found!" });
  }
  return res.status(200).json({ blogs });
};

//POST for create Blogs
export const createBlog = async (req, res, next) => {
  const { title, description, image, user } = req.body;

  const blog = new Blog({
    title,
    description,
    image,
    user,
  });

  try {
    await blog.save();
  } catch (error) {
    return console.log(error);
  }
  return res.status(200).json({ blog });
};

//PUT for updating Blog

export const updateBlog = async (req, res, next) => {
  const { title, description } = req.body;
  const blogId = req.params.id;
  let blog;

  try {
    blog = await Blog.findByIdAndUpdate(blogId, {
      title,
      description,
    });
  } catch (error) {
    return console.log(error);
  }
  if (!blog) {
    return res.status(500).json({ message: "Unable to Update Blog" });
  }
  return res.status(200).json({ blog });
};

//GET by Id

export const getById = async (req, res, next) => {
  const id = req.params.id;
  let blog;

  try {
    blog = await Blog.findById(id);
  } catch (error) {
    return console.log(error);
  }
  if (!blog) {
    return res.status(404).json({ message: "No Blog Found!" });
  }
  return res.status(200).json({ blog });
};

// DELETE by Id

export const deleteById = async (req, res, next) => {
  const blogId = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndDelete(blogId);
  } catch (error) {
    return console.log(error);
  }
  if (!blog) {
    return res.status(400).json({ message: "Unable To Delete" });
  }
  return res.status(200).json({ message: "Deleted Successfully!" });
};
