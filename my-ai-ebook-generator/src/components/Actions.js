import React from 'react';

const Actions = ({ onGenerate, onClear }) => {
  return (
    <div className="flex space-x-4 mb-4">
      <button
        className="w-full px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
        onClick={onGenerate}
      >
        Generate PDF
      </button>
      <button
        className="w-full px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
        onClick={onClear}
      >
        Clear
      </button>
    </div>
  );
};

export default Actions;
