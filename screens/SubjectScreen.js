import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import CollapsibleList from 'react-native-collapsible-list';
import { Dropdown } from 'react-native-material-dropdown';
import { Button } from 'react-native-elements';

class SubjectScreen extends React.Component {
    static navigationOptions = {
      title: 'Subject',
    };
  
    render() {
      const {navigate} = this.props.navigation;

      let data1 = [{
        value: 'Sec: 1 Time: M-W 10 - 11.20 AM',
      }, {
        value: 'Sec: 2 Time: T- TH 2 - 3.20 PM',
      }];

      let data2 = [{
        value: 'Sec: 1 Time: M-W 10 - 11.20 AM',
      }, {
        value: 'Sec: 2 Time: T-TH 8.30 - 9.50 AM',
      }];
      
      let data3 = [{
        value: 'Sec: 1 Time: M-W 2.00 - 3.20 PM',
      }, {
        value: 'Sec: 2 Time: T-TH 8.30 - 9.50 AM',
      }];

      let data4 = [{
        value: 'Sec: 1 Time: M-W 10 - 11.20 AM',
      }, {
        value: 'Sec: 2 Time: T-TH 8.30 - 9.50 AM',
      }];

      let data5 = [{
        value: 'Sec: 1 Time: M-W 10 - 11.20 AM',
      }, {
        value: 'Sec: 2 Time: T-TH 8.30 - 9.50 AM',
      }];

      let data6 = [{
        value: 'Sec: 1 Time: M-W 10 - 11.20 AM',
      }, {
        value: 'Sec: 2 Time: T-TH 8.30 - 9.50 AM',
      }];

      return(
        <View style={styles.container}>
          <Text style={styles.sub}>CSC 1100 ELEMENTS OF PROGRAMMING</Text>
          <Dropdown style={styles.picker} label='Select section' data={data1}/>
          <Button onPress={() => navigate('Display')} title="Add"></Button>
          <Text></Text>
          <Text style={styles.sub}>CSC 1103 OBJECT ORIENTED PROGRAMMING</Text>
          <Dropdown style={styles.picker} label='Select section' data={data2}/>
          <Button onPress={() => navigate('Display')} title="Add"></Button>
          <Text></Text>
          <Text style={styles.sub}>CSC 1401 INTRODUCTION TO COMPUTER ORGANIZATION</Text>
          <Dropdown style={styles.picker} label='Select section' data={data3}/>
          <Button onPress={() => navigate('Display')} title="Add"></Button>
          <Text></Text>
          <Text style={styles.sub}>CSC 1501 INTRODUCTION TO SOFTWARE ENGINEERING</Text>
          <Dropdown style={styles.picker} label='Select section' data={data4}/>
          <Button onPress={() => navigate('Display')} title="Add"></Button>
          <Text></Text>
          <Text style={styles.sub}>CSC 1706 PROBABILITY AND STATISTICS</Text>
          <Dropdown style={styles.picker} label='Select section' data={data5}/>
          <Button onPress={() => navigate('Display')} title="Add"></Button>
          <Text></Text>
          <Text style={styles.sub}>CSC 1707 MATHEMATICS FOR COMPUTING I</Text>
          <Dropdown style={styles.picker} label='Select section' data={data6}/>
          <Button onPress={() => navigate('Display')} title="Add"></Button>
          <Text></Text>
        </View>
      ); 
    }
  }
  
  export default SubjectScreen;
  
  const styles = StyleSheet.create({
      container: { 
        flex: 1, 
        padding: 16, 
        paddingTop: 30, 
        backgroundColor: '#fff' 
        },
      head: {  
        height: 40,  
        backgroundColor: '#f1f8ff'  
        },
      wrapper: { 
        flexDirection: 'row' 
        },
      title: { 
        flex: 1,
        width: 40,
        backgroundColor: '#f6f8fa', 
        fontSize:9,
        },
      flatlist: {  
        padding: 15,
        borderColor: '#c2c8d1',
        borderWidth: 1,
        },
      text: { 
        textAlign: 'center' 
        },
      sub: {
        fontSize: 15,
      }
    });