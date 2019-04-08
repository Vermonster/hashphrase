import React, { Component } from 'react';
import { Switch, Appbar, Snackbar } from 'react-native-paper';
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
  header: {
    backgroundColor: colors.white,
    zIndex: 100,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
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
  flexLayout: {
    flex: 1,
  },
});

class CreateNewPassword extends Component {
 static navigationOptions = ({ navigation }) => ({
   headerTitle: ( <LogoTitle /> ),
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
    const { t, navigation } = this.props;
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
