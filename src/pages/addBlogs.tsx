import React from 'react';
import BlogForm from '../components/addArtical';
import Layout from '../components/common/layout';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../api/store';
import { addBlog, fetchBlogs } from '../api/reducers/blogs';
import { ToastContainer,toast } from 'react-toastify';

const NewBlogPage = () => {
    const dispatch:AppDispatch = useDispatch();
  const handleBlogSubmit = async (title: string, image: File | null, content: string) => {
    try {
        const newBlog = { title, image, content };
        const response = await dispatch(addBlog(newBlog));
        //@ts-ignore
        toast.success(response.payload?.Message || 'Blog added successfully');
        dispatch(fetchBlogs());
      } catch (error) {
        if (error instanceof Error) {
          toast.error(`Failed to add blog: ${error.message}`);
        } else {
          toast.error('An unexpected error occurred');
        }
      }
  };

  return (
    <Layout>
        <div>
      <h1 className="text-2xl font-bold mb-4">Create New Blog</h1>
      <BlogForm onSubmit={handleBlogSubmit} />
    </div>
    <ToastContainer/>
    </Layout>
  );
};

export default NewBlogPage;
