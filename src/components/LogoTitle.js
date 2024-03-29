import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import Logo from '../styles/logo';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    width: '100%',
    flex: 1,
    flexDirection: 'row',
  },
});

const LogoTitle = () => (
  <View style={styles.container}>
    <Logo />
  </View>
);

export default LogoTitle;
