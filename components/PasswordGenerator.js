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
      legacyMode: false,
      onChanged: false,
    };
    this.generatePassword = this.generatePassword.bind(this);
    // this.toggleLegacyMode = this.toggleLegacyMode.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ label: e.target.value });
    this.setState({ password: e.target.value });
    // this.setState({ [label]: e.target.value }, () => console.log('test'));
    // this.setState({ [e.target.name]: e.target.value });
    // console.log(`value is ${e.target.value}`);
  }

  generatePassword(e) {
    e.preventDefault();
    console.log(`${this.state.label}`);

    // how to handle toggling to legacy? errors handled?
    // deal with async... where?
    // const isLegacy = ((this.state.label).lastIndexOf('*', 0)) > -1;
    // console.log(`${isLegacy}`);
    // SET STATE for legacymode and then rest is callback? or on onchange?
    const {
      label, password, length,
    } = this.state;
    const { onClipboardSave } = this.props;
    Keyboard.dismiss();
    Clipboard.setString(loplop(label, password, length));
    onClipboardSave();
    // console.log(`${this.state.label.length}`);
    // console.log(`${this.state.label}`);
  }



    // handleChange = (e) => {
    //   console.log(e);
    //   this.setState
    //   // this.setState({ [e.target.name]: e.target.value });
    //   // console.log(`value is ${e.target.value}`);
    // };

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
          <FormInput name="label" value={this.state.label} placeholder="Label..." onChanged={this.handleChange} />
        </Item>
        <Item last>
          <FormInput name="password" value={this.state.password} placeholder="Master Password..." secureTextEntry onChanged={this.handleChange} />
        </Item>
        <BaseButton onPress={this.generatePassword} buttonText="Generate Password" />
      </Form>
    );
  }
}
