'use strict';

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Camera from 'react-native-camera'
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class ProfileView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      qrcode: ''
    }
  }

  qrDetected(e) {
    this.setState({
      qrcode: e.data
    })
  }

  render() {
    return (
      <View>
        <View>
          <QRCodeScanner onRead={this.qrDetected.bind(this)} />
        </View>
        <View>
          <Text>{this.state.qrcode}</Text>
        </View>
      </View>
    )
  }
}
