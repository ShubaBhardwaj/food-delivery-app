import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/components/tab';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <TabNavigator />
        <StatusBar style="dark" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
