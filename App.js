import { StatusBar } from 'expo-status-bar'
import { StyleSheet, SafeAreaView } from 'react-native'
import Home from './src/screen/Home'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
})
