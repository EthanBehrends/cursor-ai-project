import { Request, Response } from 'express';
import Blog from './model';

// Create a new blog post
export const createBlog = async (req: Request, res: Response) => {
  const newBlog = new Blog(req.body);

  try {
    const blog = await newBlog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ message: "error" });
  }
};

// Get all blog posts
export const getBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: "error" });
  }
};

// Get a single blog post
export const getBlog = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    if (blog) {
      res.status(200).json(blog);
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (err) {
    res.status(500).json({ message: "error" });
  }
};

// Update a blog post
export const updateBlog = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedBlog = req.body;
  try {
    const blog = await Blog.findByIdAndUpdate(id, updatedBlog, { new: true });
    res.status(200).json(blog);
  } catch (err) {
    res.status(400).json({ message: "error" });
  }
};

// Delete a blog post
export const deleteBlog = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findByIdAndRemove(id);
    res.status(200).json({ message: 'Blog deleted' });
  } catch (err) {
    res.status(500).json({ message: "error" });
  }
};
