import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Car from './components/Car';
import Mobil from './components/Mobil';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Car />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: "left",
    justifyContent: "left",
    
  },
});