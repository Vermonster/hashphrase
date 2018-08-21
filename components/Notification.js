import React from 'react';
import { Card, CardItem, Body, Text } from 'native-base';

const Notification = (props) => (
  <Card>
    <CardItem>
      <Body>
        <Text>
          {props.text}
        </Text>
      </Body>
    </CardItem>
  </Card>
);

export default Notification;