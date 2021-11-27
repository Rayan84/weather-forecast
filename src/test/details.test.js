import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Homepage from '../components/Homepage';
import TestComponent from '../components/TestComponent';
import { fetchForecastRequest, fetchForecastSuccess, fetchForecastFailure } from '../Redux/details/details';
import store from '../Redux/configureStore';

describe('Test making requests', () => {
  it('Test make fetch request', () => {
    expect(fetchForecastRequest()).toEqual({ type: 'detailsStore/details/fetch_request' });
  });
  it('Test fetch success', () => {
    expect(fetchForecastSuccess('data')).toEqual({ type: 'detailsStore/details/fetch_success', payload: 'data' });
  });
  it('Test fetch failure', () => {
    expect(fetchForecastFailure()).toEqual({ type: 'detailsStore/details/fetch_failure' });
  });
  test('renders learn react link', () => {
    render(
      <Provider store={store}>
        <TestComponent />
        <Homepage />
      </Provider>,
    );
    const linkElement = screen.getByText(/Select your area:/i);
    expect(linkElement).toBeInTheDocument();
  });
});
