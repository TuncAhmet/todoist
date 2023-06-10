import React, { useContext } from 'react'
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native'
import { TodoContext } from '../hooks/todoContext'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

const Form = () => {
  const { todoName, setTodoName, todoDesc, setTodoDesc, addTodo } =
    useContext(TodoContext)

  return (
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
          <Pressable>
            <MaterialCommunityIcons
              name="timer-outline"
              size={44}
              color="#7b97ea"
            />
          </Pressable>
          <Pressable>
            <MaterialIcons
              name="label-important-outline"
              size={44}
              color="#7b97ea"
            />
          </Pressable>
        </View>
        <Pressable
          android_ripple={{
            color: 'blue',
            borderRadius: 50,
            opacity: 0.5
          }}
          onPress={addTodo}
          style={styles.pressable}
        >
          <Text style={styles.pressableText}>Submit</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
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
    color: 'white',
    fontSize: 20
  }
})
