import axios from 'axios';

const FETCH_DETAILS_REQUEST = 'detailsStore/details/fetch_request';
const FETCH_DETAILS_SUCCESS = 'detailsStore/details/fetch_success';
const FETCH_DETAILS_FAILURE = 'detailsStore/details/fetch_failure';
const FORECAST_URL = 'https://api.open-meteo.com/v1/forecast?';
const initialiState = {
  loading: false,
  error: '',
  data: [],
};

export const fetchForecastRequest = () => ({
  type: FETCH_DETAILS_REQUEST,
});

export const fetchForecastSuccess = (payload) => ({
  type: FETCH_DETAILS_SUCCESS,
  payload,
});

export const fetchForecastFailure = () => ({
  type: FETCH_DETAILS_FAILURE,
});

export const fetchCityForecast = (lat, lng, cityName) => (dispatch) => {
  dispatch(fetchForecastRequest());
  axios.get(`${FORECAST_URL}latitude=${lat}&longitude=${lng}&hourly=temperature_2m`, { headers: {} })
    .then((response) => {
      const { data } = response;
      const { hourly } = data;
      const arr = [];
      arr.push(hourly.time[0]);
      arr.push(hourly.temperature_2m[0]);

      arr.push(cityName);
      dispatch(fetchForecastSuccess(arr));
    })
    .catch((error) => {
      dispatch(fetchForecastFailure(error.message));
    });
};

const reducer = (state = initialiState, action) => {
  switch (action.type) {
    case FETCH_DETAILS_REQUEST:
      return {
        loading: true,
        error: '',
        data: [],
      };

    case FETCH_DETAILS_SUCCESS:
      return {
        loading: false,
        error: '',
        data: action.payload,
      };
    case FETCH_DETAILS_FAILURE:
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
