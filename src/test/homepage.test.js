import React from 'react';
import { Provider } from 'react-redux';
import { render as rltRender } from '@testing-library/react';
import Homepage from '../components/Homepage';
import '@testing-library/jest-dom/extend-expect';
import store from '../Redux/configureStore';

const render = (component) => rltRender(
  <Provider store={store}>
    {component}
  </Provider>,
);
describe('test Home component', () => {
  let component;
  beforeEach(() => {
    component = render(<Homepage />);
  });

  it('test image alt', () => {
    const paragraph = component.getByTestId('select-your-area');
    expect(paragraph.textContent).toBe('Select your area');
  });

  it('test continent name', () => {
    const name = component.getByTestId('continent');
    expect(name.textContent).toBe('The whole world');
  });
});
