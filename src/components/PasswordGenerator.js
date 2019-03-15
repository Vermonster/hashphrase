import React from 'react';
import {
  Keyboard, Clipboard, View, Text,
} from 'react-native';
import { withNamespaces } from 'react-i18next';
import { TextInput, Button } from 'react-native-paper';
import loplop from 'loplop';
import ConfirmationDialog from './ConfirmationDialog';

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
      label, password, confirmPassword, generatedPassword, disabled, modalVisibility,
    } = this.state;
    const { isNewPassword, t } = this.props;

    return (
      <View>
        <Text>{t('passwordLabel')}</Text>
        <TextInput
          value={label}
          placeholder={t('label')}
          label="Nickname"
          textContentType="username"
          onChange={this.handleChange('label')}
        />
        <Text>{t('masterPassword')}</Text>
        <TextInput
          value={password}
          placeholder={t('password')}
          label="Master Password"
          textContentType="password"
          secureTextEntry
          onChange={this.handleChange('password')}
        />
        { isNewPassword && (
          <>
            <Text>{t('confirmPassword')}</Text>
            <TextInput
              value={confirmPassword}
              placeholder={t('confirmPassword')}
              label="Confirm Master Password"
              textContentType="password"
              oneTimeCode
              secureTextEntry
              onChange={this.handleChange('confirmPassword')}
            />
          </>
        )
        }
        <Button
          testID="submit-create-password"
          onPress={this.handleSubmit}
          accessibilityLabel="CREATE ACCOUNT PASSWORD BUTTON"
          disabled={disabled}
          mode="contained"
          dark
          color="#D37F26"
        >
          {t('submitMessage')}
        </Button>
        <ConfirmationDialog
          visible={modalVisibility}
          generatedPassword={generatedPassword}
          closeModal={this.closeModal}
        />
      </View>
    );
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
export { PasswordGenerator as TestPasswordGenerator };

export default withNamespaces('passwordGenerator')(PasswordGenerator);
<<<<<<< HEAD
=======
=======
export { PasswordGenerator as TestPasswordGenerator };

>>>>>>> export components without i18n providers for testing
export default withNamespaces()(PasswordGenerator);
>>>>>>> update components with correct translation functions
=======
>>>>>>> namespace translations by component
