import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Image, Vibration } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Second Page',
  };
  constructor(props){
     super(props);
  }

  render() {
    return (
      <View>
      <View style={styles.parallelContainer}>
        <TouchableOpacity accessibilityLabel="Pre-Order">
       	  <View>
		    <Image
        	  source={require('../assets/images/Preorder.png')}style={styles.rowImages}
                />
	      </View>
    	</TouchableOpacity>
      </View>

      <View style={styles.parallelContainer}>
        <TouchableOpacity accessibilityLabel="Direct Payment">
       	  <View>
		    <Image
        	  source={require('../assets/images/DirectPay.png')}style={styles.rowImages}
                />
	      </View>
    	</TouchableOpacity>
      </View>

      <View style={styles.parallelContainer}>
        <TouchableOpacity accessibilityLabel="Display Balance">
       	  <View>
		    <Image
        	  source={require('../assets/images/Balance.png')}style={styles.rowImages}
                />
	      </View>
    	</TouchableOpacity>
      </View>

      <View style={styles.parallelContainer}>
        <TouchableOpacity accessibilityLabel="Change Settings">
       	  <View>
		    <Image
        	  source={require('../assets/images/Settings.png')}style={styles.rowImages}
                />
	      </View>
    	</TouchableOpacity>
      </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  parallelContainer: {
    borderBottomWidth:6,
  },
  rowImages:{
  	alignItems: 'center',
  	width:400,
  	height:155,
  }
});
