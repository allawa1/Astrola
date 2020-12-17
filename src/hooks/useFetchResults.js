import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResults } from '../actions/searchAstro';

function useFetchResults() {
    const dispatch = useDispatch();
    const query = useSelector(state => state.query);


    useEffect(() => {
        dispatch(fetchResults(query));
    }, [query, dispatch]);
}

export default useFetchResults;