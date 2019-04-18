import React, { Component } from 'react';
import { Switch, Snackbar, IconButton } from 'react-native-paper';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  Dimensions,
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
    height: Dimensions.get('window').height,
  };

  onLayout = () => {
    const { height } = Dimensions.get('screen');
    this.setState({ height });
  }

  handleToggleSwitch = () => this.setState(({ isNewPassword }) => ({
    isNewPassword: !isNewPassword,
  }))

  showSnackbar = () => this.setState({ snackbarVisibility: true });

  hideSnackbar = () => this.setState({ snackbarVisibility: false });

  render() {
    const { t } = this.props;
    const {
      isNewPassword,
      snackbarVisibility,
      height,
    } = this.state;

    const marginTopValue = Math.floor(height * (0.15));
    const marginBottomValue = Math.floor(height * (0.1));

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
                  style={[styles.newPass,
                    { marginTop: marginTopValue, marginBottom: marginBottomValue }]
                  }
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
