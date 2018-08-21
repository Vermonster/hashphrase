import React from 'react';
import { Card, CardItem, Body, Text } from 'native-base';
import PropTypes from 'prop-types';

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

Notification.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Notification;