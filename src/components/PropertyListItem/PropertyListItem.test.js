import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import PropertyListItem from './PropertyListItem';
import { BrowserRouter } from 'react-router-dom'
// import { Link } from 'react-router-dom'

describe('PropertyListItem component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
        <PropertyListItem property={{id:2,title:'test',content:''}}/>
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<BrowserRouter>
        <PropertyListItem property={{id:2,title:'test',content:''}}/>
      </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });


});