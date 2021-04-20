import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';

const { width, height } = Dimensions.get('window');

const Main = props => {
  const [author, setauthor] = useState('');
  const [title, settitle] = useState('');

  const search = async isbn => {
    const response = await fetch(`https://openlibrary.org/isbn/${isbn}.json`);
    const resData = await response.json();
    setauthor(resData.title);
    settitle(resData.publishers[0]);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        height: height,
        width: width,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          marginTop: 55,
          fontSize: 25,
          fontWeight: 'bold',
        }}
      >
        Library management system
      </Text>
      <Text style={{ textAlign: 'center', marginTop: 50, fontSize: 20 }}>
        Enter the ISBN number to search
      </Text>
      <View style={{ width: width, alignItems: 'center', marginTop: 50 }}>
        <TextInput
          style={{
            width: width / 1.2,
            //backgroundColor: 'grey',
            height: 50,
            borderColor: 'black',
            borderWidth: 0.5,
            fontSize: 20,
            paddingLeft: 5,
            borderRadius: 20,
          }}
          keyboardType="number-pad"
          returnKeyType="search"
          onEndEditing={e => search(parseInt(e.nativeEvent.text))}
        />
      </View>
      <View
        style={{
          // backgroundColor: 'grey',
          alignItems: 'center',
          marginTop: 25,
          height: '15%',
          justifyContent: 'space-evenly',
        }}
      >
        <Text style={{ fontSize: 20 }}>{author}</Text>
        <Text style={{ fontSize: 20 }}>{title}</Text>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
