import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/astro';

function useFetchData() {
    const dispatch = useDispatch();
    const date = useSelector(state => state.date);


    useEffect(() => {
        dispatch(fetchData(date));
    }, [date, dispatch]);
}

export default useFetchData;