import React from 'react';
import { StyleSheet } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    return(
      <View style={styles.parallelContainer}>
         <Text> asd</Text>  
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  button: {
    alignContent: 'stretch',
  },
  contentContainer: {
    paddingTop: 30,
    paddingBottom:100,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 110,
  },
  welcomeImage: {
    width: 280,
    height: 280,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  loginImage: {
    alignItems: 'center',
    marginLeft:15,
    marginTop:10,
    marginBottom:10,
  },

  bevEatAppContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginBottom:100,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpLink: {
    paddingVertical: 15,
  },
  descriptionText: {
    fontSize: 20,
    fontWeight: 'bold', 
    color: '#000000',
  },
});

