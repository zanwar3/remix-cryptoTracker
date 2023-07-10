import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="join">
      <div>
        <div>
          <input
            className="input input-bordered join-item"
            placeholder="Search..."
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="indicator">
        <button className="btn join-item" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
