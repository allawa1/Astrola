import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../actions/searchAstro';

function useFetchImages() {
    const dispatch = useDispatch();
    const imgQuery = useSelector(state => state.imgQuery);


    useEffect(() => {
        dispatch(fetchImages(imgQuery));
    }, [imgQuery, dispatch]);
}

export default useFetchImages;