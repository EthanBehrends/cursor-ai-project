import { Request, Response } from 'express';
import Blog from './model';

// Create a new blog post
export const createBlog = async (req: Request, res: Response) => {
  const newBlog = new Blog(req.body);

  try {
    const blog = await newBlog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get