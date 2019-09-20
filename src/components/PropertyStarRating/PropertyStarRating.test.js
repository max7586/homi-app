import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {PropertyStarRating} from './PropertyStarRating';
import { BrowserRouter } from 'react-router-dom'

describe('PropertyStarRating component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
        <PropertyStarRating />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<PropertyStarRating  rating={5}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders the UI as expected with no rating', () => {
    const tree = renderer
      .create(<PropertyStarRating rating={0}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});



