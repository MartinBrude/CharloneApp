import React, { Component } from 'react'
import ListView from '../components/ListView'
import cervezas from '../datasource/Cervezas'

export default class BeerView extends Component {

  render() { 

    return (
      <ListView lists={cervezas} /> 
    )
  }
}
