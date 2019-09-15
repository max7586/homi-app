import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils'

import PropertyApiService from '../../services/property-api-service'

export default class ListMyPropertyForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()

    // title is an address 
    // 
    const { title, content, image } = ev.target

     this.setState({ error: null })
     PropertyApiService.postProperty(title.value, content.value, image.value) //create postProperty
     .then(this.context.addProperty) //create addProperty
     .then(() => {
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
            Image URL <Required />
          </label>
          <Input
            name='image'
            placeholder= 'https://loremflickr.com.......'
            type='text'
            required
            id='ListMyPropertyForm__image'>
          </Input>
        </div>
        <div className='description'>
          <label htmlFor='ListMyPropertyForm__description'>
            Description <Required />
          </label>
          <Input
            name='description'
            placeholder='Detail about house, 560 Sq-Ft 6 Bedrooms 2 Garage 5 Bathroom. FOR RENT'
            type='description'
            required
            id='ListMyPropertyForm__description'>
          </Input>
        </div>
        <div className='nick_name'>
          <label htmlFor='ListMyPropertyForm__nick_name'>
            Nickname
          </label>
          <Input
            name='nick_name'
            type='text'
            required
            id='ListMyPropertyForm__nick_name'>
          </Input>
        </div>
        <Button type='submit'>
          Submit
        </Button>
      </form>
    )
  }
}
