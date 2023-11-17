import React from "react";
import {useState} from "react";

export const SearchBar = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState('');


  const handleSearch = () => {
      onSearch(searchTerm)
  };

  //Searches when you press Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return(
        <>
             <div id="searchbar">
                    <input
                      type="text"
                      placeholder="Søk..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyPress={handleKeyPress}
                    />
                 <button onClick={handleSearch}><img src="/icons-search.svg" alt="S"/></button>
            </div>
        </>
    )
}

export default SearchBar