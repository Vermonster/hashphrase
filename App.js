import React, { Component } from 'react';
import { Container, Content, Text, Footer, Header, Title, Card, CardItem, Body } from 'native-base';
import PwForm from './components/PwForm';
// import FormInput from './components/FormInput';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCopy: false,
    };

  }

  render() {
    // const showCopy = this.state.showCopy;
    // let copy;
    // if (showCopy) {
    //   copy = <Card><CardItem><Body><Text>Generated password was copied to the clipboard</Text></Body></CardItem></Card>
    // }

    return (
      <Container>
        <Header>
          <Body>
            <Title>Oplop</Title>
          </Body>
        </Header>
        <Content padder>
          <PwForm />
          {/* {copy} */}
        </Content>
        <Footer/>
      </Container>
    );
  }
}
