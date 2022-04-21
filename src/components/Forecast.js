import React, { useState } from 'react';
import Conditions from './Conditions';
import classes from '../Forecast.module.css';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    const uriEncodedCity = encodeURIComponent(city);
    const appid = process.env.REACT_APP_API_KEY

    function getForecast(e) {
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${city}&units=imperial&appid=` + appid)
        .then(response => response.json())
        .then(response => {
            setResponseObj(response)
        })
    }

    return (
        <div>
            <h2>Find Current Floor Conditions</h2>
            <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter floor zip code"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className={classes.textInput}
                    />
                <button className={classes.Button} type="submit">Get Forecast</button>
                <div className={classes.circle}></div>
            </form>
            <Conditions
                responseObj={responseObj}
                />
        </div>
    )
}

export default Forecast;