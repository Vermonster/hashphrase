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

    generatePassword = (e) => {
      e.preventDefault();
      const { label, password } = this.state;
      const { onClipboardSave } = this.props;
      Keyboard.dismiss();
      Clipboard.setString(loplop(label, password));
      onClipboardSave();
    }

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
