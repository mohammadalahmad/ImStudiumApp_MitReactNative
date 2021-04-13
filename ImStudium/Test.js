 
import React from 'react';
import { Text, View } from 'react-native';

const Greeting = (props) => {
    return (
      <View>
        <Text>Hello {props.name}!</Text>
      </View>
    );
}

export default Test = () => {
    return (
      <View>
        <Greeting name='Test1' />
        <Greeting name='Test2' />
        <Greeting name='Test3' />
      </View>
    );
}