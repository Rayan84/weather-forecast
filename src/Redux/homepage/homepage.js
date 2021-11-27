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


export const fetchForecast = (lat, lng) => (dispatch) => {
  dispatch(fetchForecastRequest());
  axios.get(`${FORECAST_URL}latitude=${lat}&longitude=${lng}&hourly=temperature_2m`, { headers: {} })
    .then((response) => {
      const data = Object.values(response.data);
      console.log(data);
      const arr = [];
      for (let i = 0; i < data.length; i += 1) {
        const obj = {};
        obj.mission_id = data[i].mission_id;
        obj.mission_name = data[i].mission_name;
        obj.description = data[i].description;
        arr.push(obj);
      }
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
  switch(action.type) {
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
      }
    default:
    return initialiState;
  }
}

export default reducer;
