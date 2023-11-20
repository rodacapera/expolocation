import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import GeoSwitch from './components/geolocation/GeoSwitch';

export default function App() {
  const api = 'https://jsonplaceholder.typicode.com/posts/';
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <GeoSwitch endPoint={api} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
});
