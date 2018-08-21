import React, { Component } from 'react';
import { Container, Content, Footer, Header, Title, Body } from 'native-base';
import PwForm from './components/PwForm';
import Notification from './components/Notification';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCopy: false,
    };
    this.showNotification = this.showNotification.bind(this);
  }

  showNotification = () => {
    this.setState({showCopy: true});
  }

  render() {
    const copy = 'Generated password was copied to the clipboard';

    return (
      <Container>
        <Header>
          <Body>
            <Title>Loplop</Title>
          </Body>
        </Header>
        <Content padder>
          <PwForm cb={this.showNotification} />
          {this.state.showCopy 
            ? <Notification text={copy} />
            : null
          }
        </Content>
        <Footer/>
      </Container>
    );
  }
}
