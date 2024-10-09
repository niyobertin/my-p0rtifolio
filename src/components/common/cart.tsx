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
    <div className="relative text-black shadow-md rounded-lg p-4 flex flex-col justify-between h-auto">
      {/* Image */}
      <img src={imageUrl} alt="Cart item" className="w-full h-36 object-container rounded-md mb-4" onClick={onClick} />

      {/* Content */}
      <div className="flex-grow text-center text-fit">
        <h1 className='font-bold text-xl' onClick={onClick}>{title}</h1>
         <p onClick={onClick}> {content}</p>
      </div>
    </div>
  );
};

export default CartItem;
