import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useFetchImages from '../hooks/useFetchImages';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useAsync } from 'react-async';

function GameContainer(props) {
    const results = useSelector(state => state.images);
    const [image, setImage] = useState(results)
    useFetchImages();

    //  useEffect(() => {
    //     //console.log(props.astronomy.payload.data.payload)
    //     getResults()
    //     console.log(props.images.images)
    // })

    // const getResults = async ()=> {
    //         const results = await props.images.images
    //         console.log(results.links[0].href)
    //         setImage(results)
    // }


    //console.log(image)
    const { links, href, images } = props.image
    return (
        <div>
        <img src={links[0].href} width='200' height="300" />
        </div>
    )

    // return (
    //     <div>
    //     <img src={links[0].href} width='200' height="300" />
    // </div>
    // )
}

function mapStateToProps(state) {
    return { images: state.images };

}

export default connect(mapStateToProps)(GameContainer);