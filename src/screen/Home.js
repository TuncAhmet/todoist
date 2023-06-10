import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import Form from '../components/Form'
import List from '../components/List'
import { TodoProvider } from '../hooks/todoContext'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TodoProvider>
        <Form />
        <List />
      </TodoProvider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  }
})

export default Home
