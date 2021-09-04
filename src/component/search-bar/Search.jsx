import React from 'react';
import "./search.css";

const Search = ({value, change, getValue}) => {
    return(
        <div className="container mb-5">
            <h1>Search Giphy</h1>
            <input type='text' placeholder='Search' value={value} onChange={change} onKeyDown={getValue} />
        </div>
    )
}

export default Search;