import React, { Component } from 'react';
import { Appbar, Switch } from 'react-native-paper';
import { View, Text } from 'react-native';
import PasswordGenerator from '../../components/PasswordGenerator';
import BaseNotification from '../../components/BaseNotification';

class CreateNewPassword extends Component {
  state = {
    isNewPassword: this.props.navigation.getParam('isNewPassword'),
    showCopy: false,
  };

  handleToggleSwitch = () => this.setState(({ isNewPassword }) => ({
    isNewPassword: !isNewPassword,
  }))

  showNotification = () => {
    this.setState({ showCopy: true });
  }

  render() {
    const copy = 'Generated password was copied to the clipboard';
    const { showCopy, isNewPassword } = this.state;

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
          onClipboardSave={this.showNotification}
          isNewPassword={isNewPassword}
        />
        { showCopy && <BaseNotification message={copy} /> }
      </View>
    );
  }
}

export default CreateNewPassword;
