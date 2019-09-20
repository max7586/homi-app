import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ListMyPropertyForm from './ListMyPropertyForm';
import { BrowserRouter } from 'react-router-dom'

describe('ListMyPropertyForm component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
        <ListMyPropertyForm />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ListMyPropertyForm onSuccess={()=>{}}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders the UI as expected with no props', () => {
    const tree = renderer
      .create(<ListMyPropertyForm />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});