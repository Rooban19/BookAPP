import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Login = props => {
  const signIn = async phoneNumber => {
    console.log(phoneNumber);
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    console.log(confirmation);
  };

  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Login</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          keyboardType="number-pad"
          placeholder="Phone number"
          onChangeText={val => val.length === 10 && signIn(val)}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
        />
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.loginButton}
          onPress={() => props.navigation.navigate('MainScreen')}
        >
          <Text style={{ fontSize: 29, color: 'white', fontWeight: 'bold' }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 45,
    justifyContent: 'center',
  },
  login: {
    //    backgroundColor: 'grey',
    height: HEIGHT / 12,
    marginTop: 35,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  input: {
    backgroundColor: 'white',
    width: WIDTH / 1.1,
    height: 45,
    borderRadius: 20,
    paddingLeft: 16,
    marginTop: 25,
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  inputContainer: {
    backgroundColor: null,
    height: HEIGHT / 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 25,
  },
  loginButton: {
    backgroundColor: '#000047',
    justifyContent: 'center',
    alignItems: 'center',
    width: WIDTH / 1.1,
    height: 50,
    borderRadius: 25,
  },
});
