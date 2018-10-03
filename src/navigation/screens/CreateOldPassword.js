import React, { Component } from 'react';
import { Appbar } from 'react-native-paper';
import { View } from 'react-native';
import PasswordGenerator from '../../../components/PasswordGenerator';
import BaseNotification from '../../../components/BaseNotification';

class CreateOldPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCopy: false,
    };
  }

  showNotification = () => {
    this.setState({ showCopy: true });
  }

  translate = () => {
    const text = {};
    const { t } = this.props;
    text.message = t('createPassword.message');
    text.title = t('createPassword.title');
    return text;
  }

  render() {
    const { showCopy } = this.state;
    const text = this.translate();

    return (
      <View>
        <Appbar.Header>
          <Appbar.Content title={text.title} />
        </Appbar.Header>
        <PasswordGenerator onClipboardSave={this.showNotification} />
        { showCopy && <BaseNotification message={text.message} /> }
      </View>
    );
  }
}

export default CreateOldPassword;
