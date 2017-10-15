import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import Login from './components/login'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'Username',
      password: 'Password'
   };
  }

  render() {
    return (
      <LinearGradient colors={['#171A2C', '#F0318B']} style={styles.linearGradient}>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={styles.logoText}>Walk2Cash</Text>
          <TextInput style={styles.inputText}
          onChangeText={(username) => this.setState({username})}
          placeholder={this.state.username} placeholderTextColor='rgba(255, 255, 255, 0.7)' />

          <TextInput style={styles.inputText}
          onChangeText={(password) => this.setState({password})}
          placeholder={this.state.password} placeholderTextColor='rgba(255, 255, 255, 0.7)' />

          <View style={styles.loginButton}>
            <Text style={{textAlign: 'center', backgroundColor: 'transparent', fontSize: 18, color: '#F0318B'}}>Login</Text>
          </View>
          <View style={styles.signUpButton}>
            <Text style={{textAlign: 'center', backgroundColor: 'transparent', fontSize: 18, color: 'white'}}>Sign Up</Text>
          </View>
        </View>
    </LinearGradient>
    )
  }
}

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  logoText: {
    fontSize: 40,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent'
  },
  inputText: {
    height: 40,
    width: '80%',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  loginButton: {
    marginTop: 30,
    borderRadius: 50,
    height:28,
    width: '80%',
    textAlign: 'center',
    backgroundColor:'white',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  signUpButton: {
    marginTop: 15,
    borderRadius: 50,
    height:28,
    width: '80%',
    textAlign: 'center',
    borderRadius:10,
    borderWidth: 2,
    borderColor: '#fff'
  },
})
