import React, { createContext, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

// Create a new context
export const TodoContext = createContext()

// Create a provider component
export const TodoProvider = ({ children }) => {
  const [todoName, setTodoName] = useState('')
  const [todoDesc, setTodoDesc] = useState('')
  const [todoList, setTodoList] = useState([])

  const addTodo = () => {
    if (todoName && todoDesc) {
      const todo = {
        title: todoName,
        desc: todoDesc,
        id: todoList.length
      }
      setTodoList([...todoList, todo])
      setTodoName('')
      setTodoDesc('')
    }
  }

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id))
  }

  const renderItem = ({ item }) => {
    const handleDelete = () => {
      deleteTodo(item.id)
    }
    return (
      <View style={styles.todo}>
        <View style={styles.textArea}>
          <Text style={styles.todoTitle}>{item.title}</Text>
          <Text style={styles.todoDesc}>{item.desc}</Text>
        </View>
        {/* <Text>{item.id}</Text> */}
        <View style={styles.iconArea}>
          <Pressable style={styles.icon}>
            <MaterialCommunityIcons
              name="circle-edit-outline"
              size={36}
              color="gray"
            />
          </Pressable>
          <Pressable style={styles.icon} onPress={handleDelete}>
            <MaterialCommunityIcons
              name="delete-circle-outline"
              size={36}
              color="black"
            />
          </Pressable>
        </View>
      </View>
    )
  }

  // Provide the state and functions to the child components
  const value = {
    todoName,
    setTodoName,
    todoDesc,
    setTodoDesc,
    todoList,
    addTodo,
    renderItem,
    deleteTodo
  }

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

const styles = StyleSheet.create({
  todo: {
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginVertical: 16,
    minHeight: 40,
    minWidth: 300,
    padding: 12,
    maxWidth: '100%',
    maxHeight: '100%',
    backgroundColor: 'white'
  },
  todoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 12
  },
  todoDesc: {
    fontSize: 16,
    fontWeight: 'normal',
    padding: 4,
    marginLeft: 8
  },
  iconArea: {
    width: '40%',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  },
  icon: {
    marginVertical: 4
  }
})
