import React, { Component } from 'react';
import { Switch, Appbar } from 'react-native-paper';
import { View, Text } from 'react-native';
import { withNamespaces } from 'react-i18next';
import PasswordGenerator from '../../components/PasswordGenerator';

class CreateNewPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNewPassword: false,
    };
  }

  handleToggleSwitch = () => this.setState(({ isNewPassword }) => ({
    isNewPassword: !isNewPassword,
  }))

  render() {
    const { isNewPassword } = this.state;
    const { t } = this.props;

    return (
      <View>
        <Appbar.Header>
          <Appbar.Content title={t('title')} />
        </Appbar.Header>
        <View>
          <Text>{t('newPassword')}</Text>
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

export default withNamespaces('createPassword')(CreateNewPassword);
export { CreateNewPassword as TestCreatePassword };
