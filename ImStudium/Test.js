 
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
        <Greeting name='Rexxarss' />
        <Greeting name='Jainsa' />
        <Greeting name='Valeera' />
      </View>
    );
}