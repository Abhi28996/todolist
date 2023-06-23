import React, { useEffect, useState } from 'react';
import { View, Text, SectionList, StyleSheet, SafeAreaView } from 'react-native';
import  { MemoizedMyFlatList } from '../component/List';
import { getList } from '../api';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {

    callApiData()
  }, []);


  const callApiData = async () => {

    const data = await getList();
    console.log(data);
    setTodos(data);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MemoizedMyFlatList data={todos} />
    </SafeAreaView>

  );
};



export default TodoList;
