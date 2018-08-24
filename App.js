import React, { Component } from 'react';
import {
  Container, Content, Footer, Header, Title, Body,
} from 'native-base';
import PasswordGenerator from './components/PasswordGenerator';
import BaseNotification from './components/BaseNotification';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCopy: false,
    };
    this.showNotification = this.showNotification.bind(this);
  }

  showNotification = () => {
    this.setState({ showCopy: true });
  }

  render() {
    const copy = 'Generated password was copied to the clipboard';
    const { showCopy } = this.state;
    return (
      <Container>
        <Header>
          <Body>
            <Title>Loplop</Title>
          </Body>
        </Header>
        <Content padder>
          <PasswordGenerator onClipboardSave={this.showNotification} />
          { showCopy
            ? <BaseNotification message={copy} />
            : null
          }
        </Content>
        <Footer />
      </Container>
    );
  }
}
