import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

const Footer = ({ navigation }) => (
  <View style={{
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '8%',
  }}
  >
    <View style={{ borderRightWidth: 1, marginRight: '2%' }}>
      <Text style={{ marginRight: '2%' }}>Version 1.0.0</Text>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('PolicyPage')}>
      <Text style={{ textDecorationLine: 'underline' }}>Privacy Policy</Text>
    </TouchableOpacity>
  </View>
);
export default Footer;
