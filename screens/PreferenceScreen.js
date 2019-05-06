import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Image, Vibration } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Alert,Button,Switch } from 'react-native';

//TODO: 'reset' button, 'additional allergies' field
//TODO: clarify whether 'seafood' field is neccessary. according to Google, seafood = fish + shellfish

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Second Page',
  };
  constructor(props){
     super(props);
     this.state = {halal:false, vegan:false, vegetarian:false, healthier:false,
					fish:true, beef:true, soy:true,
					shellfish:true, pork:true, corn:true,
					seafood:true, dairy:true, garlic:true,
					peanut:true, milk:true, egg:true,
					nuts:true, cheese:true, gluten:true};
  }

  onPress(item){
    console.log('pressed: '+item);
    switch (item){
      case 'halal':
 	    switch (this.state.halal){
		  case true:
		    this.setState({halal:false});
            break;
          case false:
            this.setState({halal:true, pork:false});
            break;
		}
        //this.setState({halal: !this.state.halal, pork:false});
        break;
	  case 'vegan':
	    switch (this.state.vegan){
		  case true:
		    this.setState({vegan:false});
            break;
          case false:
/*             this.state.vegan = true;
			this.state.vegetarian = true;
            this.state.fish = false;
			this.state.beef = false;
			this.state.shellfish = false;
			this.state.pork = false;
			this.state.seafood = false;
			this.state.dairy = false;
			this.state.milk = false;
			this.state.egg = false;
			this.state.cheese = false; */
			this.setState({vegan:true, vegetarian:true, fish:false, beef:false, shellfish:false, pork:false, seafood:false, dairy:false, milk:false, egg:false, cheese:false});
            break;
		}
        break;
      case 'vegetarian':
	    switch (this.state.vegetarian){
		  case true:
		    this.setState({vegetarian:false});
            break;
          case false:
			/* this.state.vegetarian = true;
            this.state.fish = false;
			this.state.beef = false;
			this.state.shellfish = false;
			this.state.pork = false;
			this.state.seafood = false; */
			this.setState({vegetarian:true, fish:false, beef:false, shellfish:false, pork:false, seafood:false});
            break;
		}
	  case 'healthier':
	    this.setState({healthier: !this.state.healthier}); break;
	  case 'fish':
	    this.setState({fish: !this.state.fish}); break;
	  case 'beef':
	    this.setState({beef: !this.state.beef}); break;
	  case 'soy':
	    this.setState({soy: !this.state.soy}); break;
	  case 'shellfish':
	    this.setState({shellfish: !this.state.shellfish}); break;
	  case 'pork':
	    this.setState({pork: !this.state.pork}); break;
	  case 'corn':
	    this.setState({corn: !this.state.corn}); break;
	  case 'seafood':
	    this.setState({seafood: !this.state.seafood}); break;
	  case 'dairy':
	    this.setState({dairy: !this.state.dairy}); break;
	  case 'garlic':
	    this.setState({garlic: !this.state.garlic}); break;
	  case 'peanut':
	    this.setState({peanut: !this.state.peanut}); break;
	  case 'milk':
	    this.setState({milk: !this.state.milk}); break;
	  case 'egg':
	    this.setState({egg: !this.state.egg}); break;
	  case 'nuts':
	    this.setState({nuts: !this.state.nuts}); break;
	  case 'cheese':
	    this.setState({cheese: !this.state.cheese}); break;
	  case 'gluten':
	    this.setState({gluten: !this.state.gluten}); break;
      default:
        console.log('unhandled item: '+item); break;
    }
  }

  render() {
    return (
      <View style={{flex:1,flexDirection: 'column', padding: 20}}>
        <View style={ styles.prefItem }>
          <View><Text>Halal</Text></View>
          <View><Switch onValueChange={()=>this.onPress('halal')} value={this.state.halal} /></View>
        </View>
        <View style={ styles.prefItem }>
          <View><Text>Vegan</Text></View>
          <View><Switch onValueChange={()=>this.onPress('vegan')} value={this.state.vegan} /></View>
        </View>
        <View style={ styles.prefItem }>
          <View><Text>Vegetarian</Text></View>
          <View><Switch onValueChange={()=>this.onPress('vegetarian')} value={this.state.vegetarian} /></View>
        </View>
        <View style={ styles.prefItem }>
          <View><Text>Healthier</Text></View>
          <View><Switch onValueChange={()=>this.onPress('healthier')} value={this.state.healthier} /></View>
        </View>
        <View style={{ flex: 0.5 }}>
          <View style={{ flex: 1 , alignSelf: 'stretch', flexDirection: 'row' }}>
            <View style={ styles.restrictionItem }>
              <View><Text>fish</Text></View>
              <View><Switch onValueChange={()=>this.onPress('fish')} value={this.state.fish} /></View>
            </View>
            <View style={ styles.restrictionItem }>
              <View><Text>beef</Text></View>
              <View><Switch onValueChange={()=>this.onPress('beef')} value={this.state.beef} /></View>
            </View>
            <View style={ styles.restrictionItem }>
              <View><Text>soy</Text></View>
              <View><Switch onValueChange={()=>this.onPress('soy')} value={this.state.soy} /></View>
            </View>
          </View>
          <View style={{ flex: 1 , alignSelf: 'stretch', flexDirection: 'row' }}>
            <View style={ styles.restrictionItem }>
              <View><Text>shellfish</Text></View>
              <View><Switch onValueChange={()=>this.onPress('shellfish')} value={this.state.shellfish} /></View>
            </View>
            <View style={ styles.restrictionItem }>
              <View><Text>pork</Text></View>
              <View><Switch onValueChange={()=>this.onPress('pork')} value={this.state.pork} /></View>
            </View>
            <View style={ styles.restrictionItem }>
              <View><Text>corn</Text></View>
              <View><Switch onValueChange={()=>this.onPress('corn')} value={this.state.corn} /></View>
            </View>
          </View>
          <View style={{ flex: 1 , alignSelf: 'stretch', flexDirection: 'row' }}>
            <View style={ styles.restrictionItem }>
              <View><Text>seafood</Text></View>
              <View><Switch onValueChange={()=>this.onPress('seafood')} value={this.state.seafood} /></View>
            </View>
            <View style={ styles.restrictionItem }>
              <View><Text>dairy</Text></View>
              <View><Switch onValueChange={()=>this.onPress('dairy')} value={this.state.dairy} /></View>
            </View>
            <View style={ styles.restrictionItem }>
              <View><Text>garlic</Text></View>
              <View><Switch onValueChange={()=>this.onPress('garlic')} value={this.state.garlic} /></View>
            </View>
          </View>
          <View style={{ flex: 1 , alignSelf: 'stretch', flexDirection: 'row' }}>
            <View style={ styles.restrictionItem }>
              <View><Text>peanut</Text></View>
              <View><Switch onValueChange={()=>this.onPress('peanut')} value={this.state.peanut} /></View>
            </View>
            <View style={ styles.restrictionItem }>
              <View><Text>milk</Text></View>
              <View><Switch onValueChange={()=>this.onPress('milk')} value={this.state.milk} /></View>
            </View>
            <View style={ styles.restrictionItem }>
              <View><Text>egg</Text></View>
              <View><Switch onValueChange={()=>this.onPress('egg')} value={this.state.egg} /></View>
            </View>
          </View>
          <View style={{ flex: 1 , alignSelf: 'stretch', flexDirection: 'row' }}>
            <View style={ styles.restrictionItem }>
              <View><Text>nuts</Text></View>
              <View><Switch onValueChange={()=>this.onPress('nuts')} value={this.state.nuts} /></View>
            </View>
            <View style={ styles.restrictionItem }>
              <View><Text>cheese</Text></View>
              <View><Switch onValueChange={()=>this.onPress('cheese')} value={this.state.cheese} /></View>
            </View>
            <View style={ styles.restrictionItem }>
              <View><Text>gluten</Text></View>
              <View><Switch onValueChange={()=>this.onPress('gluten')} value={this.state.gluten} /></View>
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
  prefItem: { flex: 0.1, flexDirection: 'row', justifyContent: 'space-between' },
  restrictionItem: {flex: 1, flexDirection: 'row', justifyContent: 'space-between'}
});