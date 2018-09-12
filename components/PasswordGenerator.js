import React from 'react';
import { Form, Item } from 'native-base';
import { Keyboard, Clipboard } from 'react-native';
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
    this.generatePassword = this.generatePassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
        <Form>
          <Item>
            <FormInput name="label" value={label} placeholder="Label..." onChanged={this.handleChange('label')} />
          </Item>
          <Item last>
            <FormInput name="password" value={password} placeholder="Master Password..." secureTextEntry onChanged={this.handleChange('password')} />
          </Item>
          <BaseButton onPress={this.generatePassword} buttonText="Generate Password" />
        </Form>
      );
    }
}
