import React, { useEffect, useState } from 'react';
import BlogForm from '../components/addArtical';
import Layout from '../components/common/layout';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../api/store';
import { addBlog, updateBlog, fetchSingleBlog, fetchBlogs } from '../api/reducers/blogs';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const BlogPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams<{ id?: string }>(); 
  const blog = useSelector((state: RootState) => state.blogs.singleBlog); 
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (id) {
      dispatch(fetchSingleBlog(id));
    }
  }, [dispatch, id]);

  const handleBlogSubmit = async (title: string, image: File | null, content: string) => {
    setIsLoading(true);
    try {
      const blogData = { title, content, image };

      if (id) {
        const response = await dispatch(updateBlog({ id, updatedBlog: blogData }));
        //@ts-ignore
        toast.success(response.payload || 'Blog updated successfully');
      } else {
        const response = await dispatch(addBlog(blogData));
        //@ts-ignore
        toast.success(response.payload?.Message || 'Blog added successfully');
      }

      dispatch(fetchBlogs());
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Failed to save blog: ${error.message}`);
      } else {
        toast.error('An unexpected error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div>
        <h1 className="text-2xl font-bold mb-4">{id ? 'Edit Blog' : 'Create New Blog'}</h1>
        {!isLoading && (
          <BlogForm
            onSubmit={handleBlogSubmit}
            blog={id ? blog ?? undefined : undefined} // Pass blog data if updating
          />
        )}
        {isLoading && <p>Loading...</p>}
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default BlogPage;
