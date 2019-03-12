import React, { Component } from 'react';
import { Appbar, Switch } from 'react-native-paper';
import { View, Text } from 'react-native';
import PasswordGenerator from '../../components/PasswordGenerator';
import BaseNotification from '../../components/BaseNotification';

class CreateNewPassword extends Component {
  constructor(props) {
    super(props);
    const { navigation: { getParam } } = this.props;
    this.state = {
      isNewPassword: getParam('isNewPassword'),
      showNotification: false,
    };
  }

  handleToggleSwitch = () => this.setState(({ isNewPassword }) => ({
    isNewPassword: !isNewPassword,
  }))

  displayNotification = () => {
    this.setState({ showNotification: true });
  }

  hideNotification = () => {
    this.setState({ showNotification: false });
  }

  render() {
    const copy = 'Generated password was copied to the clipboard';
    const { showNotification, isNewPassword } = this.state;

    return (
      <View>
        <Appbar.Header>
          <Appbar.Content title="Agili Key" />
        </Appbar.Header>
        <View>
          <Text>Creating a new account password?</Text>
          <Switch
            value={isNewPassword}
            onValueChange={this.handleToggleSwitch}
          />
        </View>
        <PasswordGenerator
          displayNotification={this.displayNotification}
          hideNotification={this.hideNotification}
          isNewPassword={isNewPassword}
        />
        { showNotification && <BaseNotification message={copy} /> }
      </View>
    );
  }
}

export default CreateNewPassword;
