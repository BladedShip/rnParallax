import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Parallax from './src/components/Parallax';

import layer2 from './assets/images/Parallax/2.png';
import layer3 from './assets/images/Parallax/3.png';
import layer4 from './assets/images/Parallax/4.png';
import layer5 from './assets/images/Parallax/5.png';

export default function App() {

  return (
    <View style={styles.container}>
      <Parallax layers={[layer2,layer3,layer4,layer5]}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
