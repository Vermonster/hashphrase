import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import Logo from '../styles/icons';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    width: '100%',
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    marginLeft: '2%',
  },
});

const LogoTitle = () => (
  <View style={styles.container}>
    <Logo />
    <Text style={styles.title}>Hashphrase</Text>
  </View>
);

export default LogoTitle;
