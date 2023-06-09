import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  FlatList,
  TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'

const Home = () => {
  const [todoName, setTodoName] = useState('')
  const [todoList, setTodoList] = useState([])

  const renderItem = ({ item }) => (
    <View style={styles.todo}>
      <Text style={styles.todoTitle}>{item}</Text>
    </View>
  )

  const onPressHandle = () => {
    if (todoName) {
      setTodoList([...todoList, todoName])
      setTodoName('')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formWrapper}>
        <TextInput
          style={styles.textInput}
          placeholder="Todo name"
          onChangeText={setTodoName}
          value={todoName}
        />
        <Pressable onPress={onPressHandle} style={styles.pressable}>
          <Text style={styles.pressableText}>Submit</Text>
        </Pressable>
      </View>
      <View style={styles.todoList}>
        <FlatList
          data={todoList}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          flexWrap="wrap"
        />
      </View>
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
  },
  formWrapper: {
    padding: 24,
    width: '100%',
    height: '25%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#7b97ea',
    textAlign: 'center'
  },
  textInput: {
    marginLeft: 20,
    borderBottomWidth: 1,
    paddingTop: 16,
    fontSize: 24,
    color: 'lightgray'
  },
  pressable: {
    backgroundColor: '#7b97ea',
    marginRight: 20,
    padding: 16,
    marginTop: 16,
    borderRadius: 8
  },
  pressableText: {
    color: 'white'
  },
  todoList: {
    width: '100%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  todo: {
    borderWidth: 1,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
    minHeightheight: 40,
    minWidth: 20
  },
  todoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 16,
    padding: 12
  }
})

export default Home
