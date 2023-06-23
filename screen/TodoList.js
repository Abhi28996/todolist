import React, { useEffect, useState } from 'react';
import { View, Text, SectionList, StyleSheet, SafeAreaView ,ActivityIndicator} from 'react-native';
import { getList } from '../api/api';
import { MemoizedMyFlatList } from '../component/List';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [status,setStatus] =useState(false)

  useEffect(() => {
     //Calling Api

    callApiData()
  }, []);


  const callApiData = async () => {
    setStatus(true)
    const data = await getList();
    setStatus(false)
    setTodos(data);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ActivityIndicator animating={status} size="large"/>
      <MemoizedMyFlatList data={todos} />
    </SafeAreaView>

  );
};



export default TodoList;
