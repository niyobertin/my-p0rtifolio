import React, { useEffect, useState } from 'react';

interface ServiceCartItemProps {
  _id: string;
  image: File | null | string;
  title:string;
  content: React.ReactNode;
  onClick?: () => void;
}

const CartItem: React.FC<ServiceCartItemProps> = ({ image,title, content,onClick}) => {
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
    <div className="relative bg-white text-black shadow-lg rounded-lg p-4 flex flex-col justify-between h-auto hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      {/* Image */}
      <div className="h-48 w-full flex items-center justify-center rounded-md overflow-hidden">
        <img 
          src={imageUrl} 
          alt="Cart item" 
          className="w-full h-full object-cover" 
          onClick={onClick} 
        />
      </div>
  
      {/* Content */}
      <div className="flex-grow text-center mt-4">
        <h1 className="font-bold text-lg text-gray-800 hover:text-blue-600 cursor-pointer transition-colors duration-300" onClick={onClick}>
          {title}
        </h1>
        <p className="mt-2 text-gray-600 cursor-pointer hover:text-blue-500" onClick={onClick}>
          {content}
        </p>
      </div>
    </div>
  );
  
};

export default CartItem;
