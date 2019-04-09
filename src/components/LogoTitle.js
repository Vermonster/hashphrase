import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import Logo from '../styles/icons';

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    width: '50%',
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    marginLeft: 10,
  },
});

const LogoTitle = () => (
  <View style={styles.container}>
    <Logo style={styles.logo} />
    <Text style={styles.title}>Hashphrase</Text>
  </View>
);

export default LogoTitle;
