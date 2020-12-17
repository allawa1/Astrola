import React from 'react';
import AstronomyCard from './AstronomyCard';
import { connect } from 'react-redux';
// import {fetchData} from '../actions/astro';
// import { queryChanged } from '../actions/query';
// import { useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios'; 

const AstronomyContainer = ()=> {
    // const initialQuery = useSelector(state => state.query);
    // const [query, setQuery] = useState(initialQuery);
    // const [debounceTimeout, setDebounceTimout] = useState();
    // const dispatch = useDispatch();



    //const [data, setData] = useState({})
    // useEffect(() => {
    //     //console.log(props.astronomy.payload.data.payload)
    //     getResults()
    //     console.log(props.astronomy.payload)
    // })

    // const getResults = async ()=> {
    //     const results = await props.astronomy.payload.data.payload
    //     console.log(results.data)
    //     setData(results.data)
    // }


        return (
                <AstronomyCard /> 
        )

}

// connect react with redux
// @param mapStateToProps (required)
// @param mapDispatchToProps (optional)

function mapStateToProps(state) {
    return { dataReducer: state.dataReducer};

}

export default connect(mapStateToProps)(AstronomyContainer);

//export default AstronomyContainer;