import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ServiceCartItemProps {
  contentNumber: number;
  content: React.ReactNode;
}

const DashboardCartItem: React.FC<ServiceCartItemProps> = ({contentNumber, content }) => {
  return (
    <div className=" flex items-center justify-center h-[6rem] w-full sm:w-[10rem] bg-white shadow-md rounded-lg mb-4">
      <div className="flex-grow text-fit p-2">
        {content}
      </div>
      <h1 className='p-4 font-bold'>{contentNumber}</h1>
    </div>
  );
};

export default DashboardCartItem;