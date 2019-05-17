import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { withNamespaces } from 'react-i18next';

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

const Footer = ({ navigation, t }) => (
  <View style={styles.footerRow}>
    <View style={styles.versionContainer}>
      <Text style={styles.version}>{t('version')}</Text>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('PolicyPage')}>
      <Text style={styles.privacyPolicy}>{t('privacyPolicy')}</Text>
    </TouchableOpacity>
  </View>
);
export default withNamespaces('footer')(Footer);
