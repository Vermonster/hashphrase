import React, { Component } from 'react';
import { Appbar, Switch } from 'react-native-paper';
import { View, Text } from 'react-native';
import PasswordGenerator from '../../../components/PasswordGenerator';
import BaseNotification from '../../../components/BaseNotification';

class CreateNewPassword extends Component {
  state = {
    newPassword: false,
    showCopy: false,
  };

  handleToggleSwitch = () => this.setState(({ newPassword }) => ({
    newPassword: !newPassword,
  }))

  showNotification = () => {
    this.setState({ showCopy: true });
  }

  render() {
    const copy = 'Generated password was copied to the clipboard';
    const { showCopy, newPassword } = this.state;

    return (
      <View>
        <Appbar.Header>
          <Appbar.Content title="Agili Key" />
        </Appbar.Header>
        <View>
          <Text>Creating a new password?</Text>
          <Switch
            value={newPassword}
            onValueChange={this.handleToggleSwitch}
          />
        </View>
        <PasswordGenerator
          onClipboardSave={this.showNotification}
          newPassword={newPassword}
        />
        { showCopy && <BaseNotification message={copy} /> }
      </View>
    );
  }
}

export default CreateNewPassword;
