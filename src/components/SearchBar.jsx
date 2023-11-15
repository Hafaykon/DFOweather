import React from "react";
import {useState} from "react";
import { useNavigate } from 'react-router-dom';


export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();


  const handleSearch = () => {
    navigate('/location', { state: { searchTerm: searchTerm } });
  };

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
                    /><button onClick={handleSearch}><img src="/icons-search.svg" alt="S"/></button>
            </div>
        </>
    )
}

export default SearchBar