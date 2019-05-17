import React from 'react';
import {
  Keyboard, Clipboard, View, StyleSheet,
} from 'react-native';
import { withNamespaces } from 'react-i18next';
import {
  Button, IconButton, Text,
} from 'react-native-paper';
import loplop from 'loplop';
import ConfirmationDialog from './ConfirmationDialog';
import FormInput from './FormInput';
import ConfirmPasswordSwitch from './ConfirmPasswordSwitch';
import { colors } from '../styles/base';

const styles = StyleSheet.create({
  generatorContainer: {
    justifyContent: 'center',
    width: '80%',
    alignSelf: 'center',
  },
  innerContainer: {
    marginBottom: 30,
  },
  warning: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  warningMessage: {
    color: colors.warning,
  },
  icon: {
    marginHorizontal: 0,
  },
  submitButton: {
    alignSelf: 'center',
  },
  buttonContentStyle: {
    width: '100%',
    height: 40,
  },
});

class PasswordGenerator extends React.Component {
  state = {
    label: '',
    password: '',
    confirmPassword: '',
    generatedPassword: '',
    disabled: true,
    modalVisibility: false,
    passwordVisibility: false,
    labelVisibility: false,
    inputError: false,
    isNewPassword: false,
  };

  resetToggleSwitch = () => this.setState({ isNewPassword: false })

  handleToggleSwitch = () => this.setState(({ isNewPassword }) => ({
    isNewPassword: !isNewPassword,
  }), this.handleSubmitButtonState)

  showModal = () => this.setState({ modalVisibility: true });

  closeModal = () => this.setState({ modalVisibility: false });

  clearForm = () => this.setState({
    label: '',
    password: '',
    confirmPassword: '',
    passwordVisibility: false,
  }, this.handleSubmitButtonState)

  togglePasswordVisibility = () => {
    this.setState(prevState => ({ passwordVisibility: !prevState.passwordVisibility }));
  }

  toggleLabelVisibility = () => {
    this.setState(prevState => ({ labelVisibility: !prevState.labelVisibility }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      label, password, confirmPassword, isNewPassword,
    } = this.state;
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
    const {
      label, password, confirmPassword, isNewPassword,
    } = this.state;
    return ((isNewPassword && label && password && confirmPassword)
    || (!isNewPassword && label && password)) ? this.setState({ disabled: false }) : null;
  }

  generatePassword(type, password) {
    this.setState({ generatedPassword: loplop(type, password, 8) }, () => {
      const { generatedPassword } = this.state;
      this.addToClipboard(generatedPassword);
    });
    Keyboard.dismiss();
    this.showModal();
  }

  render() {
    const {
      generatedPassword,
      disabled,
      modalVisibility,
      inputError,
      label,
      password,
      confirmPassword,
      passwordVisibility,
      labelVisibility,
      isNewPassword,
    } = this.state;
    const { t } = this.props;

    return (
      <View style={styles.generatorContainer}>
        <View style={styles.innerContainer}>
          <FormInput
            value={label}
            componentType="label"
            prompt={t('nicknameLabel')}
            label={t('nickname')}
            handleChange={this.handleChange}
            handleNextInputFocus={this.handlePasswordFocus}
            handleInputVisibility={this.toggleLabelVisibility}
            visibility={labelVisibility}
            blurOnSubmit={false}
          />
          <FormInput
            value={password}
            componentType="password"
            prompt={t('masterPassword')}
            label={t('password')}
            handleChange={this.handleChange}
            handleNextInputFocus={this.handleConfirmPasswordFocus}
            inputRef={(input) => { this.passwordRef = input; }}
            handleInputVisibility={this.togglePasswordVisibility}
            visibility={passwordVisibility}
            blurOnSubmit={!isNewPassword}
          />
          <ConfirmPasswordSwitch 
            isNewPassword={isNewPassword}
          />
          { isNewPassword && (
          <>
            <FormInput
              value={confirmPassword}
              componentType="confirmPassword"
              label={t('confirmPassword')}
              error={inputError}
              handleChange={this.handleChange}
              inputRef={(input) => { this.confirmPasswordRef = input; }}
              visibility={passwordVisibility}
              blurOnSubmit
            />
            { inputError && (
              <View style={styles.warning}>
                <Text style={styles.warningMessage}>{t('warning')}</Text>
                <IconButton icon="warning" color={colors.warning} style={styles.icon} />
              </View>
            ) }
          </>
          )
      }
        </View>
        <Button
          testID="submit-create-password"
          onPress={this.handleSubmit}
          accessibilityLabel="PRESS TO CREATE ACCOUNT PASSWORD"
          disabled={disabled}
          mode="contained"
          dark
          style={styles.submitButton}
          contentStyle={styles.buttonContentStyle}
        >
          {t('submitMessage')}
        </Button>
        <ConfirmationDialog
          visible={modalVisibility}
          generatedPassword={generatedPassword}
          closeModal={this.closeModal}
          clearForm={this.clearForm}
          resetToggleSwitch={this.resetToggleSwitch}
        />
      </View>
    );
  }
}

export default withNamespaces('passwordGenerator')(PasswordGenerator);
export { PasswordGenerator as TestPasswordGenerator };
