import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

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

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
 },
});