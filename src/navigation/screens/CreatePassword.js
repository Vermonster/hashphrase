import React, { Component } from 'react';
import {
  Switch,
  Snackbar,
  IconButton,
  Text,
} from 'react-native-paper';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Clipboard,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { withNamespaces } from 'react-i18next';
import LogoTitle from '../../components/LogoTitle';
import PasswordGenerator from '../../components/PasswordGenerator';
import { colors, rowCenter, fontSize } from '../../styles/base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  newPass: {
    ...rowCenter,
  },
  newPassLabel: {
    fontSize: fontSize.lg,
    marginRight: '2%',
  },
  snackbar: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.secondary,
  },
  flexLayout: {
    flex: 1,
  },
});

class CreateNewPassword extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <LogoTitle />,
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0.8,
      borderBottomWidth: 0,
      shadowColor: colors.tipsPageBorder,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 3 },
      backgroundColor: colors.secondary,
    },
    headerRight: (
      <IconButton
        icon="help"
        size={30}
        color={colors.primary}
        onPress={() => navigation.navigate('TipsPage')}
      />
    ),
  });

  state = {
    isNewPassword: false,
    snackbarVisibility: false,
    clearClipboardVisibility: false,
  };

  showSnackbar = () => this.setState({ snackbarVisibility: true });

  hideSnackbar = () => this.setState({ snackbarVisibility: false });

  handleToggleSwitch = () => this.setState(({ isNewPassword }) => ({
    isNewPassword: !isNewPassword,
  }))

  toggleClearClipboard = () => this.setState(({ clearClipboardVisibility }) => ({
    clearClipboardVisibility: !clearClipboardVisibility,
  }))

  clearClipboard = () => {
    Clipboard.setString('');
    this.showSnackbar();
    this.toggleClearClipboard();
  }

  resetToggleSwitch = () => this.setState({ isNewPassword: false })

  render() {
    const { t } = this.props;
    const {
      isNewPassword,
      snackbarVisibility,
      clearClipboardVisibility,
    } = this.state;

    return (
      <SafeAreaView
        style={styles.container}
        onLayout={this.onLayout}
      >
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={100}
          style={styles.flexLayout}
        >
          <ScrollView style={styles.flexLayout} keyboardShouldPersistTaps="always">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.innerContainer}>
                <View
                  style={styles.newPass}
                >
                  <Text style={styles.newPassLabel}>{t('newPassword')}</Text>
                  <Switch
                    value={isNewPassword}
                    onValueChange={this.handleToggleSwitch}
                    color={colors.primary}
                  />
                </View>
                <PasswordGenerator
                  isNewPassword={isNewPassword}
                  toggleClearClipboard={this.toggleClearClipboard}
                  resetToggleSwitch={this.resetToggleSwitch}
                />
                { clearClipboardVisibility && (
                  <TouchableOpacity onPress={this.clearClipboard}>
                    <Text>Clear Clipboard</Text>
                  </TouchableOpacity>
                ) }
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </KeyboardAvoidingView>
        <Snackbar
          visible={snackbarVisibility}
          onDismiss={this.hideSnackbar}
          duration={2000}
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
