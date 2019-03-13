import React, { Component } from 'react';
import { Switch, Appbar } from 'react-native-paper';
import { View, Text } from 'react-native';
import { withTranslation } from 'react-i18next';
import PasswordGenerator from '../../components/PasswordGenerator';
import BaseNotification from '../../components/BaseNotification';
import i18n from '../i18n/i18n';

class CreateNewPassword extends Component {
  constructor(props) {
    super(props);
    const { navigation: { getParam } } = this.props;
    this.state = {
      isNewPassword: getParam('isNewPassword'),
    };
  }

  handleToggleSwitch = () => this.setState(({ isNewPassword }) => ({
    isNewPassword: !isNewPassword,
  }))

  render() {
    const { isNewPassword } = this.state;

    return (
      <View>
        <Appbar.Header>
          <Appbar.Content title="AgiliKey" />
        </Appbar.Header>
        <View>
          <Text>Creating a new account password?</Text>
          <Switch
            value={isNewPassword}
            onValueChange={this.handleToggleSwitch}
          />
        </View>
        <PasswordGenerator
          isNewPassword={isNewPassword}
        />
      </View>
    );
  }
}

export default withTranslation('createPassword')(CreateNewPassword);
