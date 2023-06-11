import React, { useContext } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { TodoContext } from '../hooks/todoContext'
import ListItem from './ListItem'

const List = () => {
  const { todoList, renderItem } = useContext(TodoContext)

  return (
    <View style={styles.todoList}>
      <FlatList
        data={todoList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default List

const styles = StyleSheet.create({
  todoList: {
    width: '100%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 80,
    // backgroundColor: 'white'
    backgroundColor: '#7b97ea',
    borderTopWidth: 1,
    borderColor: '#7b97ea',
    flex: 1,
    maxHeight: '100%',
    maxWidth: '100%'
  }
})
