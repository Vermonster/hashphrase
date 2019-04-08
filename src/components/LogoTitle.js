import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import Logo from '../styles/icons';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  logo: {
    alignSelf: 'flex-start',
  }
})

export default class LogoTitle extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo style={styles.logo} />
        <Text>Hashphrase</Text>
      </View>
    );
  }
}
