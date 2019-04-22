import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Image, Vibration } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Second Page',
  };
  constructor(props){
     super(props);
     this.directPayPage = this.directPayPage.bind(this);

  }

  render() {
    return (
        <View style={styles.container}>
          <View style={{flex:0.8, alignItems:'flex-start'}}>
            <Text style={{textAlign:'center',fontSize:50,color:'white'}}>&#8592;</Text>
            </View>
          <View style={{flex:0.2}}>
          <Image source={require('../assets/images/Preorder.png')}style={styles.image}/>}
          </View>
        </View>

    );
  }
  directPayPage(){
     this.props.navigation.navigate('Amount');
  }

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  parallelContainer: {
    borderBottomWidth:6,
    flex:0.25,
  },
  rowImages:{
  	flex:0.5,
  	height:200,
  },
    image: {
    resizeMode: 'contain',
    height:380,

  },
  image2: {
    resizeMode: 'stretch',
    height:420,
  },
});
