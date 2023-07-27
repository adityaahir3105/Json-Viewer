'use client'
import React from 'react';
import {JsonView,darkStyles, defaultStyles} from 'react-json-view-lite';

const JsonViewer = ({ jsonData }) => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">Order JSON</h2>
      <div className="max-w-md mx-auto border p-4 rounded-lg">
        <JsonView
          data={jsonData}
          shouldInitiallyExpand={(level) => true} style={defaultStyles}
        />
      </div>
    </div>
  );
};

export default JsonViewer;
