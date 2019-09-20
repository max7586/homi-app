import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import StyleIcon from './StyleIcon';
import { BrowserRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

describe('StyleIcon component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
        <StyleIcon />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });



  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<StyleIcon  styleIconMap={'Story'}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders the UI as expected with no style', () => {
    const tree = renderer
      .create(<StyleIcon />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});



