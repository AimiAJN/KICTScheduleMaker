import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Button } from 'react-native-elements';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const {navigate} = this.props.navigation;

    let data = [{
      value: 'Sem 2 18/19',
    }];

    return(
      <View style={styles.container}>
        <Dropdown
        style={styles.picker}
        label='Select semester'
        data={data}
        />
        <Text></Text>
        <Button onPress={() => navigate('Subject')} title="Submit"></Button>
      </View>
    ); 
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    padding: 30,
    backgroundColor: '#F5FCFF',
  },
  picker: {
    width: 50,
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
    color:'#fafafa',
    backgroundColor: 'black',
    position:'absolute', 
    //right: 100, 
    justifyContent: 'center',
  }
});