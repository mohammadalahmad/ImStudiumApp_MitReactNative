 import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Test from './Test'

const Test2 = (props) => {
   return (
      <View>
         <Text>
            {props.myState}
         </Text>
      </View>
   )
}

export default Test2