import React, { Component } from 'react';
import { Switch, Appbar, Snackbar } from 'react-native-paper';
import {
  View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView,
} from 'react-native';
import { withNamespaces } from 'react-i18next';
import Logo from '../../styles/icons';
import PasswordGenerator from '../../components/PasswordGenerator';
import { colors, rowCenter, fontSize } from '../../styles/base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.white,
    zIndex: 100,
  },
  newPass: {
    ...rowCenter,
    marginVertical: 32,

  },
  logo: {
    ...StyleSheet.absoluteFill,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  newPassLabel: {
    fontSize: fontSize.lg,
  },
  snackbar: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.secondary,
  },
});

class CreateNewPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNewPassword: false,
      snackbarVisibility: false,
    };
  }

  handleToggleSwitch = () => this.setState(({ isNewPassword }) => ({
    isNewPassword: !isNewPassword,
  }))

  showSnackbar = () => this.setState({ snackbarVisibility: true });

  hideSnackbar = () => this.setState({ snackbarVisibility: false });

  render() {
    const { t, navigation } = this.props;
    const { isNewPassword, snackbarVisibility } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Appbar.Header style={styles.header}>
          <View style={styles.logo}>
            <Logo />
          </View>
          <Appbar.Content title={t('title')} />
          <Appbar.Action icon="info" color={colors.primary} size={28} onPress={() => navigation.navigate('TipsPage')} />
        </Appbar.Header>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={{ flex: 1, overflow: "hidden" }}
        >
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={{ justifyContent: 'flex-end', flex: 1 }}>
                <View style={styles.newPass}>
                  <Text style={styles.newPassLabel}>{t('newPassword')}</Text>
                  <Switch
                    value={isNewPassword}
                    onValueChange={this.handleToggleSwitch}
                    color={colors.primary}
                  />
                </View>
                <PasswordGenerator
                  isNewPassword={isNewPassword}
                  showSnackbar={this.showSnackbar}
                />
                <View style={{ flex: 1 }} />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </KeyboardAvoidingView>
        <Snackbar
          visible={snackbarVisibility}
          onDismiss={this.hideSnackbar}
          duration={4000}
          style={styles.snackbar}
        >
          {t('clipboardCleared')}
        </Snackbar>
      </SafeAreaView>
    );
  }
}

export default withNamespaces('createPassword')(CreateNewPassword);
export { CreateNewPassword as TestCreatePassword };
