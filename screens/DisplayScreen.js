import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import {Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

class DisplayScreen extends React.Component {
    static navigationOptions = {
      title: 'Display',
    };
  
    constructor() {
      super();
      this.state = {
        tableHead: ['Time/Day', '8.30-9.50', '10.00-11.20', '11.30-12.50', '2.00-3.20','3.30-4.50', '5.-6.50',],
        tableTitle: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',],
        tableData: [
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ']
        ]
      }
      }
  
    render() {
      const state = this.state;
      return(
        <View style={styles.container}>
          <Table>
            <Row data={state.tableHead} flexArr={[2, 2, 2, 2, 2, 2, 2]} style={styles.head} textStyle={styles.text}/>
            <TableWrapper style={styles.wrapper}>
              <Col data={state.tableTitle} style={styles.title} heightArr={[50,28]} textStyle={styles.text}/>
              <Rows data={state.tableData} flexArr={[2, 2, 2, 2, 2, 2, 2]} style={styles.row} textStyle={styles.text}/>
            </TableWrapper>
          </Table>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text>
                Code : CSC 1100 ELEMENTS OF PROGRAMMING </Text>
                <Text>Section : 1 </Text>
                <Text>Credit Hour : 3 </Text>
                <Text>Lecturer : Dr Suriani binti Sulaiman </Text>
                <Text>Time : M-W  10-11.20 AM</Text>
                <Text>Venue : ICT Teach Lab 7 TL-D4-01</Text>
        </View>
      ); 
    }
  }
  
  export default DisplayScreen;
  
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
      row: {  
        height: 28  
        },
      text: { 
        textAlign: 'center' 
        }
    });