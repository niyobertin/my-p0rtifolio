import React from 'react';

interface ServiceCartItemProps {
  image: string;
  content: React.ReactNode;
}

const CartItem: React.FC<ServiceCartItemProps> = ({ image, content }) => {
  return (
    <div className=" items-center h-[24rem] bg-[#1e1e1e] shadow-md rounded-lg">
      <img src={image} alt="Cart item" className="w-[100%] h-[60%] object-cover rounded-md mb-4 object-cover"/>
      <div className="flex-grow text-center text-fit ">
        {content}
      </div>
    </div>
  );
};

export default CartItem;