import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { queryChanged } from '../actions/query';
import Results from './searchResults'
import useFetchResults from '../hooks/useFetchResults';


const Search =() => {
    const initialQuery = useSelector(state => state.query);
    const [query, setQuery] = useState(initialQuery);
    const [debounceTimeout, setDebounceTimout] = useState();
    const dispatch = useDispatch();
    console.log(useFetchResults())

    const handleChange = event => {
        const value = event.target.value;

        setQuery(value);

        clearTimeout(debounceTimeout);

        const timeout = setTimeout(() => {
            dispatch(queryChanged(value));
        }, 3000);

        setDebounceTimout(timeout);
    };

    return ( 
        <div>
        <div className="search" >
        <input
            className="search-bar"
            placeholder="Search NASA's media API"
            value={query}
            onChange={handleChange}
        />
        </div>
            <Results/>

        </div>
    );
}

export default Search;