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
      length: 16,
      label: '',
      password: '',
      // legacyMode: false,
    };
    this.generatePassword = this.generatePassword.bind(this);
    // this.toggleLegacyMode = this.toggleLegacyMode.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

    generatePassword = () => {
      const {
        label, password, length,
      } = this.state;
      const { onClipboardSave } = this.props;
      Keyboard.dismiss();
      Clipboard.setString(loplop(label, password, length));
      onClipboardSave();
    }

    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }

    // legacy toggle is not currently active, but might use in the future
    //-------------------------------------------------------------------
    // toggleLegacyMode = (newLegacyMode) => {
    //   if (newLegacyMode) {
    //     this.setState({ legacyMode: true, length: 8 });
    //   } else {
    //     this.setState({ legacyMode: false, length: 16 });
    //   }
    // }

    render() {
      return (
        <Form>
          <Item>
            <FormInput name="label" placeholder="Label..." onChange={this.handleChange} />
          </Item>
          <Item last>
            <FormInput name="password" placeholder="Master Password..." secureTextEntry onChange={this.handleChange} />
          </Item>
          <BaseButton onPress={this.generatePassword} buttonText="Generate Password" />
        </Form>
      );
    }
}
