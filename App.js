import React, { Component } from 'react';
import { Container, Content, Text, Footer, Header, Title, Button, Form, Item, Input, Card, CardItem, Body } from 'native-base';
import { Keyboard, Clipboard } from 'react-native';
import loplop from 'loplop';

export default class App extends React.Component {
  state = {
    length: 16,
    label: '',
    password: '',
    showCopy: false,
    legacyMode: false
  }

  generatePassword = (label, password) => {
    Keyboard.dismiss();
    Clipboard.setString(loplop(label, password, this.state.length));
    this.setState({showCopy: true});
  }

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

          <Button full
            onPress={() => this.generatePassword(this.state.label, this.state.password)}>
            <Text>Generate Password</Text>
          </Button>
          {copy}
        </Content>
        <Footer/>
      </Container>
    );
  }
}
