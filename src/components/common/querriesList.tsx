import React from 'react';

interface Item {
  _id: string;
  visitor: string;
  message: string;
}

interface ItemListProps {
  items: Item[];
  onDelete: (id: string) => void;
  loading: boolean;
}

const ItemList: React.FC<ItemListProps> = ({ items, onDelete, loading }) => {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item._id} className="rounded-md text-black">
          <h3 className="text-lg font-bold">{item.visitor}</h3>
          <p className="text-sm">{item.message}</p>
          {loading ? (
            <div className="mt-2 bg-gray-400 text-white px-4 py-2 rounded-md">Loading...</div>
          ) : (
            <button
              onClick={() => onDelete(item._id)}
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Delete
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
