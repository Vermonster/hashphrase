import React, { Component } from 'react';
import { Appbar } from 'react-native-paper';
import { View } from 'react-native';
import PasswordGenerator from '../../../components/PasswordGenerator';
import BaseNotification from '../../../components/BaseNotification';

class CreateNewPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCopy: false,
    };
  }

  showNotification = () => {
    this.setState({ showCopy: true });
  }

  render() {
    const copy = 'Generated password was copied to the clipboard';
    const { showCopy } = this.state;

    return (
      <View>
        <Appbar.Header>
          <Appbar.Content title="Placeholder file for a future component" />
        </Appbar.Header>
        <PasswordGenerator onClipboardSave={this.showNotification} />
        { showCopy && <BaseNotification message={copy} /> }
      </View>
    );
  }
}

export default CreateNewPassword;
