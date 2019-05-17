import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const styles = StyleSheet.create({
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '8%',
  },
  versionContainer: {
    borderRightWidth: 1,
    marginRight: '2%',
  },
  version: {
    marginRight: '2%',
  },
  privacyPolicy: {
    textDecorationLine: 'underline',
  },
});

const Footer = ({ navigation }) => (
  <View style={styles.footerRow}>
    <View style={styles.versionContainer}>
      <Text style={styles.version}>Version 1.0.0</Text>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('PolicyPage')}>
      <Text style={styles.privacyPolicy}>Privacy Policy</Text>
    </TouchableOpacity>
  </View>
);
export default Footer;
