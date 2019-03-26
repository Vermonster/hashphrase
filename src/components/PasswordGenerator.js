import React from 'react';
import {
  Keyboard, Clipboard, View, StyleSheet,
} from 'react-native';
import { withNamespaces } from 'react-i18next';
import { Button } from 'react-native-paper';
import loplop from 'loplop';
import ConfirmationDialog from './ConfirmationDialog';
import FormInput from './FormInput';

const styles = StyleSheet.create({
  generatorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    display: 'flex',
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
      inputError: false,
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
    if ((password && confirmPassword) && (password !== confirmPassword)) {
      this.setState({ inputError: true });
    } else {
      this.setState({ inputError: false }, () => this.generatePassword(label, password))}
  };

  addToClipboard = (password) => {
    Clipboard.setString(password);
  };

  handleChange = name => (e) => {
    const inputValue = e.nativeEvent.text;
    this.setState({ [name]: inputValue, inputError: false }, this.handleSubmitButtonState);
  }

  handleSubmitButtonState = () => {
    this.setState({ disabled: true });
    const { label, password, confirmPassword } = this.state;
    const { isNewPassword } = this.props;
    return ((isNewPassword && label && password && confirmPassword)
    || (!isNewPassword && label && password)) ? this.setState({ disabled: false }) : null;
  }

  generatePassword(type, password) {
    this.setState({ generatedPassword: loplop(type, password) }, () => {
      const { generatedPassword } = this.state;
      this.addToClipboard(generatedPassword);
    });
    Keyboard.dismiss();
    this.showModal();
  }

  render() {
    const {
      label, password, confirmPassword, generatedPassword, disabled, modalVisibility, inputError, 
    } = this.state;
    const { isNewPassword, showSnackbar, t } = this.props;

    return (
      <View style={styles.generatorContainer}>
        <FormInput
          componentType="label"
          placeholderText={t('label')}
          prompt={t('passwordLabel')}
          label={t('label')}
          handleChange={this.handleChange}
        />
        <FormInput
          componentType="password"
          placeholderText={t('password')}
          prompt={t('masterPassword')}
          label={t('password')}
          handleChange={this.handleChange}
        />
        { isNewPassword && (
          <FormInput
            componentType="confirmPassword"
            placeholderText={t('confirmPassword')}
            prompt={t('retypePassword')}
            label={t('confirmPassword')}
            error={inputError}
            handleChange={this.handleChange}
            style={styles.textInput}
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
