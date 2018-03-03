import React, { Component } from 'react';
import { StyleSheet, View, SectionList, Text, Platform, Alert, Image } from 'react-native';
 
export default class ListView extends Component {

  render() { 

    return (
      <View style={{ marginTop : (Platform.OS) == 'ios' ? 10 : 0 }} >
      <SectionList
          sections={this.props.lists}

          renderSectionHeader={ ({section}) => <Text style={styles.SectionHeaderStyle}> { section.title } </Text> }
          renderItem={ ({item}) => 
          <View style={styles.ItemStyle}>
            <Image style={{width: 127, height: 150}} source={item.photo}/>
            <View style={styles.ItemContainerStyle}>
              <Text style={styles.ItemTitleStyle}> { item.name } </Text>
              <Text style={styles.ItemDescriptionStyle}>
                { item.description }
               </Text>
              <Text style={styles.ItemCharacteristicsStyle}>IBU 47 - ALC 13 %</Text>
            </View>
          </View>
          
           }
          keyExtractor={ (item, index) => index }
        />

      </View> 
    )
  }
}

const styles = StyleSheet.create({
 
  SectionHeaderStyle:{
    backgroundColor : '#5a0f0a',
    fontSize : 20,
    padding: 10,
    color: '#fff',
    fontFamily : 'DINOT-BOLD',
    marginTop: 10,
  },
 
  ItemStyle:{
    flex:1,
    flexDirection: 'row',
    height: 150,
    backgroundColor : '#F5F5F5',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    overflow: "hidden"
  },

  ItemContainerStyle : {
    flex:1,
    alignItems:'flex-start',
    flexDirection:'column',
    justifyContent:'space-between'
  },

  ItemTitleStyle:{
    marginTop: 10,
    textAlign: 'center',
    fontSize : 15,
    padding: 5,
    color: '#FFF',
    backgroundColor : '#801926',
    fontFamily : 'DINOT-Medium'
  },

  ItemDescriptionStyle : {
    padding : 5,
    fontSize : 13,
  },
  
  ItemCharacteristicsStyle : {
    marginBottom: 5,
    textAlign: 'center',
    fontSize : 13,
    padding: 5,
    color: '#B29C7E',
    fontFamily : 'DINOT-Medium'
  },
});