import express from 'express';
import { createBlog, getBlogs, getBlog, updateBlog, deleteBlog } from './controller.ts';

const router = express.Router();

// Middleware that logs requests
router.use((req, _res, next) => {
  console.log(`${req.method} request received at ${req.url}`);
  next();
});

// Create a new blog post
router.post('/', createBlog);

// Get all blog posts
router.get('/', getBlogs);

// Get a specific blog post
router.get('/:id', getBlog);

// Update a blog post
router.put('/:id', updateBlog);

// Delete a blog post
router.delete('/:id', deleteBlog);

export default router;

