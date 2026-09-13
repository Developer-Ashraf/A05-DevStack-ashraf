import React from 'react';
import type { ITechStack } from '../../types/StackType';

interface SelectedStackProps {
  cartStacks: ITechStack[];
  handleRemoveItem: (id: string | number) => void;
  handleRemoveAll: () => void;
}

const SelectedStack = ({
  cartStacks,
  handleRemoveItem,
  handleRemoveAll,
}: SelectedStackProps) => {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
      
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800">Your Stack</h3>
        <p className="text-sm text-gray-400 mt-1">
          {cartStacks.length} Technology Selected
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {cartStacks.length === 0 ? (
          <p className="text-xs text-gray-400 text-center py-6">
            No technology selected yet.
          </p>
        ) : (
          cartStacks.map((item, ind: number) => (
            <div
              key={ind}
              className="flex items-center justify-between p-3 border border-gray-100 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-6 h-6 object-contain"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-800">{item.name}</h4>
                  <p className="text-xs text-gray-400">{item.category}</p>
                </div>
              </div>

              
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-gray-400 hover:text-red-500 font-bold px-2 text-sm"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      {cartStacks.length > 0 && (
        <button
          onClick={handleRemoveAll}
          className="w-full mt-5 py-2 text-sm font-semibold text-red-500 border border-red-300 rounded-xl hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default SelectedStack;