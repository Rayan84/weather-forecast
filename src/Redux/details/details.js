const FETCH_FORECAST_REQUEST = 'forecastStore/forecast/fetch_request';
const FETCH_FORECAST_SUCCESS = 'forecastStore/forecast/fetch_success';
const FETCH_FORECAST_FAILURE = 'forecastStore/forecast/fetch_failure';
// const citiesURL = 'http://dataservice.accuweather.com/locations/v1/topcities/{group}';
// const FORECAST_URL = 'https://developer.accuweather.com/accuweather-forecast-api/apis/get/forecasts/v1/daily/5day/%7BlocationKey%7D';


const initialiState = {
  loading: false,
  error: '',
  data: [],
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
