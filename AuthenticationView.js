import React, { Component } from 'react';
import {Platform, StyleSheet, Text, Image, View} from 'react-native';

export default class AuthenticationView extends Component {

  componentDidMount(){
    const { navigate } = this.props.navigation;
    this.timeoutHandle = setTimeout(()=>{
      navigate('ListView')
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  }
});