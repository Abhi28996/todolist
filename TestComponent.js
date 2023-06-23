import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TestComponent = ({prop1,prop2}) => {

console.log(prop1)

return (
    <View>
      <Text>{prop1}</Text>
      <Text>{prop2}</Text>

    </View>
  )
}

const Memoized = React.memo(TestComponent)
export default Memoized

const styles = StyleSheet.create({})