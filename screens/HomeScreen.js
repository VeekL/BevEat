import React from 'react';
import {
  Image,Platform,ScrollView,StyleSheet,Text,TouchableOpacity,View,Vibration,Button,Keyboard,TextInput,AppRegistry
} from 'react-native';
import { Facebook,Haptic,WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props){
     super(props);
     this.selectionPage = this.selectionPage.bind(this);
     this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/BevEat.jpg')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>
          <View style={styles.bevEatAppContainer}>
            {this._BevEatApp()}
          </View>
	<TouchableOpacity accessibilityLabel="Login with Facebook" onPress={()=>this.selectionPage()}>
      	    <Image
        	style={styles.button}
        	source={require('../assets/images/Facebook.jpg')}style={styles.loginImage}
      	    />
    	  </TouchableOpacity>
        
          <TouchableOpacity accessibilityLabel="Sign in with Google" onPress={()=>this.selectionPage()}>
       	    <View>
		<Image
        	style={styles.button}
        	source={require('../assets/images/Google.jpg')}style={styles.loginImage}
                />
	    </View>
    	  </TouchableOpacity>
      {false&& <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}/>}
     </View>
    );
  }
  
  _componentDidMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }
  selectionPage(){
     this.props.navigation.navigate('Selections');
  }
  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('http://www.beveat.com/');
  };

  _BevEatApp() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.descriptionText}>
          BevEat App
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          {learnMoreButton}
        </Text>
      );
    }  }
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
