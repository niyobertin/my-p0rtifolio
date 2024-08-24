import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ServiceCartItemProps {
  _id: string;
  image: File | null | string;
  content: React.ReactNode;
}

const CartItem: React.FC<ServiceCartItemProps> = ({image, content }) => {
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
    <div className=" items-center h-[24rem] bg-[#1e1e1e] shadow-md rounded-lg">
      <img src={imageUrl} alt="Cart item" className="w-[100%] h-[60%] object-cover rounded-md mb-4 object-cover"/>
      <div className="flex-grow text-center text-fit ">
        {content}
      </div>
    </div>
  );
};

export default CartItem;