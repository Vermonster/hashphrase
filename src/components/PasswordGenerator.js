import React from 'react';
import {
  Keyboard, Clipboard, View, StyleSheet,
} from 'react-native';
import { withNamespaces } from 'react-i18next';
import {
  Button, IconButton, Text, Switch,
} from 'react-native-paper';
import loplop from 'loplop';
import ConfirmationDialog from './ConfirmationDialog';
import FormInput from './FormInput';
import { colors } from '../styles/base';

const styles = StyleSheet.create({
  generatorContainer: {
    justifyContent: 'center',
    width: '80%',
    alignSelf: 'center',
  },
  warning: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 0,
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
        <View style={{ marginBottom: 30 }}>
          <FormInput
            value={label}
            componentType="label"
            placeholderText={isNewPassword ? t('firstNickname') : null}
            prompt={t('nicknameLabel')}
            label={t('nickname')}
            handleChange={this.handleChange}
            handleInputFocus={this.handlePasswordFocus}
            handleInputVisibility={this.toggleLabelVisibility}
            visibility={labelVisibility}
          />
          <FormInput
            value={password}
            componentType="password"
            placeholderText={isNewPassword ? t('firstPassword') : null}
            prompt={t('masterPassword')}
            label={t('password')}
            handleChange={this.handleChange}
            handleInputFocus={this.handleConfirmPasswordFocus}
            inputRef={(input) => { this.passwordRef = input; }}
            handleInputVisibility={this.togglePasswordVisibility}
            visibility={passwordVisibility}
          />
          <View style={{
            flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', marginTop: 10,
          }}
          >
            <Text>{t('confirmSwitch')}</Text>
            <Switch
              value={isNewPassword}
              onValueChange={this.handleToggleSwitch}
              color={colors.primary}
              style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
            />
          </View>
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
            />
            { inputError && (
              <View style={styles.warning}>
                <Text style={{ color: colors.warning }}>{t('warning')}</Text>
                <IconButton icon="warning" color={colors.warning} style={styles.icon} />
              </View>
            )
            }
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
          style={{ alignSelf: 'center' }}
          contentStyle={{ width: '100%', height: 40 }}
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
