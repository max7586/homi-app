import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import LoginForm from './LoginForm';
import { BrowserRouter } from 'react-router-dom'

describe('LoginForm component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
        <LoginForm />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<LoginForm onSuccess={()=>{}}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders the UI as expected with no props', () => {
    const tree = renderer
      .create(<LoginForm />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});