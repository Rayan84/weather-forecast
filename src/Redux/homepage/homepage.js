import axios from 'axios';

const FETCH_FORECAST_REQUEST = 'homepageStore/homepage/fetch_request';
const FETCH_FORECAST_SUCCESS = 'homepageStore/homepage/fetch_success';
const FETCH_FORECAST_FAILURE = 'homepageStore/homepage/fetch_failure';
const TEST = 'homepageStore/homepage/test';

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

export const test = (payload) => ({
  type: TEST,
  payload,
});

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
  dispatch(fetchForecastRequest);
  const cities = ['London', 'Amsterdam', 'Paris', 'New York', 'Tokyo', 'Cairo'];
  const lat = [51.5072, 52.3676, 48.8566, 40.7128, 35.6762, 30.0444];
  const lng = [0.1276, 4.9041, 2.3522, 74.0060, 139.6503, 31.2357];
  const arr = [];

  for (let i = 0; i < lat.length; i += 1) {
    axios.get(`${FORECAST_URL}latitude=${lat[i]}&longitude=${lng[i]}&hourly=temperature_2m`, { headers: {} })
      .then((response) => {
        const { data } = response;
        const { hourly } = data;
        const { temperature_2m: temp, time } = hourly;
        const obj = {
          name: cities[i],
          time: time[0],
          temperature: temp[0],
        };

        arr.push(obj);
        if (arr) {
          dispatch(fetchForecastSuccess(arr));
        }
      }).catch((error) => {
        dispatch(fetchForecastFailure(error.message));
      });
  }arr.loading = false;
  arr.error = '';
};

const reducer = (state = initialiState, action) => {
  switch (action.type) {
    case FETCH_FORECAST_REQUEST:
      return {
        loading: true,
        error: '',
        data: [],
      };

    case FETCH_FORECAST_SUCCESS:
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
    case TEST:
      return {
        loading: false,
        error: '',
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
