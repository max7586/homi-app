import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils'

import PropertyApiService from '../../services/property-api-service'

export default class ListMyPropertyForm extends Component {
  static defaultProps = {
    onAddPropertySuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
// alert("clicked")
    // title is an address 
    
    const { title, content, image} = ev.target

     this.setState({ error: null })
     PropertyApiService.postProperty(title.value, content.value, image.value) 
     .then(this.context.addProperty) 
     .then( property => {
      title.value = ''
      content.value = ''
      image.value = ''

      this.props.onAddPropertySuccess()
             })
         .catch(res => {
           this.setState({ error: res.error })
         })
    }


  render() {
    const { error } = this.state
    return (
      <form
        className='ListMyPropertyForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='title'>
          <label htmlFor='ListMyPropertyForm__title'>
            Address <Required />
          </label>
          <Input
            name='title'
            placeholder='101 street, city, state, ZIP code'
            type='text'
            required
            id='ListMyPropertyForm__title'>
          </Input>
        </div>

        <div className='image'>
          <label htmlFor='ListMyPropertyForm__image'>
            Image URL  <Required />
          </label>
          <Input
            name='image'
            placeholder= 'https://loremflickr.com/750/300/house?random'
            type='text'
            required
            id='ListMyPropertyForm__image'>
          </Input>
        </div>
        <div className='content'>
          <label htmlFor='ListMyPropertyForm__content'>
            Propertiy Description <Required />
          </label>
          <Input
            name='content'
            placeholder='Detail about house, 560 Sq-Ft 6 Bedrooms 2 Garage 5 Bathroom. FOR RENT'
            type='content'
            required
            id='ListMyPropertyForm__content'>
          </Input>
        </div>

        <Button type='submit'>
          Submit
        </Button>
      </form>
    )
  }
}
