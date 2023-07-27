'use client'
import React, { useState, useEffect } from 'react';
import SearchableReactJson from 'searchable-react-json-view';

const JsonViewer = ({ jsonData }) => {
  const [searchText, setSearchText] = React.useState("");

  return (
    <div>
      <div className="mb-4">
        <input
          className="searchTerm text-black" // Added text-black class to change the text color
          placeholder="Search for a term"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <SearchableReactJson theme="monokai" highlightSearch={searchText} src={jsonData} searchable />
    </div>
  );
};

export default JsonViewer;
