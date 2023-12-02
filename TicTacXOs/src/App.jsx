import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import HomeScreen from './HomeScreen';
import EnterName from './EnterName';
import HowToPlay from './HowToPlay';
import InGame from './InGame';


export default function App() {
 return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
      <EnterName />
      <HowToPlay />
      <InGame />
    </SafeAreaView>
 );
}