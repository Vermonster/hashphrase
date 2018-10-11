import React, { Component } from 'react';
import { Appbar } from 'react-native-paper';
import { View } from 'react-native';
import PasswordGenerator from '../../../components/PasswordGenerator';
import BaseNotification from '../../../components/BaseNotification';
import i18n from '../i18n/i18n';

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

  translateText = () => {
    const namespace = 'createPassword';
    const finalObj = {};
    ['title', 'label', 'password', 'message'].forEach((str) => {
      finalObj[str] = i18n.t(`${namespace}.${str}`);
    });
    return finalObj;
  }

  render() {
    const { showCopy } = this.state;
    const terms = this.translateText();

    return (
      <View>
        <Appbar.Header>
          <Appbar.Content title={terms.title} />
        </Appbar.Header>
        <PasswordGenerator
          onClipboardSave={this.showNotification}
          describeLabel={terms.label}
          describePassword={terms.password}
        />
        { showCopy && <BaseNotification message={terms.message} /> }
      </View>
    );
  }
}

export default CreateOldPassword;
