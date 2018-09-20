import React from 'react';
import { Card, Text } from 'react-native-paper';

const BaseNotification = ({ message }) => (
  <Card>
    <Card.Content>
      <Text>
        { message }
      </Text>
    </Card.Content>
  </Card>
);

export default BaseNotification;
