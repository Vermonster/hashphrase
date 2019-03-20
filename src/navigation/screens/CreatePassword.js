import React, { Component } from 'react';
import { Switch, Appbar } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';
import { withNamespaces } from 'react-i18next';
import Logo from '../../styles/icons';
import PasswordGenerator from '../../components/PasswordGenerator';
import { colors, rowCenter, fontSize } from '../../styles/base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.white,
  },
  newPass: {
    ...rowCenter,
    marginVertical: 32,

  },
  logo: {
    ...StyleSheet.absoluteFill,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  newPassLabel: {
    fontSize: fontSize.lg,
  },
});

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
      <View style={styles.container}>
        <Appbar.Header style={styles.header}>
          <View style={styles.logo}>
            <Logo />
          </View>
          <Appbar.Content title="AgiliKEY" />
          <Appbar.Action icon="info" color={colors.primary} size={28} onPress={() => { }} />
        </Appbar.Header>
        <View style={styles.newPass}>
          <Text style={styles.newPassLabel}>{t('newPassword')}</Text>
          <Switch
            value={isNewPassword}
            onValueChange={this.handleToggleSwitch}
            color={colors.primary}
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
