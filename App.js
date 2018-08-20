import React, { Component } from 'react';
import { Container, Content, Text, Footer, Header, Title, Button, Form, Item, Input, Card, CardItem, Body } from 'native-base';
// import FormInput from './components/FormInput';
import FormButton from './components/FormButton';
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
  }

//possible issue with asyncronous state setting and using values in this f(n)?
  generatePassword = () => {
    Keyboard.dismiss();
    Clipboard.setString(loplop(this.state.label, this.state.password, this.state.length));
    this.setState({showCopy: true});
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
              <Input placeholder="Label..." autoCapitalize="none" onChangeText={(label) => this.setState({label})}/>
            </Item>
            <Item last>
              <Input placeholder="Master Password..." secureTextEntry={true} autoCapitalize="none" onChangeText={(password) => this.setState({password})}/>
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
