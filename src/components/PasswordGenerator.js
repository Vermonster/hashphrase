import React from 'react';
import {
  Keyboard, Clipboard, View, Text, Button,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import loplop from 'loplop';

export default class PasswordGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      password: '',
      confirmPassword: '',
      generatedPassword: '',
    };
  }

    handleChange = name => (e) => {
      const inputValue = e.nativeEvent.text;
      this.setState({ [name]: inputValue });
    };

    addToClipboard = (password) => {
      const { onClipboardSave } = this.props;
      Clipboard.setString(password);
      onClipboardSave();
    };

    handleSubmit = (e) => {
      e.preventDefault();
      const { label, password, confirmPassword } = this.state;
      const { isNewPassword } = this.props;
      if (isNewPassword && (password !== confirmPassword)) {
        return null;
      }
      return this.generatePassword(label, password);
    };

    generatePassword(label, password) {
      this.setState({ generatedPassword: loplop(label, password) }, () => {
        const { generatedPassword } = this.state;
        this.addToClipboard(generatedPassword);
      });
      Keyboard.dismiss();
    }

    render() {
      const { label, password, confirmPassword } = this.state;
      const { isNewPassword } = this.props;

      return (
        <View>
          <Text>What is the account password&apos;s Nickname?</Text>
          <TextInput
            name="label"
            value={label}
            placeholder="Nickname"
            label="Nickname"
            textContentType="username"
            onChange={this.handleChange('label')}
          />
          <Text>What is your Master Password?</Text>
          <TextInput
            name="password"
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
                name="confirmPassword"
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
          <Button mode="contained" onPress={this.handleSubmit} testId="button">
            CREATE ACCOUNT PASSWORD
          </Button>
        </View>
      );
    }
}
