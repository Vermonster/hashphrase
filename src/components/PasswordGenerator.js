import React from 'react';
import {
  Keyboard, Clipboard, View, StyleSheet, Text,
} from 'react-native';
import { withNamespaces } from 'react-i18next';
import { Button, IconButton } from 'react-native-paper';
import loplop from 'loplop';
import ConfirmationDialog from './ConfirmationDialog';
import FormInput from './FormInput';
import { colors, rowCenter } from '../styles/base';

const styles = StyleSheet.create({
  generatorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
  },
  icon: {
    marginHorizontal: 0,
  },
});

class PasswordGenerator extends React.Component {
  inputs = {};

  state = {
    label: '',
    password: '',
    confirmPassword: '',
    generatedPassword: '',
    disabled: true,
    modalVisibility: false,
    inputError: false,
  };

  componentDidUpdate(prevProps) {
    const { isNewPassword } = this.props;
    if (isNewPassword !== prevProps.isNewPassword) {
      this.handleSubmitButtonState();
    }
  }

  showModal = () => this.setState({ modalVisibility: true });

  closeModal = () => this.setState({ modalVisibility: false });

  clearInputs = () => this.setState({ label: '', password: '', confirmPassword: '' })

  handleSubmit = (e) => {
    e.preventDefault();
    const { label, password, confirmPassword } = this.state;
    const { isNewPassword } = this.props;
    if (isNewPassword && (password !== confirmPassword)) {
      this.setState({ inputError: true });
    } else {
      this.setState({ inputError: false }, this.generatePassword(label, password));
    }
  };

  addToClipboard = (password) => {
    Clipboard.setString(password);
  };

  handleChange = name => (e) => {
    const inputValue = e.nativeEvent.text;
    this.setState({ [name]: inputValue, inputError: false }, this.handleSubmitButtonState);
  }

  handlePasswordFocus = () => {
    this.passwordRef.focus();
  }

  handleConfirmPasswordFocus = () => {
    if (this.confirmPasswordRef) {
      this.confirmPasswordRef.focus();
    }
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
      generatedPassword, disabled, modalVisibility, inputError, label, password, confirmPassword,
    } = this.state;
    const { isNewPassword, showSnackbar, t } = this.props;

    return (
      <View style={styles.generatorContainer}>
        <FormInput
          value={label}
          componentType="label"
          placeholderText={t('label')}
          prompt={t('passwordLabel')}
          label={t('label')}
          handleChange={this.handleChange}
          handleInputFocus={this.handlePasswordFocus}
        />
        <FormInput
          value={password}
          componentType="password"
          placeholderText={t('password')}
          prompt={t('masterPassword')}
          label={t('password')}
          handleChange={this.handleChange}
          handleInputFocus={this.handleConfirmPasswordFocus}
          inputRef={(input) => { this.passwordRef = input; }}
        />
        { isNewPassword && (
          <>
            <FormInput
              value={confirmPassword}
              componentType="confirmPassword"
              placeholderText={t('confirmPassword')}
              prompt={t('retypePassword')}
              label={t('confirmPassword')}
              error={inputError}
              handleChange={this.handleChange}
              inputRef={(input) => { this.confirmPasswordRef = input; }}
            />
            { inputError && (
              <View style={[rowCenter, styles.warning]}>
                <Text style={{ color: colors.warning }}>{t('warning')}</Text>
                <IconButton icon="warning" color={colors.warning} style={styles.icon} />
              </View>
            )
            }
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
          style={{ marginTop: '5%' }}
        >
          {t('submitMessage')}
        </Button>
        <ConfirmationDialog
          visible={modalVisibility}
          generatedPassword={generatedPassword}
          closeModal={this.closeModal}
          showSnackbar={showSnackbar}
          clearInputs={this.clearInputs}
        />
      </View>
    );
  }
}

export default withNamespaces('passwordGenerator')(PasswordGenerator);

export { PasswordGenerator as TestPasswordGenerator };
