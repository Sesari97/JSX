import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
// Cogemos el ancho de nuestra pantalla
const screenWidth = Dimensions.get('window').width;
// Cogemos el alto de nuestra pantalla
const screenHeight = Dimensions.get('window').height;
// Calculamos el tamaño de cada imagen
const imgWidth = screenHeight > screenWidth ? screenWidth / 4.3 : screenHeight / 4.3;

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


  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop',

  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop',


  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop',

];

const localImg = require('./images/visualstudio_code-card.png');
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bloqueDatosContainer}>
          <View style={styles.imagenPerfilContainer}>
            <Image source={localImg} style={styles.imagenPerfilRedondeada} />
          </View>
          <View style={styles.infoUsuarioContainer}>
            <View style={styles.infoUsuario}>
              <View style={styles.cajaInfoUsuario}>
                <Text style={styles.posts}>Posts</Text>
                <Text style={styles.posts}>20</Text>
              </View>
              <View style={styles.cajaInfoUsuario}>
                <Text style={styles.followers}>Followers</Text>
                <Text style={styles.followers}>110304</Text>
              </View>
              <View style={styles.cajaInfoUsuario}>
                <Text style={styles.following}>Following</Text>
                <Text style={styles.following}>1103</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity style={styles.botonEditProfile}>
                <Text>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ flex: 3 }}>
          <ScrollView contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            showsVerticalScrollIndicator: true,
          }}>
            {images.map((item, index) => (
              <View key={index + item + ''}>
                <Image source={{ uri: item }} style={styles.imgGallery} />
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //borderColor: 'purple',
    //borderWidth: 3,
  },
  bloqueDatosContainer: {
    flex: 1,
    padding: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //borderColor: 'red',
    //borderWidth: 3,
  },
  imagenPerfilContainer: {
    //borderColor: 'green',
    //borderWidth: 3,
  },
  imagenPerfilRedondeada: {
    width: imgWidth,
    height: imgWidth,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1,
  },
  infoUsuarioContainer: {
    flex: 1,
    //borderColor: 'blue',
    //borderWidth: 3,
  },
  infoUsuario: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cajaInfoUsuario: {
    flex: 1,
    //borderColor: 'orange',
    //borderWidth: 3,
    alignItems: 'center',
  },
  posts: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  followers: {
    fontSize: 14,
    fontWeight: 'bold',
    //alignItems: 'center',
    //textAlign: 'center',
  },
  following: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  botonEditProfile: {
    margin: 6,
    marginLeft: 35,
    marginRight: 35,
    backgroundColor: '#f4f4f4',
    shadowOffset: { width: 2, height: 4 },
    shadowColor: '#fff',
    padding: 4,
    alignItems: 'center',
  },
  imgGallery: {
    width: imgWidth,
    height: imgWidth,
    marginTop: 4,
    marginRight: 4,
    marginLeft: 2,
    //borderColor: 'yellow',
    //borderWidth: 2,
  }
});