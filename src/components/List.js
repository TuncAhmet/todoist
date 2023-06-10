import { StyleSheet, View, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { TodoContext } from '../hooks/todoContext'

const List = () => {
  const { todoList, renderItem } = useContext(TodoContext)
  return (
    <View style={styles.todoList}>
      <FlatList
        data={todoList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
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
    flex: 1
  }
})
