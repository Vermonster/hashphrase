import React, { Component } from 'react';
import { Switch, Snackbar, IconButton } from 'react-native-paper';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
} from 'react-native';
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
    marginTop: '20%',
    marginBottom: '10%',
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
    headerRight: (
      <IconButton
        icon="info"
        color={colors.primary}
        onPress={() => navigation.navigate('TipsPage')}
      />
    ),
  });

state = {
  isNewPassword: false,
  snackbarVisibility: false,
};

handleToggleSwitch = () => this.setState(({ isNewPassword }) => ({
  isNewPassword: !isNewPassword,
}))

  showSnackbar = () => this.setState({ snackbarVisibility: true });

  hideSnackbar = () => this.setState({ snackbarVisibility: false });

  render() {
    const { t } = this.props;
    const { isNewPassword, snackbarVisibility } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={100}
          style={styles.flexLayout}
        >
          <ScrollView style={styles.flexLayout} keyboardShouldPersistTaps="always">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.innerContainer}>
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
                <View style={styles.flexLayout} />
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
