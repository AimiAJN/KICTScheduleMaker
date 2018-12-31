import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';

class StartScreen extends React.Component {
  static navigationOptions = {
    title: 'StartPage',
  };
  render() {
    const {navigate} = this.props.navigation;
    return(
      <View style={styles.container}>
        <Image source={{uri:'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/calendar-512.png'}} style={{width: 100,  height: 100}}/>
        <Text></Text>
        <Text style={styles.title} onPress={ () => navigate('Home')}>KICT Student Schedule Maker</Text>
      </View>
    ); 
  }
}

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});