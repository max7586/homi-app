import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import PropertyListPage from './PropertyListPage';
import { BrowserRouter } from 'react-router-dom'


describe('PropertyListPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
        <PropertyListPage />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer.create(<BrowserRouter>
        <PropertyListPage />
      </BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();  
  });


});