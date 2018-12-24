import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Navigator} from 'react-native';

export default class App extends Component {

constructor(){
  super();
  this.state={

  };
}

render() {
    return (
      <View style={styles.container}>
        <Image source={require('http://pixsector.com/cache/0266455f/ava13c3ac53812cde1b88.png')}></Image>
        <Text></Text>
        <Text style={styles.title}>KICT Student Shedule Maker</Text>
    </View>
    );
  }
}

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