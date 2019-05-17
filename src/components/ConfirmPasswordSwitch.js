import React from 'react';
import { withNamespaces } from 'react-i18next';
import { View, StyleSheet } from 'react-native';
import { Text, Switch } from 'react-native-paper';
import { colors } from '../styles/base';

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginTop: 10,
  },
  switch: {
    marginLeft: 10,
  },
});

const handleToggleSwitch = () => this.setState(({ isNewPassword }) => ({
  isNewPassword: !isNewPassword,
}), this.handleSubmitButtonState);

const ConfirmPasswordSwitch = ({ isNewPassword, t }) => (
  <View style={styles.switchRow}>
    <Text>{t('confirmSwitch')}</Text>
    <Switch
      value={isNewPassword}
      onValueChange={handleToggleSwitch}
      color={colors.primary}
      style={styles.switch}
    />
  </View>
);

export default withNamespaces('passwordGenerator')(ConfirmPasswordSwitch);
