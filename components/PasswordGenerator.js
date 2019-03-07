import React from 'react';
import { Keyboard, Clipboard, View } from 'react-native';
import loplop from 'loplop';
import FormInput from './FormInput';
import BaseButton from './BaseButton';

export default class PasswordGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      password: '',
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

    generatePassword = (e) => {
      e.preventDefault();
      const { label, password } = this.state;
      this.setState({ generatedPassword: loplop(label, password) }, () => {
        const { generatedPassword } = this.state;
        this.addToClipboard(generatedPassword);
      });
      Keyboard.dismiss();
    };

    render() {
      const { label, password } = this.state;
      return (
        <View>
          <FormInput name="label" value={label} placeholder="Label..." onChanged={this.handleChange('label')} />
          <FormInput name="password" value={password} placeholder="Master Password..." secureTextEntry onChanged={this.handleChange('password')} />
          <BaseButton onPress={this.generatePassword} buttonText="Generate Password" />
        </View>
      );
    }
}
