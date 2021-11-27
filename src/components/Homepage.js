import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cities from 'cities.json';
import { countries } from 'countries-list';
import { Link } from 'react-router-dom';
import citiesIndexes from './citiesIndexes';
import { fetchCityForecast } from '../Redux/details/details';

const Homepage = () => {
  const dispatch = useDispatch();
  const returnedData = useSelector((state) => state.homepage);
  const sixCities = returnedData.data;
  const [countryCode, setCountryCode] = useState({
    countryCode: 'AD',
  });

  const changeHandler = (string) => {
    const coordinates = string.split(',');
    const [lat, lng, cityName] = coordinates;
    dispatch(fetchCityForecast(lat, lng, cityName));
  };
  const filteredCities = [];
  const filterCities = (a, b) => {
    for (let i = a; i < b; i += 1) {
      filteredCities.push(Object.entries(cities)[i]);
    }
  };
  for (let i = 0; i < citiesIndexes.length; i += 1) {
    if (Object.values(countryCode)[0] === citiesIndexes[i].cd) {
      if (citiesIndexes[i].end > 100) {
        filterCities(citiesIndexes[i].start, citiesIndexes[i].start + 100);
      } else {
        filterCities(citiesIndexes[i].start, citiesIndexes[i].end);
      }
    }
  }

  return (
    <div className="homepage-container">
      { returnedData.error === '' ? (
        <div className="width-100-percent text-align-center">
          <p id="select-your-area" className="text-align-center">Select your area:</p>
          <select className="select" onChange={(e) => { setCountryCode({ contryCode: e.target.value }); }}>
            {Object.entries(countries).map((country) => (
              <option key={country[0]} value={country[0]}>
                {country[1].emoji}
                {' '}
                {country[1].name}
              </option>
            ))}
          </select>
          <select className="select" name="" id="" onChange={(e) => { changeHandler(e.target.value); }}>
            <option defaultValue="Choose City">Choose City</option>
            {filteredCities.map((city) => (
              <option key={city[1].name} value={[city[1].lat, city[1].lng, city[1].name]}>
                {city[1].name}
              </option>
            ))}
          </select>
          <Link className="link" to="/details">Go</Link>
          <div className="table-section width-100-percent">

            { returnedData.loading ? (<h1>loading...</h1>) : sixCities.map((city) => (
              <div key={city.name} className="square">
                <h4>{city.name}</h4>
                <p>
                  {city.time}
                  {' '}
                  <span className="temprature">
                    {city.temperature}
                    °C
                  </span>
                </p>
              </div>
            ))}
          </div>

        </div>
      ) : (<h1>{returnedData.error}</h1>) }

    </div>

  );
};
export default Homepage;
