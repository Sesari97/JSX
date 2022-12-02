/**
 * Flexbox1. Dividir la pantalla en tres partes iguales
 */

 import React, { Component } from 'react';
 import {StyleSheet,View,Text,Image} from 'react-native';
 
 const images = [
  'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop',
];

 class App extends Component {
   render() {
     return (
       <View style={styles.contenedor}>
         <View style={styles.seccion1}>
         <Image
          style={{width: '25%', height: '100%', borderRadius:50}}
          source={{uri:'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces'}}
      />
          <View style={{ height: 50}}>
          
          </View>
          <View style={{width: 50, height: 100}}>
            <Text>Posts</Text>
            <Text>20</Text>
          </View>
          <View style={{width: 65, height: 78}}>
          <Text>Followers</Text>
            <Text>110304</Text>
          </View>
          <View style={{backgroundColor:"grey", width: 80, height: 20}}>
          <Text>Edit Profile</Text>
          </View>
          <View style={{width: 80, height: 100}}>
          <Text>Following</Text>
            <Text>1103</Text>
          </View>
        </View>
         
        <View style={styles.seccion2}>
           <Image style={{width: '25%', height: '40%',backgroundColor:"red"}}
          source={{uri:'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces'}} />
    <Image style={{width: '23%', height: '40%',}}
          source={{uri:'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=125&h=125&fit=crop'}}/>
    <Image style={{width: '23%', height: '40%'}}
          source={{uri:'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=125&h=125&fit=crop'}} />
    <Image style={{width: '23%', height: '40%'}}
          source={{uri:'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=125&h=125&fit=crop'}} />
    <Image style={{width: '25%', height: '40%'}}
          source={{uri:'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=125&h=125&fit=crop'}} />
    <Image style={{width: '23%', height: '40%',}}
          source={{uri:'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=125&h=125&fit=crop'}}/>
    <Image style={{width: '23%', height: '40%'}}
          source={{uri:'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=125&h=125&fit=crop'}} />
    <Image style={{width: '23%', height: '40%'}}
          source={{uri:'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop'}} />
    <Image style={{width: '25%', height: '40%'}}
          source={{uri:'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop'}} />
    <Image style={{width: '23%', height: '40%',}}
          source={{uri:'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop'}}/>
    <Image style={{width: '23%', height: '40%'}}
          source={{uri:'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop'}} />
    <Image style={{width: '23%', height: '40%'}}
          source={{uri:'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop'}} />
         </View>

         <View style={styles.seccion3}>
          
         </View>
       </View>
     );
   }
 };
 
 const styles = StyleSheet.create({
   contenedor: {
     flex: 1,
     flexDirection: 'column',
   },
   seccion1: {
    flex: 0.5,
    flexWrap: "wrap",
    justifyContent:"space-around",
    alignContent:"stretch",
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    textAlign: 'center',
    paddingTop:70,
   },
   seccion2: {
    flex: 1,
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    textAlign: 'left',
    flexDirection: "row", 
    flexWrap: "wrap", 
    justifyContent:"space-evenly"
   },
   seccion3: {
    flex: 1,
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    textAlign: 'right',
   },
 });
 
 export default App;