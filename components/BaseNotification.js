import React from 'react';
import {
  Card, CardItem, Body, Text,
} from 'native-base';

const BaseNotification = ({ message }) => (
  <Card>
    <CardItem>
      <Body>
        <Text>
          { message }
        </Text>
      </Body>
    </CardItem>
  </Card>
);

export default BaseNotification;
