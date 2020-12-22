import React from 'react';
import { useSelector } from 'react-redux';
import { Image} from 'arwes';
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
                        <div style={{ margin: '0 auto', padding: 20, maxWidth: 600 }}>
                            <Image animate resources={item.links[0].href} width='100' height="200" id="image-result"></Image>
                            <span><h6 color="white"> {item.data[0].title}</h6></span>
                        </div>
                    );
                })}
        </div>
    );
}

export default Results;
