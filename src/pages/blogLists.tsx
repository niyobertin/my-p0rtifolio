import React, { useState, useEffect } from 'react';
import Layout from "../components/common/layout";
import BlogsCart from "../components/common/blogsCart";
import { AppDispatch, RootState } from "../api/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../api/reducers/blogs";
import Spinner from '../components/common/spinner';

const BlogsList = () => {
  const dispatch: AppDispatch = useDispatch();
  const { blogs, status, error } = useSelector((state: RootState) => state.blogs);

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4; 

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBlogs());
    }
  }, [status, dispatch]);

  const stripHtmlTags = (html: string): string => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const truncateText = (text: string, length: number): string => {
    if (text.length <= length) {
      return text;
    }
    return text.substring(0, length) + '...';
  };

  // Get current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <div>
        {status === 'loading' ? <Spinner/> :
          <div className="p-2 grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentBlogs.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              <BlogsCart 
                _id={item._id} 
                image={item.image} 
                content={truncateText(stripHtmlTags(item.content), 200)} 
                onEdit={() => console.log("Edit function not implemented.")} 
                onDelete={() => console.log("Delete function not implemented.")} 
              />
            </div>
          ))}
        </div> }
    
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <nav>
          <ul className="inline-flex space-x-2">
            {Array.from({ length: Math.ceil(blogs.length / blogsPerPage) }, (_, index) => (
              <li key={index} className={`px-3 py-2 cursor-pointer rounded ${index + 1 === currentPage ? 'bg-yellow-300' : 'bg-gray-200'}`} onClick={() => paginate(index + 1)}>
                {index + 1}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Layout>
  );
};

export default BlogsList;
