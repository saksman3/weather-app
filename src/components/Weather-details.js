import React from 'react';

const WeatherDetails = (props)=>{
    return (
        <div className="weather_details">              
             {props.city && props.country && <h3>{props.city} - {props.country} Weather details</h3>}
             {props.data.temp && <p>Temperature : {props.data.temp}</p>}
             {props.data.humidity && <p>Humidity : {props.data.humidity}</p>}
             {props.data.pressure && <p>Pressure: {props.data.pressure}</p>}
             {props.description && <p>Conditions : { props.description}</p>}
             {props.error&&<p>{props.error}</p>}
        </div>
     );
}
export default WeatherDetails;
