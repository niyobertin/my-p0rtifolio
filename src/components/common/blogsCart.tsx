import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Spinner from './spinner';
interface ServiceCartItemProps {
  _id: string;
  image: File | string | null;
  title:string;
  content: React.ReactNode;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  isDeleting:boolean;
}

const BlogsCart: React.FC<ServiceCartItemProps> = ({ _id, image,title, content, onEdit, onDelete,isDeleting }) => {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  useEffect(() => {
    if (image instanceof File) {
      const objectUrl = URL.createObjectURL(image);
      setImageUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl); 
    } else {
      setImageUrl(image as string); 
    }
  }, [image]);
  return (
    <div className="relative w-full h-auto text-black mb-0 bg-white shadow-md rounded-lg p-4">
      <div className="h-[10rem] w-full">
        <img src={imageUrl} alt="Cart item" className="w-full h-full object-cover rounded-md mb-4" />
      </div>
      <div className="text-center text-fit">
        <h1 className='font-bold text-xl'>{title}</h1>
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
          {isDeleting ? <Spinner /> : <FaTrash className="text-white" />}
          
        </button>
      </div>
    </div>
  );
};

export default BlogsCart;
