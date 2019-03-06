import React from 'react';
import { View } from 'react-native';
import { Card, Button } from 'react-native-paper';

const FlowScreen = (props) => {
// eslint-disable-next-line
  const { navigate } = props.navigation;

  return (
    <View>
      <Card>
        <Button onPress={() => navigate('OldPassword')}>
          Old password flow
        </Button>
        <Button onPress={() => navigate('NewPassword')}>
          New password flow
        </Button>
      </Card>
    </View>
  );
};

export default FlowScreen;
