// MyForm.js
import React, { useState } from 'react';

const MyForm = ({ onJsonDataChange }) => {
  const [numberInput, setNumberInput] = useState('');

  const handleNumberInputChange = (event) => {
    const { value } = event.target;
    setNumberInput(value);
  };

  const handleSubmit = () => {
    // Assuming the input is a valid JSON object (for simplicity in this example)
    try {
      const jsonData = JSON.parse(numberInput);
      onJsonDataChange(jsonData);
    } catch (error) {
      console.error('Invalid JSON input:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold text-center mb-4">Omni Order Viewer</h1>
      <div className="max-w-md mx-auto border p-4 rounded-lg">
        <label htmlFor="numberInput" className="block mb-2"/>
        <input
          type="text"
          id="numberInput"
          name="numberInput"
          value={numberInput}
          onChange={handleNumberInputChange}
          placeholder="Enter Order Number"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
        />
        <div className="flex justify-center mt-4">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
