import { connect } from 'react-redux';
import { dateChanged } from '../actions/date';
import { useState, useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';
import AstronomyCard from './AstronomyCard'


const Landing = (props)=> {

    const [data, setData] = useState({})
    useEffect(() => {
        //console.log(props.astronomy.payload.data.payload)
        getResults()
        
    })

    const getResults = async ()=> {
        const results = await props.dataReducer.data
        console.log(results)
        setData(results)
    }

    const initialDate = useSelector(state => state.date);
    const [date, setDate] = useState(initialDate);
    const [debounceTimeout, setDebounceTimout] = useState();
    const dispatch = useDispatch();
    const handleChange = (event) => {
        const value = event.target.value;

        setDate(value);
        console.log(value)
        clearTimeout(debounceTimeout);

        const timeout = setTimeout(() => {
            dispatch(dateChanged(value));
        }, 500);

        setDebounceTimout(timeout);
    };

    return (
        <div className="inputDate">
            <h3 id="tooltip">Select a date:</h3>
            <input
                type="date"
                value={date}
                onChange={handleChange}
            />
            <div className="pic_otd">

                <AstronomyCard data={data}/>
            </div>
        </div>
    )
}


function mapStateToProps(state) {
    return { dataReducer: state.dataReducer};

}

export default connect(mapStateToProps)(Landing);

// export default Landing;