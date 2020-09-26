import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Image style={styles.overlay} /> */}
      {/* <ImageBackground style={ styles.imgBackground } 
                 resizeMode='cover' 
                 source={require('./img/together.jpg')}> */}
      <View style={styles.landingText}>
        <Text style={styles.headingOne}>HELLO NEIGHBOR</Text>
        <Text style={styles.paragraph}>Matching you to people in your local community so you can grow stronger together.</Text>
        <StatusBar style="auto" />
      </View>
      {/* </ImageBackground> */}
      <View>
      <Image style={styles.landingImg} source={require('./img/together.jpg')}></Image>
      <Text>more ifno</Text>
      </View>

      <View style={styles.logIn}>
        <Text>Join Now</Text>
        <Text>Have an account already? Sign in</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // zIndex: -1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0
  },
  landingImg: {
    width: 150,
    height: 'auto'
  },  
  // imgBackground: {
  //   width: '100%',
  //   height: '80%',
  //   flex: 1,
  //   // filter: saturate('30%'),
  // },
  // overlay: {
  //   zIndex: 1,
  //   width: '100%',
  //   height: '80%',
  //   marginTop: '0%',
  //   backgroundColor: 'hsl(36, 100%, 100%)',
  //   position: 'absolute',
  //   // filter: opacity('37%'),
  // },
  headingOne: {
    color: '#40CBC8',
    fontSize: 36,
  },
  paragraph: {
    color: '#000',
    marginTop: 20,
    fontSize: 18,
  },
  landingText: {
    width: '70%',
    height: '50%',
    textAlign: 'center',
    marginTop: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  logIn: {
    // marginBottom: '30%',
  }
});
