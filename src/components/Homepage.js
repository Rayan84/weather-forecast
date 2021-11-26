import React from 'react';
import { useState } from 'react';
import cities from 'cities.json';
import { countries } from 'countries-list';
import citiesIndexes from './citiesIndexes';
import { useDispatch } from 'react-redux';
import { fetchCityForecast } from '../Redux/details/details';
import { Link } from 'react-router-dom';

export let city = 'Please select a city first';
const Homepage = () => {
  const dispatch = useDispatch();
  const [countryCode, setCountryCode] = useState({
    countryCode: 'AD',
  });
  
  const changeHandler = (string, name) => {
    let coordinates = string.split(',');
    dispatch(fetchCityForecast(coordinates[0], coordinates[1]));
    console.log('=========');
    city = coordinates[2];
  }
  const filteredCities = [];
  const filterCities = (a, b) => { 
    for (let i = a; i < b; i++) {
     filteredCities.push(Object.entries(cities)[i])
   }
  }
  for (let i = 0; i < citiesIndexes.length; i++) {
    if (Object.values(countryCode)[0] === citiesIndexes[i].cd) {
      if(citiesIndexes[i].end > 100){
        filterCities(citiesIndexes[i].start, citiesIndexes[i].start + 100);
      }else {
        filterCities(citiesIndexes[i].start, citiesIndexes[i].end);
      }    
    }
  };
  return (
    <div className="width-100-percent text-align-center">
      <h1 className="text-align-center">Weather Forcast</h1>
      <p className="text-align-center">Select your area:</p>
      <select className="select" onChange={ (e) => { setCountryCode({contryCode: e.target.value}) }}>
        {Object.entries(countries).map((country) => {
          return (
           <option key={country[0]} value={country[0]}>{country[1].emoji}{' '}{country[1].name}</option>
          )
        })}
      </select>
      <select className="select" name="" id="" onChange={ (e) => {changeHandler(e.target.value)}}>
          <option defaultValue="Choose City">Choose City</option>
        {filteredCities.map((city) => {
          return(
          <option key={city[1].name} value={[city[1].lat, city[1].lng, city[1].name]}>{city[1].name}</option>
          )
        })}
      </select>
      <Link class="link" to="/details">Go</Link>
      <div className="table-section width-100-percent">
        <div className="square">
          <h4>London</h4>
        </div>
        <div className="square">
          <h4>London</h4>
        </div>
      </div>
      <div className="table-section width-100-percent">
        <div className="square">
          <h4>London</h4>
        </div>
        <div className="square">
          <h4>London</h4>
        </div>

      </div>
    </div>
  )
}
export default Homepage;