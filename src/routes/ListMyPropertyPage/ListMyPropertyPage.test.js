import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ListMyPropertyPage from './ListMyPropertyPage';
import { BrowserRouter } from 'react-router-dom'


describe('ListMyPropertyPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
        <ListMyPropertyPage />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer.create(<BrowserRouter>
        <ListMyPropertyPage />
      </BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();  
  });


});