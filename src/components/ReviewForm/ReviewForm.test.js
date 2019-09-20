import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ReviewForm from './ReviewForm';
import { BrowserRouter } from 'react-router-dom'

describe('ReviewForm component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
        <ReviewForm />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ReviewForm />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });


});