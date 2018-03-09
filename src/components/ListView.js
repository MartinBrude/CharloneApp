import React, { Component } from 'react';
import { StyleSheet, View, SectionList, Text, Platform, Alert, Image } from 'react-native';
import ListViewStyles from './ListViewStyles'
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

const styles = StyleSheet.create(ListViewStyles)