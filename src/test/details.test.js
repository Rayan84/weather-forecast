import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
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
  test('renders text Test page', () => {
    render(
      <Provider store={store}>
        <TestComponent />
      </Provider>,
    );
    const linkElement = screen.getByText(/Rome/i);
    expect(linkElement).toBeInTheDocument();
  });
});
