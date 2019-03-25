import React from 'react';
import {
  Keyboard, Clipboard, View, Text, StyleSheet,
} from 'react-native';
import { withNamespaces } from 'react-i18next';
import { TextInput, Button } from 'react-native-paper';
import loplop from 'loplop';
import ConfirmationDialog from './ConfirmationDialog';
import FormInput from './FormInput';
import { colors, fontSize } from '../styles/base';

const styles = StyleSheet.create({
  label: {
    alignSelf: 'center',
    fontSize: fontSize.lg,
  },
  textInput: {
    width: 330,
    backgroundColor: colors.white,
    marginTop: 10,
    marginBottom: 30,
    alignSelf: 'center',
  },
});

class PasswordGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      password: '',
      confirmPassword: '',
      generatedPassword: '',
      disabled: true,
      modalVisibility: false,
    };
  }

  componentDidUpdate(prevProps) {
    const { isNewPassword } = this.props;
    if (isNewPassword !== prevProps.isNewPassword) {
      this.handleSubmitButtonState();
    }
  }

  showModal = () => this.setState({ modalVisibility: true });

  closeModal = () => this.setState({ modalVisibility: false });

  handleSubmit = (e) => {
    e.preventDefault();
    const { label, password, confirmPassword } = this.state;
    const { isNewPassword } = this.props;
    if (isNewPassword && (password !== confirmPassword)) return null;
    return this.generatePassword(label, password);
  };

  addToClipboard = (password) => {
    Clipboard.setString(password);
  };

  handleChange = name => (e) => {
    const inputValue = e.nativeEvent.text;
    this.setState({ [name]: inputValue }, this.handleSubmitButtonState);
  }

  handleSubmitButtonState = () => {
    this.setState({ disabled: true });
    const { label, password, confirmPassword } = this.state;
    const { isNewPassword } = this.props;
    return ((isNewPassword && label && password && confirmPassword)
    || (!isNewPassword && label && password)) ? this.setState({ disabled: false }) : null;
  }

  generatePassword(label, password) {
    this.setState({ generatedPassword: loplop(label, password) }, () => {
      const { generatedPassword } = this.state;
      this.addToClipboard(generatedPassword);
    });
    Keyboard.dismiss();
    this.showModal();
  }

  render() {
    const {
      generatedPassword, disabled, modalVisibility,
    } = this.state;
    const { isNewPassword, showSnackbar, t } = this.props;

    return (
      <View>
        <FormInput
          name="label"
          className="label"
          placeholder={t('label')}
          handleChange={this.handleChange}
        />
        <FormInput
          name="password"
          className="password"
          placeholder={t('password')}
          handleChange={this.handleChange}
        />
        { isNewPassword && (
          <FormInput
            name="password"
            className="confirmPassword"
            placeholder={t('confirmPassword')}
            handleChange={this.handleChange}
          />
        )
        }
        <Button
          testID="submit-create-password"
          onPress={this.handleSubmit}
          accessibilityLabel="CREATE ACCOUNT PASSWORD BUTTON"
          disabled={disabled}
          mode="contained"
          dark
        >
          {t('submitMessage')}
        </Button>
        <ConfirmationDialog
          visible={modalVisibility}
          generatedPassword={generatedPassword}
          closeModal={this.closeModal}
          showSnackbar={showSnackbar}
        />
      </View>
    );
  }
}

export default withNamespaces('passwordGenerator')(PasswordGenerator);

export { PasswordGenerator as TestPasswordGenerator };
