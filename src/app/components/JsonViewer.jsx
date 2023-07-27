'use client'
import React from 'react';
import {JsonView,darkStyles, defaultStyles} from 'react-json-view-lite';
import { JSONTree } from 'react-json-tree';


const JsonViewer = ({ jsonData }) => {
  
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">Order JSON</h2>
      <div className="max-w-md mx-auto border p-4 rounded-lg">
        <JSONTree
          data={jsonData}
          shouldInitiallyExpand={(level) => true} 
          style={darkStyles}
        />
      </div>
    </div>
  );
};

export default JsonViewer;
