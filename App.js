import React, { Component } from 'react';
import { Container, Content, Text, Footer, Header, Title, Button, Form, Item, Input, Card, CardItem, Body } from 'native-base';
// import FormInput from './components/FormInput';
import FormButton from './components/FormButton';
import FormInput from './components/FormInput';
import { Keyboard, Clipboard } from 'react-native';
import loplop from 'loplop';

export default class App extends React.Component {
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
    const showCopy = this.state.showCopy;
    let copy;
    if (showCopy) {
      copy = <Card><CardItem><Body><Text>Generated password was copied to the clipboard</Text></Body></CardItem></Card>
    }

    return (
      <Container>
        <Header>
          <Body>
            <Title>Oplop</Title>
          </Body>
        </Header>
        <Content padder>
          <Form>
            <Item>
              <FormInput name="label" placeholder="Label..." onChange={this.handleChange}/>
            </Item>
            <Item last>
              <FormInput name="password" placeholder="Master Password..." secureTextEntry={true} onChange={this.handleChange}/>
            </Item>
          </Form>

          <FormButton onPress={this.generatePassword}>
          </FormButton>
          {copy}
        </Content>
        <Footer/>
      </Container>
    );
  }
}
