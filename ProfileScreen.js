import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileScreen = ({route}) => {
 

    const {name,age} =  route.params;
   
  return (
    <View>
      <Text>Name {name}  age {age} </Text>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})