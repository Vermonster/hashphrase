import React from 'react';
import { View } from 'react-native';
import { Card, Button } from 'react-native-paper';

const FlowScreen = (props) => {
  const { navigation: { navigate } } = props;

  return (
    <View>
      <Card>
        <Button
          onPress={() => navigate('OldPassword')}
          mode="contained"
        >
          Old password flow
        </Button>
        <Button
          onPress={() => navigate('NewPassword')}
          mode="contained"
        >
          New password flow
        </Button>
      </Card>
    </View>
  );
};

export default FlowScreen;
