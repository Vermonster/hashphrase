import React from 'react';
import { withNamespaces } from 'react-i18next';
import { View } from 'react-native';
import { Card, Button } from 'react-native-paper';

const FlowScreen = (props) => {
  const { t, navigation: { navigate } } = props;

  return (
    <View>
      <Card>
        <Button
          onPress={() => {
            navigate('PasswordScreen', {
              isNewPassword: false,
            });
          }}
          mode="contained"
        >
          {t('oldPasswordFlow')}
        </Button>
        <Button
          onPress={() => {
            navigate('PasswordScreen', {
              isNewPassword: true,
            });
          }}
          mode="contained"
        >
          {t('newPasswordFlow')}
        </Button>
      </Card>
    </View>
  );
};

export { FlowScreen as TestFlowScreen };
export default withNamespaces()(FlowScreen);
