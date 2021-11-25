import React from 'react';
import cities from 'cities.json';
import { countries } from 'countries-list';


const Homepage = () => {
  // const keys = Object.entries(cities);
  // console.log(keys);
  // console.log(cities);
  let flags = [];
  let arr = [];
  console.log(cities.length);
  for (let i = 0; i < cities.length; i++){
    if(cities[i].name === 'Paris' && cities[i].country === 'FR'){
      arr.push(cities[i].lat);
      arr.push(cities[i].lng);
    }
  }

  for (let i = 0; i < countries.length; i++){
    flags.push(countries[i]);
  }

  console.log(countries);
  console.log(Object.entries(countries)[21][1].emoji);
  // console.log(flags);
  console.log('Finished');

  return (
    <div>
      
      <select className="select">
        {Object.entries(countries).map((country) => {
          return (
           <option key={country[0]}>{country[1].emoji}{' '}{country[1].name}</option>
          )
        })}
      </select>
      <h1>This is the Homepage</h1>
    </div>
  )
}

export default Homepage;