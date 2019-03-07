import React, { Component } from 'react';
import { Appbar } from 'react-native-paper';
import { View } from 'react-native';
import i18n from '../i18n/i18n';
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

  render() {
    const { showCopy } = this.state;

    return (
      <View>
        <Appbar.Header>
          <Appbar.Content title={i18n.t('createPassword.title')} />
        </Appbar.Header>
        <PasswordGenerator
          onClipboardSave={this.showNotification}
          describeLabel={i18n.t('createPassword.label')}
          describePassword={i18n.t('createPassword.password')}
        />
        { showCopy && <BaseNotification message={i18n.t('createPassword.message')} /> }
      </View>
    );
  }
}

export default CreateOldPassword;
