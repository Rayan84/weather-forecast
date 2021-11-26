import React from 'react';
import { useSelector } from 'react-redux';
import { city } from './Homepage';
import { Link } from 'react-router-dom';


const Homepage = () => {
  const forecast = useSelector((state) => state.details);
  console.log(forecast);
  console.log(forecast.data[0]);
  console.log(forecast.data[1]);
  console.log(city);

  
  



  return (
    <div>
      <Link to="/">←</Link>
      <h1>Weather Forcast</h1>
      <h1>{city}</h1>
      
      <p>{forecast.data[0]}</p>
      <p>{forecast.data[1]}</p>

    </div>
  )
}

export default Homepage;