import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFetchImages from '../hooks/useFetchImages';
import { imgQueryChanged } from '../actions/imgQuery';
import GameContainer from './gameContainer';

const Game = (props) => {
    

    const initialQuery = useSelector(state => state.imgQuery);
    const [imgQuery, setImgQuery] = useState(initialQuery);
    const [debounceTimeout, setDebounceTimout] = useState();
    const dispatch = useDispatch();
    
    const handleChange = (event) => {
        const spaceSearch = ["moon", "earth", "jupiter", "saturn", "pluto", "mars", "venus"];
        const randomSearch = spaceSearch[Math.floor(Math.random()*spaceSearch.length)]
        setImgQuery(randomSearch)
        console.log(imgQuery)
        clearTimeout(debounceTimeout);
        
        const timeout = setTimeout(() => {
            dispatch(imgQueryChanged(imgQuery));
        }, 500);
        setDebounceTimout(timeout);

    };
        
    
    useFetchImages()
    const results = useSelector(state => state.images);
    const [image, setImage] = useState(results)
    useEffect(() => {
        //console.log(props.astronomy.payload.data.payload)
        getResults()
        console.log(props.images.images)
    })

    const getResults = async ()=> {
            const results = await props.images.images
            console.log(results.links[0].href)
            setImage(results)
    }


    
    //console.log(data)

    return (
        <div>Game goes here
            <button value={imgQuery} onClick={handleChange}>Play game</button>
        <div>
            <GameContainer data={image}/>
        </div>
        </div>
    )
}
function mapStateToProps(state) {
    return { images: state.images};

}

export default connect(mapStateToProps)(Game);