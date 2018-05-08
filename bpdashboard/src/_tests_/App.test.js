import React from 'react';
import ReactDOM from 'react-dom';
import App from './../components/App';
import Login from '../components/login/Login';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../store';

describe('AppComponent', () => {
  test('should render', () => {
    const component = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </Provider>,
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
