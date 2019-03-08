import React from 'react';
import { View } from 'react-native';
import { Card, Button } from 'react-native-paper';

const FlowScreen = (props) => {
  const { navigation: { navigate } } = props;

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
          Old password flow
        </Button>
        <Button
          onPress={() => {
            navigate('PasswordScreen', {
              isNewPassword: true,
            });
          }}
          mode="contained"
        >
          New password flow
        </Button>
      </Card>
    </View>
  );
};

export default FlowScreen;
