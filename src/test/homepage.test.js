import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render as rltRender } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Homepage from '../components/Homepage';
import '@testing-library/jest-dom/extend-expect';
import store from '../Redux/configureStore';

const render = (component) => rltRender(
  <Provider store={store}>
    {component}
  </Provider>,
);
describe('test Home component', () => {
  it('test paragraph text', () => {
    const { getByTestId } = render(<Router><Homepage /></Router>);
    expect(getByTestId('select-your-area')).toHaveTextContent('Select your area:');
  });

  it('tests snapshots', () => {
    const component = renderer.create(
      <Provider store={store}><Router><Homepage /></Router></Provider>,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
