import React, { Component } from 'react';
import { StyleSheet, View, SectionList, Text, Platform, Alert, Image } from 'react-native';

export default class ListView extends Component {
  render() { 
    var Cervezas = [
      { 
        "name" : 'Bohemian Pilsener',
        "photo" : require('./bohemian_pilsener.png'),
        "description" : 'Bohemian Pilsener, una cerveza balanceada, de color dorado intenso. Realizada con lúpulo patagónico, con gran cuerpo y amargor equilibrado',
        'characteristics' : ''
      },
      { 
        "name" : 'APA',
        "photo" : require('./APA.png'),
        "description" : 'Cerveza de alta fermentación con un aroma y sabor marcado a lúpulos americanos. Tiene notas cítricas y tiene baja maltosidad.',
        'characteristics' : ''
      },
      { 
        "name" : 'Saison',
        "photo" : require('./saison.png'),
        "description" : 'Una cerveza de origen belga, ideal para el calor. La levadura le aporta aroma y sabores frutados y especiados. Por su final seco, da ganas de tomarla sin parar!',
        'characteristics' : ''
      }];
    //var Comidas = ['Bastones de Muzzarella', 'Papas Fritas', 'Hamburguesas'];
    //var Vinos = ['Vino Toro', 'Vasco Viejo'];

    return (
      <View style={{ marginTop : (Platform.OS) == 'ios' ? 20 : 0 }} >
      <SectionList
          sections={[
            { title: 'Cervezas', data: Cervezas }
            //{ title: 'Comidas', data: Comidas },
            //{ title: 'Vinos', data: Vinos },
          ]}

          renderSectionHeader={ ({section}) => <Text style={styles.SectionHeaderStyle}> { section.title } </Text> }
          renderItem={ ({item}) => 
          <View style={styles.SectionListItemStyle}>
            <Image style={{width: 127, height: 150}} source={item.photo}/>
            <View style={styles.BeerContainerStyle}>
              <Text style={styles.BeerTitleStyle}> { item.name } </Text>
              <Text style={styles.BeerDescriptionStyle}>
                { item.description }
               </Text>
              <Text style={styles.BeerCharacteristicsStyle}>IBU 47 - ALC 13 %</Text>
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
    fontFamily : 'DINOT-BOLD'
  },
 
  SectionListItemStyle:{
    flex:1,
    flexDirection: 'row',
    marginTop : 10,
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
    marginTop: 10,
    overflow: "hidden"
  },

  BeerTitleStyle:{
    marginTop: 10,
    textAlign: 'center',
    fontSize : 15,
    padding: 5,
    color: '#FFF',
    backgroundColor : '#801926',
    fontFamily : 'DINOT-Medium'
  },
  BeerDescriptionStyle : {
    padding : 5,
    fontSize : 13,
  },
  BeerCharacteristicsStyle : {
    marginBottom: 10,
    textAlign: 'center',
    fontSize : 13,
    padding: 5,
    color: '#B29C7E',
    fontFamily : 'DINOT-Medium'
  },
  BeerContainerStyle : {
    flex:1,
    alignItems:'flex-start',
    flexDirection:'column',
    justifyContent:'space-between'
  },
});

