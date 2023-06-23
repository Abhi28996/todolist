import { StyleSheet, Text, View,Dimensions,ScrollView,TextInput,Button } from 'react-native'
import React, { useContext, useMemo, useState } from 'react'
import { MyContext } from './ContextProvider';
import TestComponent from './TestComponent';
import Memoized from './TestComponent';

const HomeScreen = ({navigation}) => {
 
  const { width } = Dimensions.get('window');
  const scaleFactor = width / 320; // Define a scaling factor based on device width
  const [firstName,setFirstName] = useState('firstName');
  const [lastName ,setLastName] = useState('lastName');
  const [study,setStudy] = useState('study');
  const [age,setAge] = useState('age');
  const [city,setCity] = useState('city');
  const [state,setState] = useState('state');

  const [list, setList] = useState([
    {
      name: 'John Doe',
      age: 30,
    },
    {
      name: 'Jane Doe',
      age: 25,
    },
  ]);

  const expensiveCalculation = (item) => {
    // Do some expensive calculation here
    return item.name + ' is ' + item.age + ' years old.';
  };

  const memoizedExpensiveCalculations = useMemo(() => {
    const calculations = list.map(expensiveCalculation);
    return calculations;
  }, [list]);

  return (
    <View>
      {memoizedExpensiveCalculations.map((calculation, index) => (
        <Text key={index}>
          {calculation}
        </Text>
      ))}
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({})