// pages/index.js
import React, { useState } from 'react';
import MyForm from '../components/MyForm';
import JsonViewer from '../components/JsonViewer';

const HomePage = () => {
  const [jsonData, setJsonData] = useState(null);

  const handleJsonDataChange = (data) => {
    setJsonData(data);
  };

  return (
    <div>
      <MyForm onJsonDataChange={handleJsonDataChange} />
      {jsonData && <JsonViewer jsonData={jsonData} />}
    </div>
  );
};

export default HomePage;
