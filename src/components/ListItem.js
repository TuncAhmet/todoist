import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { TodoContext } from '../hooks/todoContext'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ListItem = ({ title, desc, id }) => {
  const { deleteTodo } = useContext(TodoContext)

  const handleDelete = () => {
    deleteTodo(id)
  }

  return (
    <View style={styles.todo}>
      <View style={styles.textArea}>
        <Text style={styles.todoTitle}>{title}</Text>
        <Text style={styles.todoDesc}>{desc}</Text>
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

export default ListItem

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
