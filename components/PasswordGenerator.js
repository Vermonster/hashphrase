import React from 'react';
import { Form, Item } from 'native-base';
import { Keyboard, Clipboard } from 'react-native';
import FormInput from './FormInput';
import BaseButton from './BaseButton';
import loplop from 'loplop';

export default class PasswordGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 16,
      label: '',
      password: '',
      legacyMode: false
    };
    this.generatePassword = this.generatePassword.bind(this);
    this.toggleLegacyMode = this.toggleLegacyMode.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }
  
    generatePassword = () => {
      Keyboard.dismiss();
      Clipboard.setString(loplop(this.state.label, this.state.password, this.state.length));
      this.props.onClipboardSave();
    }
  
    handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }
  
    toggleLegacyMode = (newLegacyMode) => {
      if (newLegacyMode) {
        this.setState({legacyMode: true, length: 8});
      } else {
        this.setState({legacyMode: false, length: 16});
      }
    }
  
    render() {
      return (
        <Form>
          <Item>
            <FormInput name="label" placeholder="Label..." onChange={this.handleChange}/>
          </Item>
          <Item last>
            <FormInput name="password" placeholder="Master Password..." secureTextEntry={true} onChange={this.handleChange}/>
          </Item>
          <BaseButton onPress={this.generatePassword} buttonText="Generate Password">
          </BaseButton>
        </Form>
      );
    }
  }
  