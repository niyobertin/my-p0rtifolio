import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../api/store';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import { fetchBlogs } from '../api/reducers/blogs';
import CartItem from './common/cart';
import Spinner from './common/spinner';
const BlogsSection: React.FC  = () =>{
    const dispatch: AppDispatch = useDispatch();
    const { blogs, status, error } = useSelector((state: RootState) => state.blogs);
    useEffect(() => {
        if (status === 'idle') {
          dispatch(fetchBlogs());
        }
      }, [status, dispatch]);
const [currentIndex, setCurrentIndex] = useState(0);

const handlePrev = () => {
  setCurrentIndex((prevIndex) => (prevIndex === 0 ? blogs.length - 1 : prevIndex - 1));
};

const handleNext = () => {
  setCurrentIndex((prevIndex) => (prevIndex === blogs.length - 1 ? 0 : prevIndex + 1));
};



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

    return(
    <div className="text-white w-[100vw] top-20 z-30 relative overflow-auto pt-10">
        <div className='overflow-auto ml-[4%] mr-[4%]'>
          <h1 className='flex items-center text-yellow-300 font-bold text-xl justify-center pb-4' id='blogs'>BLOGS</h1>
          {status ==='loading' ? (
            <div className='flex items-center justify-center'><Spinner/>Loading ...</div>
          ) : (
       <div className="overflow-hidden ">
        <div
          className="sm:flex hidden transition-transform duration-300 gap-4"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {blogs.map((item, index) => (
            <div key={index} className="w-1/3 flex-shrink-0">
              <CartItem image={item.image} content={truncateText(stripHtmlTags(item.content), 200)} />
            </div>
          ))}
        </div>
      </div>
        )}
        </div>
        <button
        className="absolute top-1/2 left-16 transform -translate-y-1/2 bg-black  px-4 py-4 rounded-full sm:flex hidden"
        onClick={handlePrev}
      >
        <FaChevronLeft  className="text-white" />
      </button>
      <button
        className="absolute top-1/2 right-16 transform -translate-y-1/2 bg-black px-4 py-4 rounded-full sm:flex hidden"
        onClick={handleNext}
      >
        <FaChevronRight  className="text-white" />
      </button>
      
      {/* Mobile View */}
     <div className="lg:hidden">
     <div className="flex flex-col ">
        {blogs.map((item, index) => (
          <div key={index} className="mb-3 p-2">
            <CartItem image={item.image} content={truncateText(stripHtmlTags(item.content), 200)} />
          </div>
        ))}
      </div>
     </div>
    </div>
)};

export default BlogsSection;