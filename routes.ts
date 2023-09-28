import express from 'express';
import { createBlog, getBlogs, getBlog, updateBlog, deleteBlog } from './controller';

const router = express.Router();

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
