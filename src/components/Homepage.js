import React from 'react';
import { useState } from 'react';
import cities from 'cities.json';
import { countries } from 'countries-list';
import citiesIndexes from './citiesIndexes';


const Homepage = () => {
  // const keys = Object.entries(cities);
  // console.log(keys);
  // console.log(cities);
  const [countryCode, setCountryCode] = useState({
    countryCode: 'AD',
  });
  
  const fetchForecast = (arr) => {
    console.log(arr);
  }
//  // const setCountry = (event) => {
//     location.country = event.target.value;
//   };

  // const location = {
  //   countryCode: '',
  //   city: '',
  // }

 /// console.log(Object.entries(cities)[0][1].country);

  // for(let i = 0; i < cities.length; i++) {
  //   if
  // }
  const filteredCities = [];
  
  //const citiesEntries = Object.entries(cities);
  console.log(Object.values(countryCode)[0]);
  // console.log(Object.values(countryCode));
  const filterCities = (a, b) => { 
   console.log('filtering....');
    for (let i = a; i < b; i++) {
  //    console.log(citiesEntries);
    //   filteredCities++;
     filteredCities.push(Object.entries(cities)[i])
   //  console.log(filteredCities);
  
      
   }
   console.log(filteredCities);

  }

console.log(cities);
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


      
     filterCities(citiesIndexes[i].start, citiesIndexes[i].end);
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
      <select className="select" name="" id="" onChange={ (e) => {fetchForecast(e.target.value)}}>
        {filteredCities.map((city) => {
          return(
          <option key={[city[1].lat, city[1].lng]} value={[city[1].lat, city[1].lng]}>{city[1].name}</option>
          )
        })}
      </select>
    </div>
  )
}

export default Homepage;