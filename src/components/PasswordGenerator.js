import React from 'react';
import {
  Keyboard, Clipboard, View, Text,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import loplop from 'loplop';

export default class PasswordGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      password: '',
      confirmPassword: '',
      generatedPassword: '',
      disabled: true,
    };
  }

  handleChange = name => (e) => {
    const inputValue = e.nativeEvent.text;
    this.setState({ [name]: inputValue }, this.handleSubmitButtonState);
  }

  addToClipboard = (password) => {
    const { onClipboardSave } = this.props;
    Clipboard.setString(password);
    onClipboardSave();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { label, password, confirmPassword } = this.state;
    const { isNewPassword } = this.props;
    if (isNewPassword && (password !== confirmPassword)) return null;
    return this.generatePassword(label, password);
  };

  handleSubmitButtonState() {
    const { label, password, confirmPassword } = this.state;
    const { isNewPassword } = this.props;
    if (isNewPassword && label && password && confirmPassword) {
      return this.setState({ disabled: false });
    }
    if (!isNewPassword && label && password) {
      return this.setState({ disabled: false });
    }
    return null;
  }

  generatePassword(label, password) {
    this.setState({ generatedPassword: loplop(label, password) }, () => {
      const { generatedPassword } = this.state;
      this.addToClipboard(generatedPassword);
    });
    Keyboard.dismiss();
  }

  render() {
    const {
      label, password, confirmPassword, disabled,
    } = this.state;
    const { isNewPassword } = this.props;

    return (
      <View>
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
      </View>
    );
  }
}
