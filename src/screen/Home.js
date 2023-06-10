import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  FlatList
} from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

const Home = () => {
  const [todoName, setTodoName] = useState('')
  const [todoDesc, setTodoDesc] = useState('')
  const [todoList, setTodoList] = useState([])

  const renderItem = ({ item }) => (
    <View style={styles.todo}>
      <Text style={styles.todoTitle}>{item.title}</Text>
      <Text style={styles.todoDesc}>{item.desc}</Text>
    </View>
  )

  const onPressHandle = () => {
    if (todoName) {
      const todo = {
        title: todoName,
        desc: todoDesc
      }
      setTodoList([...todoList, todo])
      setTodoName('')
      setTodoDesc('')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formWrapper}>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.todoNameStyle}
            placeholder="Todo name"
            onChangeText={setTodoName}
            value={todoName}
          />
          <TextInput
            style={styles.todoDescStyle}
            placeholder="Todo description"
            onChangeText={setTodoDesc}
            value={todoDesc}
          />
        </View>
        <View style={styles.buttonArea}>
          <View style={styles.iconArea}>
            <MaterialCommunityIcons
              name="timer-outline"
              size={36}
              color="black"
            />
            <MaterialIcons
              name="label-important-outline"
              size={36}
              color="black"
            />
          </View>
          <Pressable onPress={onPressHandle} style={styles.pressable}>
            <Text style={styles.pressableText}>Submit</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.todoList}>
        <FlatList
          data={todoList}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          flexWrap="wrap"
          //   contentContainerStyle={{ paddingBottom: 20 }}
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
    height: '28%',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderBottomWidth: 1,
    borderColor: '#7b97ea',
    textAlign: 'center',
    marginTop: 16
  },
  inputArea: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  todoNameStyle: {
    marginLeft: 20,
    borderBottomWidth: 1,
    paddingTop: 16,
    fontSize: 24,
    color: 'lightgray'
  },
  todoDescStyle: {
    marginLeft: 20,
    borderBottomWidth: 1,
    paddingTop: 16,
    fontSize: 16,
    color: 'lightgray',
    width: '80%'
  },
  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: -30,
    width: '100%'
  },
  iconArea: {
    flexDirection: 'row',
    color: '#7b97ea',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '50%',
    marginTop: 16,
    marginLeft: -16
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
    alignItems: 'center',
    paddingBottom: 80,
    // backgroundColor: 'white'
    backgroundColor: '#7b97ea',
    borderTopWidth: 1
  },
  todo: {
    borderWidth: 1,
    borderRadius: 12,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginVertical: 16,
    minHeightheight: 40,
    minWidth: 300,
    padding: 12,
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
  }
})

export default Home
