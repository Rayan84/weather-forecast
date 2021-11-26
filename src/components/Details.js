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

      <h1 className="text-align-center">Weather Forcast</h1>
      <div className="display-flex">
        <Link className="link" to="/">← Back</Link>
        <h3>{city}</h3>
      </div>      
      <p>{forecast.data[0]}</p>
      <p>{forecast.data[1]}</p>

    </div>
  )
}

export default Homepage;