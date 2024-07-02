import React from 'react';

const Console = ({ logs }) => {
  return (
    <div className="mt-6 flex-grow">
      <h2 className="text-xl font-bold mb-2">Console</h2>
      <div className="p-4 bg-gray-100 text-gray-800 rounded-lg h-64 overflow-y-auto border border-gray-300">
        {logs.map((log, index) => (
          <p key={index}>{log}</p>
        ))}
      </div>
    </div>
  );
};

export default Console;
