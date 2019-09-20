import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ContactUsForm from './ContactUsForm';
import { BrowserRouter } from 'react-router-dom'

describe('ContactUsForm component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
        <ContactUsForm />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer.create(<ContactUsForm />).toJSON();
    expect(tree).toMatchSnapshot();  
  });


});