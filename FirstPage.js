import React,{Component} from 'react';
import { Platform,StyleSheet, Text, View,Alert, Button,YellowBox, Navigator} from 'react-native';
import {Menu,MenuProvider, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';

export default class FirstPage extends Component {
  constructor(props){
    super(props);
    YellowBox.ignoreWarnings([
      'Warning: isMounted(...) is deprecated','Module RCTImageLoader'
    ]);
  }
  render() {
    return (
      <MenuProvider style={{flexDirection: "column",padding:30}}>
      <Menu onSelect={value => alert(`You choose: ${value} `)}>

      <MenuTrigger>
      <Text style={styles.headerText}>Session</Text>
  
      </MenuTrigger>
      
      <MenuOptions>
        <MenuOption value={"Sem 1,18/19"}>
        <Text style={styles.menuContent}>Semester 2, 2018/2019</Text>
        </MenuOption>
        <MenuOption value={"Sem 3,18/19"}>
        <Text style={styles.menuContent}>Semester 3, 2018/2019</Text>
        </MenuOption>
        <MenuOption value={"Sem 1, 19/20"}>
        <Text style={styles.menuContent}>Semester 1, 2019/2020</Text>
        </MenuOption>
       
        </MenuOptions>
      

    </Menu>
    
    </MenuProvider>

    
  
    );
  }
}

const styles = StyleSheet.create({

    headerText:{
        fontSize:20,
        margin: 10,
        fontWeight: "bold"
    },
    menuContent:{
        color:"#000",
        fontWeight: "bold",
        padding: 10,
        itemPadding:5,
        fontSize:20
    }
});
