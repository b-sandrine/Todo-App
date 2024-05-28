import { StatusBar } from 'expo-status-bar';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import ToDoItem from './components/ToDoItem';
import AddToDO from './components/AddToDO';
import { useState } from 'react';


export default function App() {

  const [todos, setTodos] = useState([
    { text: 'Buy groceries', key: '1' },
    { text: 'Make dinner', key: '2' },
    { text: 'Do laundry', key: '3' }
  ])

  const addTodos = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ]
      })
    }
    else {
      Alert.alert('OOPS', 'Todos must be over 3 characters long', [
        { text: 'Understood', onPress: () => console.log('alert closed') }
      ])
    }
  }

  const deleteTodos = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key !== key)
    })
  }

  return (
    <View style={styles.container}>
      <AddToDO addTodos ={addTodos} />
      <View style={styles.list}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <ToDoItem item={item} deleteTodos={deleteTodos} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal: 20,
  },
  list: {
    marginTop: 20
  }
});
