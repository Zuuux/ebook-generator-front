import React from 'react';

const PromptInput = ({ prompt, setPrompt }) => {
  return (
    <textarea
      className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      rows="5"
      placeholder="Enter your prompt here..."
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
    />
  );
};

export default PromptInput;
