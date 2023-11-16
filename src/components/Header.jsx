import React from "react";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";
import "../style/global.css";
import "../style/Header.css";


export const Header = ({ onSearch }) => {
    return(
        <>
            <div className="header-container">
                <div className="header-content-container">
                    <Link to="/">
                        <img id="dfo-logo" src="/dfologo1_sort_rgb_small.png" alt=""/>
                    </Link>
                    <h1>Været for DFØ</h1>
                    <SearchBar onSearch={onSearch}/>
                </div>
            </div>
        </>
    )
}
