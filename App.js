/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button, TouchableOpacity } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  constructor() {
    super()
    array_num = []
    this.state = {
      resultText: "",
      sum_answer: 0
    }
  }

  buttonResult(text){
    initial_check = this.state.resultText

    if(text == "(A)"){
      array_num.push(4);
    }
    if(text == "(B+)"){
      array_num.push(3.5);
    }
    if(text == "(B)"){
      array_num.push(3);
    }
    if(text == "(C+)"){
      array_num.push(2.5);
    }
    if(text == "(C)"){
      array_num.push(2);
    }
    if(text == "(D)"){
      array_num.push(1);
    }
    if(text == "(F/FD)"){
      array_num.push(0);
    }

    if(initial_check == ''){
      this.setState({    
        resultText: this.state.resultText + text  
      })
    }
    else{
      this.setState({ 
        resultText: this.state.resultText + ' + ' + text
      })
    }
  }

  buttonClear(){
    array_num = []
    
    this.setState({
      resultText: "",
      sum_answer: 0
    })
  }

  buttonAdd(){
    sum = 0;
    for (i = 0; i < array_num.length; i++) {
      sum += array_num[i]
    }

    final_answer = sum / array_num.length
  
    var num = final_answer;
    var n = num.toFixed(2);
    
    this.setState({
      sum_answer: n
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
        <Text style={styles.calculationText}>{this.state.sum_answer}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <TouchableOpacity style={styles.btn} onPress={() => this.buttonResult("(A)")}><Text style={styles.btntxt}>A</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => this.buttonResult("(B+)")}><Text style={styles.btntxt}>B+</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => this.buttonResult("(B)")}><Text style={styles.btntxt}>B</Text></TouchableOpacity>              
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.btn} onPress={() => this.buttonResult("(C+)")}><Text style={styles.btntxt}>C+</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => this.buttonResult("(C)")}><Text style={styles.btntxt}>C</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => this.buttonResult("(D)")}><Text style={styles.btntxt}>D</Text></TouchableOpacity> 
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.btn} onPress={() => this.buttonResult("(F/FD)")}><Text style={styles.btntxt}>F/FD</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => this.buttonAdd()}><Text style={styles.btntxt}>=</Text></TouchableOpacity> 
              <TouchableOpacity style={styles.btn} onPress={() => this.buttonClear()}><Text style={styles.btntxt}>CLEAR</Text></TouchableOpacity> 
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  calculationText:{
    fontSize: 20,
    color: 'white'
  },
  resultText:{
    fontSize: 20,
    color: 'white'
  },
  btn:{
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  btntxt:{
    fontSize: 25,
  },
  row:{
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  result: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: 'gray'
  },
})
