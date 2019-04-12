import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Image, Vibration } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Alert,Button } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Second Page',
  };
  constructor(props){
     super(props);
     this.state = {amt:0, formattedamt:'$0.00'};
  }

  onPress(i){
if (i<10){
 this.setState({amt: this.state.amt*10+i},()=>{ 
var dollars=Math.floor(this.state.amt/100).toString();
var cents=this.state.amt%100;
if (cents<10){ cents='0'+cents.toString(); }
this.setState({formattedamt:'$'+dollars+'.'+cents }); } );
} else if (i==12){
 this.setState({amt: Math.floor(this.state.amt/10)},()=>{ 
var dollars=Math.floor(this.state.amt/100).toString();
var cents=this.state.amt%100;
if (cents<10){ cents='0'+cents.toString(); }
this.setState({formattedamt:'$'+dollars+'.'+cents }); } );
} else if (i==11){
Alert.alert(
  'Paying amount',
  this.state.formattedamt,
  [{text: 'OK', onPress: () => console.log('OK Pressed. amt:'+this.state.formattedamt)}, ],
  {cancelable: true},
);
}

  }

  render() {
    return (
      <View style={{flex:1,flexDirection: 'column', padding: 20}}>
      <View style={styles.parallelContainer}>
        <TouchableOpacity accessibilityLabel="Pre-Order">
       	  <View>
		    <Image
        	  source={require('../assets/images/DirectPay.png')}style={styles.rowImages}
                />
	      </View>
    	</TouchableOpacity>
      </View>
        <Text>
          Amount to pay: {this.state.formattedamt}
        </Text>
<View style={{ flex:1 }}>
<View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
<View style={{ flex: 1, alignSelf: 'stretch' }}>
<Button
  onPress={() => this.onPress(1)}
  title="1"
  accessibilityLabel="1" />
</View>
<View style={{ flex: 1, alignSelf: 'stretch' }}>
<Button
  onPress={() => this.onPress(2)}
  title="2"
  accessibilityLabel="2" />
</View>
<View style={{ flex: 1, alignSelf: 'stretch' }}>
<Button
  onPress={() => this.onPress(3)}
  title="3"
  accessibilityLabel="3" />
</View>
</View>
<View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
<View style={{ flex: 1, alignSelf: 'stretch' }}>
<Button
  onPress={() => this.onPress(4)}
  title="4"
  accessibilityLabel="4" />
</View>
<View style={{ flex: 1, alignSelf: 'stretch' }}>
<Button
  onPress={() => this.onPress(5)}
  title="5"
  accessibilityLabel="5" />
</View>
<View style={{ flex: 1, alignSelf: 'stretch' }}>
<Button
  onPress={() => this.onPress(6)}
  title="6"
  accessibilityLabel="6" />
</View>
</View>
<View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
<View style={{ flex: 1, alignSelf: 'stretch' }}>
<Button
  onPress={() => this.onPress(7)}
  title="7"
  accessibilityLabel="7" />
</View>
<View style={{ flex: 1, alignSelf: 'stretch' }}>
<Button
  onPress={() => this.onPress(8)}
  title="8"
  accessibilityLabel="8" />
</View>
<View style={{ flex: 1, alignSelf: 'stretch' }}>
<Button
  onPress={() => this.onPress(9)}
  title="9"
  accessibilityLabel="9" />
</View>
</View>
<View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
<View style={{ flex: 1, alignSelf: 'stretch' }}>
<Button
  onPress={() => this.onPress(0)}
  title="0"
  accessibilityLabel="0" />
</View>
<View style={{ flex: 1, alignSelf: 'stretch' }}>
<Button
  onPress={() => this.onPress(12)}
  title="<"
  accessibilityLabel="Backspace" />
</View>
<View style={{ flex: 1, alignSelf: 'stretch' }}>
<Button
  onPress={() => this.onPress(11)}
  title="->"
  accessibilityLabel="Ok" />
</View>
</View>
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
