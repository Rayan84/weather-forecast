import axios from 'axios';

const FETCH_FORECAST_REQUEST = 'homepageStore/homepage/fetch_request';
const FETCH_FORECAST_SUCCESS = 'homepageStore/homepage/fetch_success';
const FETCH_FORECAST_FAILURE = 'homepageStore/homepage/fetch_failure';
const FORECAST_URL = 'https://api.open-meteo.com/v1/forecast?';
const initialiState = {
  loading: false,
  error: '',
  data: [{
    name: 'Beirut',
    time: '00:00',
    temperature: 22,
  }],
};

// const coordinates = {

// }
// async function getMultiple(...objectsToGet) {
//   let users = [];
//   await Promise.all(objectsToGet.map(obj =>
//     axios.get(`${FORECAST_URL}latitude=${lat}&longitude=${lng}&hourly=temperature_2m`)
// .then(response => {
//       // do something with response
//       users.push(response);
//     })
//   ));
//   return users;
// }

// some other async context
// console.log(await getMultiple({ id: 'asdf'}, { id: 'foo' }, { id: 'bar' }));

export const fetchForecastRequest = () => ({
  type: FETCH_FORECAST_REQUEST,
});

export const fetchForecastSuccess = (payload) => ({
  type: FETCH_FORECAST_SUCCESS,
  payload,
});

export const fetchForecastFailure = () => ({
  type: FETCH_FORECAST_FAILURE,
});

export const loopFetchSixCities = () => (dispatch) => {
  console.log('Fetching six cities...');
  dispatch(fetchForecastRequest);
  const cities = ['London', 'Amsterdam', 'Paris', 'New York', 'Tokyo', 'Cairo'];
  const lat = [51.5072, 52.3676, 48.8566, 40.7128, 35.6762, 30.0444];
  const lng = [0.1276, 4.9041, 2.3522, 74.0060, 139.6503, 31.2357];
  const arr = [];

  for (let i = 0; i < lat.length; i += 1) {
    axios.get(`${FORECAST_URL}latitude=${lat[i]}&longitude=${lng[i]}&hourly=temperature_2m`, { headers: {} })
      .then((response) => {
      // arr.push(cities[i]);
        const { data } = response;
        const { hourly } = data;
        /* eslint-disable-next-line */
        const { temperature_2m, time } = hourly;
        const obj = {
          name: cities[i],
          time: time[0],
          temperature: temperature_2m[0],
        };

        arr.push(obj);
        // arr.push(temperature_2m[0]);
        // arr.push(response.data);
        console.log(obj);
        dispatch(fetchForecastSuccess(arr));
      }).catch((error) => {
        dispatch(fetchForecastFailure(error.message));
      });
  }arr.loading = false;
  arr.error = '';
};

// export const fetchSixCitiesForecast = (lat, lng) => (dispatch) => {
//   console.log(lat, lng);
//   dispatch(fetchForecastRequest());
//   axios.get(`${FORECAST_URL}latitude=${lat}&longitude=${lng}&hourly=temperature_2m`,
//   { headers: {} })
//     .then((response) => {
//       const { data } = response;
//       const { hourly } = data;
//       const { temperature2m, time } = hourly;
//       console.log('temperature:', temperature2m[0]);
//       console.log('time:', time[0]);
//       console.log(Object.entries(data)[4]);
//       const arr = [];
//       arr.push(time[0]);
//       arr.push(temperature2m[0]);
//     })
//     .catch((error) => {
//       dispatch(fetchForecastFailure(error.message));
//     });
// };

const reducer = (state = initialiState, action) => {
  console.log('updating state');
  switch (action.type) {
    case FETCH_FORECAST_REQUEST:
      console.log('Requesting...');
      return {
        loading: true,
        error: '',
        data: [],
      };

    case FETCH_FORECAST_SUCCESS:
      console.log('Fetch six cities success...');
      return {
        loading: false,
        error: '',
        data: action.payload,
      };

    case FETCH_FORECAST_FAILURE:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
