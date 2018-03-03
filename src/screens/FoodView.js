import React, { Component } from 'react'
import ListView from '../components/ListView'

var comida = [{
  title: 'Comidas',
  data: [
    { 
      "name" : 'Comida 1',
      "photo" : require('../images/logo.png'),
      "description" : 'Descripción Comida 1',
      'characteristics' : ''
    },
    { 
      "name" : 'Comida 2',
      "photo" : require('../images/logo.png'),
      "description" : 'Descripción Comida 2',
      'characteristics' : ''
    },
    { 
      "name" : 'Comida 3',
      "photo" : require('../images/logo.png'),
      "description" : 'Descripción Comida 3',
      'characteristics' : ''
    },
  ]
}];

export default class FoodView extends Component {

  render() { 

    return (
      <ListView lists={comida} /> 
    )
  }
}
