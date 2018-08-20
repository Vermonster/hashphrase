import React from 'react';
import { Form, Item } from 'native-base';
import { Keyboard, Clipboard } from 'react-native';
import FormInput from './FormInput';
import FormButton from './FormButton';
import loplop from 'loplop';

export default class PwForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        length: 16,
        label: '',
        password: '',
        showCopy: false,
        legacyMode: false
      };
      this.generatePassword = this.generatePassword.bind(this);
      this.toggleLegacyMode = this.toggleLegacyMode.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
  
  //possible issue with asyncronous state setting and using values in this f(n)?
    generatePassword = () => {
      Keyboard.dismiss();
      Clipboard.setString(loplop(this.state.label, this.state.password, this.state.length));
      this.setState({showCopy: true});
    }
  
    handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }
  
    //not currently using legacy mode
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
              <FormButton onPress={this.generatePassword}>
              </FormButton>
            </Form>
      );
    }
  }
  