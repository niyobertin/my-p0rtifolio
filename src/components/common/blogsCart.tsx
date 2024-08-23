import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface ServiceCartItemProps {
  _id: string;
  image: string;
  content: React.ReactNode;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const BlogsCart: React.FC<ServiceCartItemProps> = ({ _id, image, content, onEdit, onDelete }) => {
  return (
    <div className="relative w-full h-[20rem] text-white mb-0 bg-[#1e1e1e] shadow-md rounded-lg p-4">
      <img src={image} alt="Cart item" className="w-full h-[50%] object-cover rounded-md mb-4" />
      <div className="text-center text-fit">
        {content}
      </div>

      {/* Edit and Delete Icons */}
      <div className="absolute top-2 right-2 flex gap-2">
        <button
          onClick={() => onEdit(_id)}
          className="bg-yellow-300 p-2 rounded-full hover:bg-yellow-400"
        >
          <FaEdit className="text-black" />
        </button>
        <button
          onClick={() => onDelete(_id)}
          className="bg-red-500 p-2 rounded-full hover:bg-red-600"
        >
          <FaTrash className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default BlogsCart;
