import React, { createContext, useState } from 'react'
import ListItem from '../components/ListItem'

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

  const renderItem = ({ item }) => (
    <ListItem title={item.title} desc={item.desc} id={item.id} />
  )

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
