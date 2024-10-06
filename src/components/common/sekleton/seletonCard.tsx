import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <div className="w-full h-[20rem] bg-gray-300 animate-pulse rounded-lg">
      <div className="w-full h-[60%] bg-gray-400 rounded-md mb-4"></div>
      <div className="h-4 bg-gray-400 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-400 rounded w-1/2"></div>
    </div>
  );
};

export default SkeletonCard;
