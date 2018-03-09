import React, { Component } from 'react'
import ListView from '../components/ListView'
import comida from '../datasource/Comidas'


export default class FoodView extends Component {

  render() { 

    return (
      <ListView lists={comida} /> 
    )
  }
}
