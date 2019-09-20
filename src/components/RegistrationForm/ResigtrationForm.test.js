import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import RegistrationForm from './RegistrationForm';
import { BrowserRouter } from 'react-router-dom'

describe('RegistrationForm component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
        <RegistrationForm />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<RegistrationForm onSuccess={()=>{}}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders the UI as expected with no props', () => {
    const tree = renderer
      .create(<RegistrationForm />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});