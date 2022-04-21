import React from 'react';



const Conditions = (props) => {
    return (
        <div>
            {props.responseObj.cod === 200 ?
                <div>
                    <p><strong>{props.responseObj.name}</strong></p>
                    <p>Currently {Math.round(props.responseObj.main.temp)} °F out with {props.responseObj.weather[0].description}.</p>
                    <p>Hi {props.responseObj.main.temp_max} | Lo {props.responseObj.main.temp_min}</p>
                    <p>Feels like {props.responseObj.main.feels_like}°F</p>
                    <p>Humidity {props.responseObj.main.humidity}%</p>
                </div>
            : null
            }
        </div>
    )
}
export default Conditions;