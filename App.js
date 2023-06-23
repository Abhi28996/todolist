import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet,SafeAreaView, Text, TextInput, View, Dimensions } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MemoizedMyFlatList } from './component/List';
import TodoList from './screen/TodoList';

export default function App() {

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <TodoList/>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({

  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 30 : 0,

    backgroundColor: "#F0F0F0"
  },
})
