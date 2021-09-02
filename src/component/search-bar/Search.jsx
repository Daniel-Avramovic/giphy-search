import React from 'react';
import "./search.css";

const Search = (props) => {
    return(
        <div className="container">
            <h1>Search Giphy</h1>
            <input type='text' placeholder='Search' />
        </div>
    )
}

export default Search;