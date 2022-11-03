import React, { useState } from "react";


export default function SearchBar({ searchInput, setSearchInput }) {
  

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };


  return (
    <div>
      <input
        type="search"
        placeholder="Country name"
        onChange={handleChange}
        value={searchInput}
      />
    </div>
  );
}
