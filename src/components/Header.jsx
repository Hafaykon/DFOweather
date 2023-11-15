import React from "react";
import SearchBar from "./SearchBar";
import "../style/global.css";
import "../style/Header.css";


export const Header = (searchTerm) => {
    return(
        <>
            <div className="header-container">
                <div className="header-content-container">
                    <img src="/dfologo_small.png" alt="h"/>
                    <h1>Været for DFØ</h1>
                    <SearchBar />
            </div>
            </div>
        </>
    )
}
