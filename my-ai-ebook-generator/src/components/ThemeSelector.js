import React from 'react';

const ThemeSelector = ({ onThemeChange }) => {
  return (
    <div className="flex justify-center space-x-4 mb-6">
      <button
        className="px-6 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition"
        onClick={() => onThemeChange('light')}
      >
        Light Theme
      </button>
      <button
        className="px-6 py-2 bg-gray-700 text-white rounded-full shadow hover:bg-gray-800 transition"
        onClick={() => onThemeChange('dark')}
      >
        Dark Theme
      </button>
    </div>
  );
};

export default ThemeSelector;
