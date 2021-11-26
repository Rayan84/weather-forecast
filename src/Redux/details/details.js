import axios from "axios";
const FETCH_FORECAST_REQUEST = 'forecastStore/forecast/fetch_request';
const FETCH_FORECAST_SUCCESS = 'forecastStore/forecast/fetch_success';
const FETCH_FORECAST_FAILURE = 'forecastStore/forecast/fetch_failure';
const FORECAST_URL = 'https://api.open-meteo.com/v1/forecast?';


const initialiState = {
  loading: false,
  error: '',
  data: [],
};


export const fetchCityForecast = (lat, lng) => (dispatch) => {
  dispatch(fetchForecastRequest());
  axios.get(`${FORECAST_URL}latitude=${lat}&longitude=${lng}&hourly=temperature_2m`, { headers: {} })
    .then((response) => {
      const data = response.data;
      const { hourly } = data;
      const { temperature_2m, time } = hourly;
      console.log('temperature:',temperature_2m[0]);
      console.log('time:',time[0]);
      console.log(Object.entries(data)[4]);
      const arr = [];
      arr.push(time[0]);
      arr.push(temperature_2m[0])
      dispatch(fetchForecastSuccess(arr));
    })
    .catch((error) => {
      dispatch(fetchForecastFailure(error.message));
    });
};


export const fetchForecastRequest = () => ({
  type: FETCH_FORECAST_REQUEST,
});

export const fetchForecastSuccess = (payload) => ({
  type: FETCH_FORECAST_SUCCESS,
  payload,
})

export const fetchForecastFailure = () => ({
  type: FETCH_FORECAST_FAILURE,
})

const reducer = (state = initialiState, action) => {
  console.log('updating state');
  switch(action.type) {
    case FETCH_FORECAST_REQUEST:
      return {
        loading: true,
        error: '',
        data: [],
      };

    case FETCH_FORECAST_SUCCESS:
      console.log('Fetch success');
      console.log(action.payload);
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
      }
    default:
    return initialiState;
  }
}

export default reducer;
