import React from 'react';
import useFetchData from '../hooks/useFetchData';


const AstronomyCard = (props) => {

    useFetchData();
    //console.log(dataReducer)
    const { title, media_type , hdurl, url, explanation, date, copyright} = props.data;

    return (
        <div className='astronomy-card'>
            <div className="potd">
            <h3 className='astronomy-title'>{title}</h3>
            <a href={hdurl} className='astronomy-image-wrapper'>
                {media_type === "image" ? (
                    
                    
                    <img id="potd_img"
                        src={url}
                        alt={title}
                        className="photo"
                    />        
                    
                    
                ) : (
                        <iframe
                            title="space-video"
                            src={url}
                            width="700"
                            height="400"
                            frameBorder="0"
                            gesture="media"
                            allow="encrypted-media"
                            allowFullScreen
                            className="photo"
                        />
                        
                )}
                </a> 
            <p>{explanation}</p>
            <span>{date} <br/>{copyright} </span>
            </div>
            
        {/* })} */}
</div>
);
}

// function mapStateToProps(state) {
//     return { dataReducer: state.dataReducer};

// }

// export default connect(mapStateToProps)(AstronomyCard);

export default AstronomyCard;