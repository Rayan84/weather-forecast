import React from 'react';
import { useState } from 'react';
import cities from 'cities.json';
import { countries } from 'countries-list';
import citiesIndexes from './citiesIndexes';
import { useDispatch } from 'react-redux';
import { fetchCityForecast } from '../Redux/details/details';
import { Link } from 'react-router-dom';

export let city = 'city';
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
    // console.log(coordinates);
  }

  const exportCityName = (name) => {
    console.log('export city name called...');
    console.log(city);
    city = name;
  }

  const filteredCities = [];
  
  //const citiesEntries = Object.entries(cities);
  // console.log(Object.values(countryCode)[0]);
  // console.log(Object.values(countryCode));
  const filterCities = (a, b) => { 
  //  console.log('filtering....');
    for (let i = a; i < b; i++) {
  //    console.log(citiesEntries);
    //   filteredCities++;
     filteredCities.push(Object.entries(cities)[i])
   //  console.log(filteredCities);
  
      
   }
  //  console.log(filteredCities);

  }

// console.log(cities);
  // console.log('Finished');
 //  console.log(filteredCities);
  // console.log(citiesIndexes);
  // console.log(citiesIndexes[0].cd);
  for (let i = 0; i < citiesIndexes.length; i++) {
    if (Object.values(countryCode)[0] === citiesIndexes[i].cd) {
      // console.log('=======');
      // console.log(i);
      // console.log(Object.values(countryCode)[0]);
      // console.log(citiesIndexes[i].cd);
      // console.log(citiesIndexes[i].start);
      // console.log(citiesIndexes[i].end);
      if(citiesIndexes[i].end > 100){
        filterCities(citiesIndexes[i].start, citiesIndexes[i].start + 100);
      }else {
        filterCities(citiesIndexes[i].start, citiesIndexes[i].end);
      }    
     
    }
  };


  return (
    <div>
      <h1>Weather Forcast</h1>
      <p>Select your area:</p>
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
      <Link to="/details">Go</Link>
    </div>
  )
}
export default Homepage;