import React from 'react';
import {
  Keyboard, Clipboard, View, Text,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import loplop from 'loplop';
import ConfirmationDialog from './ConfirmationDialog';

export default class PasswordGenerator extends React.Component {
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

  setModalVisibility() {
    return this.setState({ modalVisibility: true });
  }

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
    this.setModalVisibility();
  }

  render() {
    const {
      label, password, confirmPassword, generatedPassword, disabled, modalVisibility,
    } = this.state;
    const { isNewPassword } = this.props;

    return (
      <View style={modalVisibility ? { backgroundColor: 'rgba(0, 0, 0, 0.5)' } : null}>
        <Text>What is the account password&apos;s Nickname?</Text>
        <TextInput
          value={label}
          placeholder="Nickname"
          label="Nickname"
          textContentType="username"
          onChange={this.handleChange('label')}
        />
        <Text>What is your Master Password?</Text>
        <TextInput
          value={password}
          placeholder="Master Password"
          label="Master Password"
          textContentType="password"
          secureTextEntry
          onChange={this.handleChange('password')}
        />
        { isNewPassword && (
          <>
            <Text>Retype your Master Password</Text>
            <TextInput
              value={confirmPassword}
              placeholder="Confirm Master Password"
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
          onPress={this.handleSubmit}
          accessibilityLabel="CREATE ACCOUNT PASSWORD BUTTON"
          disabled={disabled}
          mode="contained"
          dark
          color="#D37F26"
        >
          CREATE ACCOUNT PASSWORD
        </Button>
        <ConfirmationDialog
          visible={modalVisibility}
          generatedPassword={generatedPassword}
        />
      </View>
    );
  }
}
