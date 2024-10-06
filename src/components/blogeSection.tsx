import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../api/store';
import { fetchBlogs, fetchSingleBlog } from '../api/reducers/blogs';
import CartItem from './common/cart';
import SkeletonCard from './common/sekleton/seletonCard';
import { useNavigate } from 'react-router-dom';

const BlogsSection: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { blogs, status } = useSelector((state: RootState) => state.blogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(4);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBlogs());
    }
  }, [status, dispatch]);
  const totalPages = Math.ceil(blogs.length / cardsPerPage);
  const currentBlogs = blogs.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );
  const handleClick = (id: string) => {
    navigate(`/blogs/${id}`);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const handleCardsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCardsPerPage(Number(e.target.value));
    setCurrentPage(1); 
  };

  

  // Strip HTML tags from blog content
  const stripHtmlTags = (html: string): string => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  // Truncate blog content
  const truncateText = (text: string, length: number): string => {
    if (text.length <= length) {
      return text;
    }
    return text.substring(0, length) + '...';
  };

  return (
    <div className="text-white w-[100vw] top-20 z-30 relative overflow-auto pt-10">
      <div className='overflow-auto ml-[4%] mr-[4%]'>
        <h1 className='flex items-center text-black font-bold text-xl justify-center pb-4' id='blogs'>BLOGS</h1>
        
        {/* Loading Skeleton */}
        {status === 'loading' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Display 4 skeleton cards per page */}
            {Array(cardsPerPage).fill(0).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <>
           
            {/* Grid Layout for Blogs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentBlogs.map((item, index) => (
                <div key={index} className="cursor-pointer" >
                  <CartItem
                    _id={item._id}
                    image={item.image}
                    title={stripHtmlTags(item.title)}
                    content={truncateText(stripHtmlTags(item.content), 200)}
                    onClick={() => handleClick(item._id)}
                  />
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-6">
              <button
                onClick={handlePrevPage}
                className={`px-4 py-2 bg-black text-white rounded-lg mr-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="mx-2">{`Page ${currentPage} of ${totalPages}`}</span>
              <button
                onClick={handleNextPage}
                className={`px-4 py-2 bg-black text-white rounded-lg ml-2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={currentPage === totalPages}
              >
                Next
              </button>

              {/* Select Number of Cards Per Page */}
            <div className="flex justify-end justify-center items-center">
              <label className="mr-2 tex-black">Cards per page:</label>
              <select 
                value={cardsPerPage} 
                onChange={handleCardsPerPageChange} 
                className="bg-gray-700 text-white p-2 rounded">
                <option value={4}>4</option>
                <option value={8}>8</option>
                <option value={12}>12</option>
              </select>
            </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogsSection;
