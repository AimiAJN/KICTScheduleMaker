import React, {Component} from 'react';
import * as firebase from 'firebase';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import StartScreen from './screens/StartScreen';
import HomeScreen from './screens/HomeScreen';
import DisplayScreen from './screens/DisplayScreen';
import SubjectScreen from './screens/SubjectScreen';

export default class App extends Component {  
  render() {
      return (
        <NavigationApp />
      );
    }
}

const NavigationApp = createStackNavigator({
  StartPage: {screen: StartScreen},
  Home: {screen: HomeScreen},
  Subject: {screen: SubjectScreen},
  Display: {screen: DisplayScreen},
});

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
  button: {
    backgroundColor: 'blue',
    width: 30,
    height: 10,
  }
});
