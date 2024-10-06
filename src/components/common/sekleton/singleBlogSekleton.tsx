import React from 'react';

const SkeletonSingleBlog: React.FC = () => {
  return (
    <div className="sm:w-[90%] w-full h-[20rem]  rounded-lg">
      <div className="w-full h-[60%] bg-gray-400 rounded-md mb-4"></div>
      <div className="h-4 bg-gray-400 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-400 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-400 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-400 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-400 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-400 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-400 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-400 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-400 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-400 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-400 rounded w-full mb-2"></div>
    </div>
  );
};

export default SkeletonSingleBlog;