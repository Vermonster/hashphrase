import React, { Component } from 'react';
import {
  Snackbar,
  IconButton,
  Text,
} from 'react-native-paper';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  TouchableOpacity,
  Clipboard,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { withNamespaces } from 'react-i18next';
import LogoTitle from '../../components/LogoTitle';
import ScrollViewContainer from '../../components/ScrollViewContainer';
import PasswordGenerator from '../../components/PasswordGenerator';
import { colors } from '../../styles/base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 50,
  },
  snackbar: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.secondary,
  },
  flexLayout: {
    flex: 1,
  },
  clearClipboardButton: {
    alignItems: 'center',
    marginTop: 30,
  },
  clearClipboardText: {
    fontFamily: 'lato-regular',
    textDecorationLine: 'underline',
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
    snackbarVisibility: false,
  };

  showSnackbar = () => this.setState({ snackbarVisibility: true });

  hideSnackbar = () => this.setState({ snackbarVisibility: false });

  clearClipboard = () => {
    Clipboard.setString('');
    this.showSnackbar();
  }

  render() {
    const { t } = this.props;
    const {
      snackbarVisibility,
    } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollViewContainer>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.innerContainer}>
              <PasswordGenerator
                isNewPassword={isNewPassword}
                resetToggleSwitch={this.resetToggleSwitch}
              />
              <TouchableOpacity onPress={this.clearClipboard} style={styles.clearClipboardButton}>
                <Text style={styles.clearClipboardText}>{t('clearClipboardButton')}</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </ScrollViewContainer>
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
