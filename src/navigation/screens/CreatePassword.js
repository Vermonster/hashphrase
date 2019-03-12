import React, { Component } from 'react';
import { Appbar, Switch } from 'react-native-paper';
import { View, Text } from 'react-native';
import PasswordGenerator from '../../components/PasswordGenerator';

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
          isNewPassword={isNewPassword}
        />
      </View>
    );
  }
}

export default CreateNewPassword;
