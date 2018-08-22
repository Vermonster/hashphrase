import React from 'react';
import { Card, CardItem, Body, Text } from 'native-base';

const BaseNotification = (props) => (
  <Card>
    <CardItem>
      <Body>
        <Text>
          {props.message}
        </Text>
      </Body>
    </CardItem>
  </Card>
);

export default BaseNotification;