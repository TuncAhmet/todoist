import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListItem = ({ title, desc, id }) => {
  return (
    <View>
      <View style={styles.todo}>
        <Text style={styles.todoTitle}>{title}</Text>
        <Text style={styles.todoDesc}>{desc}</Text>
        {/* <Text>{item.id}</Text> */}
      </View>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
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
