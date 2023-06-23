import { StyleSheet, Text, View, FlatList,Image,Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getProducts } from './api';

const ProductList = () => {


    const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
    const data = await response.json();
    setPosts((prevPosts) => [...prevPosts, ...data]);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [page]);


  const renderSection = ({ item }) => (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
        User ID: {item.userId}
      </Text>
      {item.tasks.map(task => (
        <Text key={task.id}>{task.title}</Text>
      ))}
    </View>
  );

  const renderTodo = ({ item }) => (
    <Text>{item.title}</Text>
  );


    return (
        <View>
           <FlatList
      data={posts}
      keyExtractor={item => String(item.userId)}
      renderItem={renderSection}
    />
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({})