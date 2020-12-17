import React from 'react';
import { useSelector } from 'react-redux';

import useFetchResults from '../hooks/useFetchResults';

function Results() {
    const results = useSelector(state => state.results);
    useFetchResults();
    //console.log(results)
    console.log(useFetchResults)


    return (
        <div className="search-results">
            {results.items &&
                results.items.map(item => {
                    return (
                        <div className="image-card">
                            <h6 color="white"> {item.data[0].title}</h6>
                            <img src={item.links[0].href} width='200' height="300" />
                        </div>
                    );
                })}
        </div>
    );
}

export default Results;
